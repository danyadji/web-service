<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    public function run(): void
    {
        foreach ($this->data() as $service) {
            $packages = $service['packages'];
            unset($service['packages']);

            Service::updateOrCreate(
                ['slug' => $service['slug']],
                array_merge($service, ['features' => $service['features'] ?? []])
            )->packages()->delete();

            $record = Service::where('slug', $service['slug'])->first();

            foreach ($packages as $i => $package) {
                $record->packages()->create(array_merge($package, ['sort_order' => $i]));
            }
        }
    }

    private function data(): array
    {
        return [
            [
                'name' => 'Landing Page',
                'slug' => 'landing-page',
                'description' => 'Satu halaman fokus untuk promosi dan kumpul leads.',
                'duration_estimate' => '1-2 minggu',
                'is_active' => true,
                'sort_order' => 1,
                'packages' => [
                    [
                        'name' => 'Basic',
                        'price' => null,
                        'duration_estimate' => '1 minggu',
                        'bonus_text' => null,
                        'is_highlighted' => false,
                        'features' => [
                            '1 halaman',
                            'Section standar (hero, tentang, kontak)',
                            'Integrasi form dan WhatsApp',
                            'Mobile responsive',
                            '1x revisi minor',
                        ],
                    ],
                    [
                        'name' => 'Essential',
                        'price' => null,
                        'duration_estimate' => '1-2 minggu',
                        'bonus_text' => 'Bonus 1 bulan Basic Care',
                        'is_highlighted' => true,
                        'features' => [
                            'Semua fitur Basic',
                            'Animasi ringan',
                            'Section lebih banyak',
                            'SEO basic',
                            '2x revisi minor',
                        ],
                    ],
                    [
                        'name' => 'Custom',
                        'price' => null,
                        'duration_estimate' => '2-3 minggu',
                        'bonus_text' => null,
                        'is_highlighted' => false,
                        'features' => [
                            'Semua fitur Essential',
                            'Desain full custom',
                            'Copywriting dibantu',
                            'Integrasi tambahan sesuai kebutuhan',
                        ],
                    ],
                ],
            ],
            [
                'name' => 'Company Profile',
                'slug' => 'company-profile',
                'description' => 'Profil usaha untuk pasar luar kota dan ekspor.',
                'duration_estimate' => '2-3 minggu',
                'is_active' => true,
                'sort_order' => 0,
                'packages' => [
                    [
                        'name' => 'Basic',
                        'price' => null,
                        'duration_estimate' => '2 minggu',
                        'bonus_text' => null,
                        'is_highlighted' => false,
                        'features' => [
                            '3-5 halaman',
                            'Desain template disesuaikan',
                            'Integrasi form dan WhatsApp',
                            'Mobile responsive',
                            '1x revisi minor',
                        ],
                    ],
                    [
                        'name' => 'Essential',
                        'price' => null,
                        'duration_estimate' => '2-3 minggu',
                        'bonus_text' => 'Bonus 1 bulan Basic Care',
                        'is_highlighted' => true,
                        'features' => [
                            '6-10 halaman',
                            'Portfolio dan galeri',
                            'Blog sederhana',
                            'SEO lebih dalam',
                            '2x revisi minor',
                        ],
                    ],
                    [
                        'name' => 'Custom',
                        'price' => null,
                        'duration_estimate' => '3-5 minggu',
                        'bonus_text' => null,
                        'is_highlighted' => false,
                        'features' => [
                            'Semua fitur Essential',
                            'Desain full custom',
                            'CMS lengkap',
                            'Multi-bahasa bila relevan',
                        ],
                    ],
                ],
            ],
            [
                'name' => 'E-commerce',
                'slug' => 'ecommerce',
                'description' => 'Katalog, keranjang, dan checkout sederhana.',
                'duration_estimate' => '3-4 minggu',
                'is_active' => true,
                'sort_order' => 2,
                'packages' => [
                    [
                        'name' => 'Basic',
                        'price' => null,
                        'duration_estimate' => '2-3 minggu',
                        'bonus_text' => null,
                        'is_highlighted' => false,
                        'features' => [
                            'Katalog produk',
                            'Keranjang belanja',
                            'Checkout manual (transfer atau WA)',
                            'Tanpa payment gateway',
                            '1x revisi minor',
                        ],
                    ],
                    [
                        'name' => 'Essential',
                        'price' => null,
                        'duration_estimate' => '3-4 minggu',
                        'bonus_text' => 'Bonus 1 bulan Basic Care',
                        'is_highlighted' => true,
                        'features' => [
                            'Semua fitur Basic',
                            'Payment gateway Midtrans',
                            'Manajemen stok',
                            'Ongkir otomatis',
                            '2x revisi minor',
                        ],
                    ],
                    [
                        'name' => 'Custom',
                        'price' => null,
                        'duration_estimate' => '4-8 minggu',
                        'bonus_text' => null,
                        'is_highlighted' => false,
                        'features' => [
                            'Semua fitur Essential',
                            'Multi-vendor atau fitur khusus',
                            'Laporan penjualan',
                            'Integrasi lanjutan',
                        ],
                    ],
                ],
            ],
            [
                'name' => 'Redesign Website',
                'slug' => 'redesign-website',
                'description' => 'Perbaiki website lama yang sudah ketinggalan.',
                'duration_estimate' => '2-4 minggu',
                'is_active' => true,
                'sort_order' => 3,
                'packages' => [
                    [
                        'name' => 'Basic',
                        'price' => null,
                        'duration_estimate' => '1-2 minggu',
                        'bonus_text' => null,
                        'is_highlighted' => false,
                        'features' => [
                            'Audit tampilan website lama',
                            'Perbaikan cepat tanpa ubah struktur',
                            'Penyesuaian mobile',
                            '1x revisi minor',
                        ],
                    ],
                    [
                        'name' => 'Essential',
                        'price' => null,
                        'duration_estimate' => '2-4 minggu',
                        'bonus_text' => 'Bonus 1 bulan Basic Care',
                        'is_highlighted' => true,
                        'features' => [
                            'Redesign penuh tampilan',
                            'Perbaikan navigasi dan struktur',
                            'SEO yang ada dipertahankan',
                            '2x revisi minor',
                        ],
                    ],
                    [
                        'name' => 'Custom',
                        'price' => null,
                        'duration_estimate' => '4-6 minggu',
                        'bonus_text' => null,
                        'is_highlighted' => false,
                        'features' => [
                            'Semua fitur Essential',
                            'Rebuild total + CMS',
                            'Fitur khusus sesuai kebutuhan',
                        ],
                    ],
                ],
            ],
        ];
    }
}
