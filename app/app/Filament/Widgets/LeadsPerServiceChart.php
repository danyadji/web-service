<?php

namespace App\Filament\Widgets;

use App\Models\Lead;
use Filament\Widgets\ChartWidget;
use Illuminate\Support\Facades\Cache;

class LeadsPerServiceChart extends ChartWidget
{
    protected ?string $heading = 'Leads per layanan';

    protected function getData(): array
    {
        return Cache::remember('dash:leads-service', 300, function () {
            $services = [
                'Website Company Profile',
                'Landing Page',
                'Toko Online',
                'Redesign Website',
                'Custom',
            ];

            $selects = [];
            foreach ($services as $i => $name) {
                $quoted = str_replace("'", "''", $name);
                $selects[] = "SUM(service_interested LIKE '%{$quoted}%') AS s{$i}";
            }

            $row = Lead::query()->selectRaw(implode(', ', $selects))->first();

            return [
                'datasets' => [
                    [
                        'data' => array_map(fn ($i) => (int) ($row->{"s{$i}"} ?? 0), array_keys($services)),
                    ],
                ],
                'labels' => $services,
            ];
        });
    }

    protected function getType(): string
    {
        return 'doughnut';
    }
}
