<?php

use App\Http\Controllers\ContactController;
use App\Models\Portfolio;
use App\Models\Service;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

function publicPortfolioItem(Portfolio $p): array
{
    return [
        'title' => $p->title,
        'slug' => $p->slug,
        'description' => $p->description,
        'client_name' => $p->client_name,
        'cover_url' => $p->cover_image ? '/storage/'.$p->cover_image : null,
        'gallery_urls' => collect($p->gallery_images ?? [])
            ->map(fn ($path) => '/storage/'.$path)
            ->all(),
        'alt_text' => $p->alt_text,
        'demo_url' => $p->demo_url,
        'technologies' => $p->technologies ?? [],
        'service' => $p->service?->name,
        'year' => ($p->published_at ?? $p->created_at)?->year,
    ];
}

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

    return $query->get()->map(fn (Portfolio $p) => publicPortfolioItem($p))->all();
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
Route::get('/portofolio/{slug}', function (string $slug) {
    $item = Portfolio::query()
        ->with('service:id,name')
        ->where('slug', $slug)
        ->where('is_published', true)
        ->firstOrFail();

    $others = Portfolio::query()
        ->where('is_published', true)
        ->where('id', '!=', $item->id)
        ->orderBy('sort_order')
        ->limit(2)
        ->get()
        ->map(fn (Portfolio $p) => publicPortfolioItem($p))
        ->all();

    return Inertia::render('PortfolioDetail', [
        'item' => publicPortfolioItem($item),
        'others' => $others,
    ]);
})->name('portfolio.show');
Route::get('/layanan', fn () => Inertia::render('Layanan', [
    'serviceTiers' => serviceTiers(),
]))->name('layanan');
Route::redirect('/harga', '/layanan', 301);
Route::get('/kontak', fn () => Inertia::render('Kontak'))->name('kontak');
Route::post('/kontak', [ContactController::class, 'store'])
    ->middleware('throttle:5,1')
    ->name('kontak.store');
