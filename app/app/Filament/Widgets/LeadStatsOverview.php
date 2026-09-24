<?php

namespace App\Filament\Widgets;

use App\Models\Lead;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;
use Illuminate\Support\Facades\Cache;

class LeadStatsOverview extends StatsOverviewWidget
{
    protected function getStats(): array
    {
        $row = Cache::remember('dash:lead-stats', 300, function () {
            return Lead::query()
                ->selectRaw('COUNT(*) AS total')
                ->selectRaw("SUM(status = 'deal') AS deals")
                ->selectRaw('SUM(YEAR(created_at) = YEAR(CURDATE()) AND MONTH(created_at) = MONTH(CURDATE())) AS month')
                ->first();
        });

        $total = (int) ($row->total ?? 0);

        return [
            Stat::make('Total leads', $total),
            Stat::make('Bulan ini', (int) ($row->month ?? 0)),
            Stat::make('Deal rate', $total > 0 ? round($row->deals / $total * 100) . '%' : '-')
                ->description("{$row->deals} deal dari {$total} leads"),
        ];
    }
}
