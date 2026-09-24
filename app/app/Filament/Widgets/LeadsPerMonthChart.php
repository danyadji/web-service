<?php

namespace App\Filament\Widgets;

use App\Models\Lead;
use Filament\Widgets\ChartWidget;
use Illuminate\Support\Facades\Cache;

class LeadsPerMonthChart extends ChartWidget
{
    protected ?string $heading = 'Leads 6 bulan terakhir';

    protected function getData(): array
    {
        return Cache::remember('dash:leads-month', 300, function () {
            $months = [];
            for ($i = 5; $i >= 0; $i--) {
                $date = now()->subMonths($i);
                $months[$date->format('Y-m')] = $date->isoFormat('MMM YYYY');
            }

            $rows = Lead::query()
                ->selectRaw("DATE_FORMAT(created_at, '%Y-m') AS ym, COUNT(*) AS c")
                ->where('created_at', '>=', now()->subMonths(6)->startOfMonth())
                ->groupBy('ym')
                ->pluck('c', 'ym');

            return [
                'datasets' => [
                    [
                        'label' => 'Leads',
                        'data' => array_map(fn ($ym) => (int) ($rows[$ym] ?? 0), array_keys($months)),
                    ],
                ],
                'labels' => array_values($months),
            ];
        });
    }

    protected function getType(): string
    {
        return 'line';
    }
}
