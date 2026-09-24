<?php

use App\Http\Controllers\ContactController;
use App\Models\BlogPost;
use App\Models\Portfolio;
use App\Models\Service;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;

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
Route::get('/blog', function () {
    $posts = BlogPost::query()
        ->where('is_published', true)
        ->latest('published_at')
        ->get()
        ->map(fn (BlogPost $p) => [
            'title' => $p->title,
            'slug' => $p->slug,
            'excerpt' => $p->excerpt,
        'cover_url' => $p->cover_image ? '/storage/'.$p->cover_image : null,
        'cover_absolute' => $p->cover_image ? config('app.url').'/storage/'.$p->cover_image : null,
            'published_at' => $p->published_at?->isoFormat('D MMM YYYY'),
        ])->all();

    return Inertia::render('Blog', ['posts' => $posts]);
})->name('blog');
Route::get('/blog/{slug}', function (string $slug) {
    $post = BlogPost::query()->where('slug', $slug)->where('is_published', true)->firstOrFail();

    $others = BlogPost::query()
        ->where('is_published', true)
        ->where('id', '!=', $post->id)
        ->latest('published_at')
        ->limit(2)
        ->get()
        ->map(fn (BlogPost $p) => ['title' => $p->title, 'slug' => $p->slug])
        ->all();

    return Inertia::render('BlogDetail', [
        'post' => [
            'title' => $post->title,
            'excerpt' => $post->excerpt,
            'content' => $post->content,
            'cover_url' => $post->cover_image ? '/storage/'.$post->cover_image : null,
            'cover_absolute' => $post->cover_image ? config('app.url').'/storage/'.$post->cover_image : null,
            'meta_description' => $post->meta_description,
            'published_at' => $post->published_at?->isoFormat('D MMMM YYYY'),
        ],
        'others' => $others,
    ]);
})->name('blog.show');
Route::get('/sitemap.xml', function () {
    $xml = Cache::remember('sitemap.xml', 86400, function () {
        $sitemap = Sitemap::create();

        foreach (['/', '/tentang', '/layanan', '/portofolio', '/blog', '/kontak'] as $path) {
            $sitemap->add(Url::create($path)->setPriority(0.8));
        }

        Portfolio::query()
            ->where('is_published', true)
            ->orderBy('updated_at', 'desc')
            ->each(function (Portfolio $p) use ($sitemap) {
                $sitemap->add(
                    Url::create("/portofolio/{$p->slug}")
                        ->setLastModificationDate($p->updated_at)
                        ->setPriority(0.6)
                );
            });

        BlogPost::query()
            ->where('is_published', true)
            ->orderBy('updated_at', 'desc')
            ->each(function (BlogPost $p) use ($sitemap) {
                $sitemap->add(
                    Url::create("/blog/{$p->slug}")
                        ->setLastModificationDate($p->updated_at)
                        ->setPriority(0.6)
                );
            });

        return $sitemap->render();
    });

    return response($xml, 200, ['Content-Type' => 'application/xml']);
});
