<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ServicePackage extends Model
{
    protected $fillable = [
        'service_id',
        'name',
        'price',
        'features',
        'duration_estimate',
        'bonus_text',
        'is_highlighted',
        'sort_order',
    ];

    protected $casts = [
        'features' => 'array',
        'is_highlighted' => 'boolean',
    ];

    public function service(): BelongsTo
    {
        return $this->belongsTo(Service::class);
    }
}
