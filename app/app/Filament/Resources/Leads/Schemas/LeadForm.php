<?php

namespace App\Filament\Resources\Leads\Schemas;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Schema;

class LeadForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Select::make('status')
                    ->label('Status')
                    ->options([
                        'new' => 'Baru',
                        'contacted' => 'Sudah dihubungi',
                        'deal' => 'Deal',
                        'closed' => 'Tutup',
                    ])
                    ->default('new')
                    ->required(),
                TextInput::make('name')
                    ->label('Nama')
                    ->disabled(),
                TextInput::make('contact')
                    ->label('Kontak')
                    ->disabled(),
                TextInput::make('city')
                    ->label('Kota')
                    ->disabled(),
                TextInput::make('service_interested')
                    ->label('Layanan diminati')
                    ->disabled(),
                Textarea::make('message')
                    ->label('Pesan')
                    ->disabled()
                    ->columnSpanFull(),
                Textarea::make('wa_message_sent')
                    ->label('Pesan WA terkirim')
                    ->disabled()
                    ->columnSpanFull(),
                TextInput::make('ip_address')
                    ->label('IP')
                    ->disabled(),
            ]);
    }
}
