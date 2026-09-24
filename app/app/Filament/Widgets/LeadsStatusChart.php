<?php

namespace App\Filament\Widgets;

use App\Models\Lead;
use Filament\Widgets\ChartWidget;
use Illuminate\Support\Facades\Cache;

class LeadsStatusChart extends ChartWidget
{
    protected ?string $heading = 'Status leads';

    protected function getData(): array
    {
        return Cache::remember('dash:leads-status', 300, function () {
            $statuses = [
                'new' => 'Baru',
                'contacted' => 'Dihubungi',
                'deal' => 'Deal',
                'closed' => 'Tutup',
            ];

            $rows = Lead::query()
                ->selectRaw('status, COUNT(*) AS c')
                ->groupBy('status')
                ->pluck('c', 'status');

            return [
                'datasets' => [
                    [
                        'data' => array_map(
                            fn ($status) => (int) ($rows[$status] ?? 0),
                            array_keys($statuses)
                        ),
                    ],
                ],
                'labels' => array_values($statuses),
            ];
        });
    }

    protected function getType(): string
    {
        return 'doughnut';
    }
}
