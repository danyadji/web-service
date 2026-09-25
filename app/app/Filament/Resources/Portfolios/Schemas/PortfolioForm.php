<?php

namespace App\Filament\Resources\Portfolios\Schemas;

use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TagsInput;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use App\Support\OptimizedUpload;
use Filament\Schemas\Schema;
class PortfolioForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Select::make('service_id')
                    ->label('Layanan')
                    ->relationship('service', 'name')
                    ->searchable()
                    ->preload(),
                TextInput::make('title')
                    ->required()
                    ->maxLength(255),
                TextInput::make('slug')
                    ->required()
                    ->unique(ignoreRecord: true)
                    ->maxLength(255)
                    ->helperText('URL ramah, misal: toko-batik-arum.'),
                TextInput::make('client_name')
                    ->maxLength(255),
                Textarea::make('description')
                    ->required()
                    ->rows(4)
                    ->columnSpanFull()
                    ->helperText('Deskripsi unik per project, membantu SEO.'),
                FileUpload::make('cover_image')
                    ->label('Gambar sampul')
                    ->image()
                    ->disk('public')
                    ->directory('portfolios')
                    ->saveUploadedFileUsing(OptimizedUpload::saveUsing('portfolios'))
                    ->maxSize(10240)
                    ->required(),
                FileUpload::make('gallery_images')
                    ->label('Galeri tambahan')
                    ->image()
                    ->multiple()
                    ->disk('public')
                    ->directory('portfolios/gallery')
                    ->saveUploadedFileUsing(OptimizedUpload::saveUsing('portfolios/gallery'))
                    ->maxSize(10240)
                    ->columnSpanFull(),
                TextInput::make('alt_text')
                    ->label('Alt text gambar')
                    ->required()
                    ->maxLength(255),
                TagsInput::make('technologies')
                    ->label('Teknologi yang dipakai')
                    ->placeholder('Ketik lalu Enter, misal: Laravel')
                    ->columnSpanFull(),
                TextInput::make('demo_url')
                    ->label('Link demo')
                    ->url()
                    ->maxLength(255),
                TextInput::make('meta_title')
                    ->maxLength(255),
                TextInput::make('meta_description')
                    ->maxLength(255),
                Toggle::make('is_published')
                    ->label('Tayang')
                    ->required()
                    ->default(true),
                DateTimePicker::make('published_at')
                    ->label('Tanggal tayang'),
                TextInput::make('sort_order')
                    ->label('Urutan')
                    ->required()
                    ->numeric()
                    ->default(0),
            ]);
    }
}
