<?php

use App\Http\Controllers\ContactController;
use App\Models\Portfolio;
use App\Models\Service;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

function publicPortfolios(?int $limit = null): array
{
    $query = Portfolio::query()
        ->with('service:id,name')
        ->where('is_published', true)
        ->orderBy('sort_order')
        ->latest('published_at');

    if ($limit) {
        $query->limit($limit);
    }

    return $query->get()->map(fn (Portfolio $p) => [
        'title' => $p->title,
        'description' => $p->description,
        'cover_url' => $p->cover_image ? '/storage/'.$p->cover_image : null,
        'alt_text' => $p->alt_text,
        'demo_url' => $p->demo_url,
        'technologies' => $p->technologies ?? [],
        'service' => $p->service?->name,
    ])->all();
}

function serviceTiers(): array
{
    return Service::query()
        ->where('is_active', true)
        ->with(['packages' => fn ($q) => $q->orderBy('sort_order')])
        ->orderBy('sort_order')
        ->get()
        ->map(fn (Service $s) => [
            'slug' => $s->slug,
            'name' => $s->name,
            'description' => $s->description,
            'packages' => $s->packages->map(fn ($pk) => [
                'name' => $pk->name,
                'price' => $pk->price,
                'features' => $pk->features ?? [],
                'duration_estimate' => $pk->duration_estimate,
                'bonus_text' => $pk->bonus_text,
                'is_highlighted' => (bool) $pk->is_highlighted,
            ])->all(),
        ])->all();
}

Route::get('/', fn () => Inertia::render('Home', [
    'previewPortfolios' => publicPortfolios(2),
    'serviceTiers' => serviceTiers(),
]))->name('home');
Route::get('/tentang', fn () => Inertia::render('Tentang'))->name('tentang');
Route::get('/portofolio', fn () => Inertia::render('Portofolio', [
    'portfolios' => publicPortfolios(),
]))->name('portofolio');
Route::get('/layanan', fn () => Inertia::render('Layanan', [
    'serviceTiers' => serviceTiers(),
]))->name('layanan');
Route::redirect('/harga', '/layanan', 301);
Route::get('/kontak', fn () => Inertia::render('Kontak'))->name('kontak');
Route::post('/kontak', [ContactController::class, 'store'])
    ->middleware('throttle:5,1')
    ->name('kontak.store');
