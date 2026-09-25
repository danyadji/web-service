<?php

namespace App\Support;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\Encoders\WebpEncoder;
use Intervention\Image\ImageManager;
use Livewire\Features\SupportFileUploads\TemporaryUploadedFile;

class OptimizedUpload
{
    public static function saveUsing(string $directory, int $maxWidth = 1600, int $quality = 80): callable
    {
        return function (TemporaryUploadedFile $file) use ($directory, $maxWidth, $quality) {
            return static::store($file->getRealPath(), $directory, $maxWidth, $quality);
        };
    }

    public static function store(string $sourcePath, string $directory, int $maxWidth = 1600, int $quality = 80): string
    {
        $manager = new ImageManager(new Driver());
        $image = $manager->decode($sourcePath);
        $image->scaleDown(width: $maxWidth);
        $encoded = $image->encode(new WebpEncoder(quality: $quality));

        $path = trim($directory, '/') . '/' . Str::uuid() . '.webp';
        Storage::disk('public')->put($path, (string) $encoded);

        return $path;
    }
}
