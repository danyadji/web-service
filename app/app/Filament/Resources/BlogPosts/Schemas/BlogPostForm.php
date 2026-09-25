<?php

namespace App\Filament\Resources\BlogPosts\Schemas;

use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use App\Support\OptimizedUpload;
use Filament\Schemas\Schema;

class BlogPostForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title')
                    ->required()
                    ->maxLength(255)
                    ->columnSpanFull(),
                TextInput::make('slug')
                    ->required()
                    ->unique(ignoreRecord: true)
                    ->maxLength(255)
                    ->helperText('Otomatis? Isi manual, misal: tips-memilih-jasa-website.'),
                TextInput::make('excerpt')
                    ->maxLength(255)
                    ->columnSpanFull()
                    ->helperText('Ringkasan untuk daftar artikel dan SEO.'),
                RichEditor::make('content')
                    ->required()
                    ->columnSpanFull(),
                FileUpload::make('cover_image')
                    ->label('Gambar sampul')
                    ->image()
                    ->disk('public')
                    ->directory('blog')
                    ->saveUploadedFileUsing(OptimizedUpload::saveUsing('blog'))
                    ->maxSize(10240),
                TextInput::make('meta_title')
                    ->maxLength(255),
                TextInput::make('meta_description')
                    ->maxLength(255),
                Toggle::make('is_published')
                    ->label('Tayang')
                    ->default(false),
                DateTimePicker::make('published_at')
                    ->label('Tanggal tayang'),
                Select::make('author_id')
                    ->label('Penulis')
                    ->relationship('author', 'name')
                    ->default(fn () => auth()->id())
                    ->required(),
            ]);
    }
}
