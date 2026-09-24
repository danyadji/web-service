<?php

namespace App\Filament\Widgets;

use App\Models\Lead;
use Filament\Widgets\ChartWidget;
use Illuminate\Support\Facades\Cache;

class LeadsPerTierChart extends ChartWidget
{
    protected ?string $heading = 'Leads per tier';

    protected function getData(): array
    {
        return Cache::remember('dash:leads-tier', 300, function () {
            $tiers = ['Basic', 'Essential', 'Custom'];

            $row = Lead::query()
                ->selectRaw(implode(', ', array_map(
                    fn ($i, $tier) => "SUM(service_interested LIKE '%tier {$tier}%') AS t{$i}",
                    array_keys($tiers),
                    $tiers
                )))
                ->first();

            return [
                'datasets' => [
                    [
                        'data' => array_map(fn ($i) => (int) ($row->{"t{$i}"} ?? 0), array_keys($tiers)),
                    ],
                ],
                'labels' => $tiers,
            ];
        });
    }

    protected function getType(): string
    {
        return 'doughnut';
    }
}
