<?php

use App\Models\Portfolio;
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

Route::get('/', fn () => Inertia::render('Home', [
    'previewPortfolios' => publicPortfolios(2),
]))->name('home');
Route::get('/tentang', fn () => Inertia::render('Tentang'))->name('tentang');
Route::get('/portofolio', fn () => Inertia::render('Portofolio', [
    'portfolios' => publicPortfolios(),
]))->name('portofolio');
Route::get('/harga', fn () => Inertia::render('Harga'))->name('harga');
Route::get('/kontak', fn () => Inertia::render('Kontak'))->name('kontak');
