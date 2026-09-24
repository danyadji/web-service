<?php

namespace App\Filament\Resources\Services\RelationManagers;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\CreateAction;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Schemas\Schema;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class PackagesRelationManager extends RelationManager
{
    protected static string $relationship = 'packages';

    public function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                Select::make('name')
                    ->label('Tier')
                    ->options([
                        'Basic' => 'Basic',
                        'Essential' => 'Essential',
                        'Custom' => 'Custom',
                    ])
                    ->required(),
                TextInput::make('price')
                    ->label('Harga (Rp)')
                    ->numeric()
                    ->prefix('Rp')
                    ->helperText('Kosongkan bila belum ditentukan.'),
                TextInput::make('duration_estimate')
                    ->label('Estimasi pengerjaan')
                    ->placeholder('1-2 minggu'),
                TextInput::make('bonus_text')
                    ->label('Teks bonus')
                    ->placeholder('Bonus 1 bulan Basic Care')
                    ->columnSpanFull(),
                Repeater::make('features')
                    ->label('Fitur')
                    ->simple(
                        TextInput::make('fitur')->required(),
                    )
                    ->columnSpanFull(),
                Toggle::make('is_highlighted')
                    ->label('Tonjolkan (rekomendasi)')
                    ->default(false),
                TextInput::make('sort_order')
                    ->label('Urutan')
                    ->numeric()
                    ->default(0),
            ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('name')
            ->columns([
                TextColumn::make('name')
                    ->label('Tier'),
                TextColumn::make('price')
                    ->label('Harga')
                    ->money('IDR'),
                IconColumn::make('is_highlighted')
                    ->label('Rekomendasi')
                    ->boolean(),
                TextColumn::make('sort_order')
                    ->label('Urutan')
                    ->sortable(),
            ])
            ->defaultSort('sort_order')
            ->headerActions([
                CreateAction::make(),
            ])
            ->recordActions([
                EditAction::make(),
                DeleteAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
