<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Portfolio extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'service_id',
        'title',
        'slug',
        'client_name',
        'description',
        'cover_image',
        'gallery_images',
        'technologies',
        'alt_text',
        'demo_url',
        'meta_title',
        'meta_description',
        'is_published',
        'published_at',
        'sort_order',
    ];

    protected $casts = [
        'gallery_images' => 'array',
        'technologies' => 'array',
        'is_published' => 'boolean',
        'published_at' => 'datetime',
    ];

    public function service(): BelongsTo
    {
        return $this->belongsTo(Service::class);
    }
}
