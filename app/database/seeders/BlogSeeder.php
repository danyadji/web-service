<?php

namespace Database\Seeders;

use App\Models\BlogPost;
use App\Models\User;
use Illuminate\Database\Seeder;

class BlogSeeder extends Seeder
{
    public function run(): void
    {
        $author = User::query()->first();

        if (! $author) {
            $this->command->warn('BlogSeeder dilewati: belum ada user untuk author.');

            return;
        }

        $posts = [
            [
                'title' => 'Perbedaan Landing Page dan Company Profile',
                'slug' => 'perbedaan-landing-page-dan-company-profile',
                'excerpt' => 'Satu halaman fokus promosi atau banyak halaman profil usaha? Panduan memilih sesuai kebutuhan bisnismu.',
                'content' => <<<'HTML'
                    <p>Banyak pemilik bisnis bingung memilih antara landing page dan company profile. Keduanya website, tapi fungsinya beda jauh.</p>
                    <h2>Landing page: satu halaman, satu tujuan</h2>
                    <p>Landing page cocok untuk promosi spesifik: satu produk, satu kampanye iklan, atau kumpul kontak calon pembeli. Pengunjung tidak perlu berpikir, alurnya cuma satu: baca, tertarik, hubungi.</p>
                    <h2>Company profile: banyak halaman, bangun kepercayaan</h2>
                    <p>Company profile cocok kalau pembelimu perlu menilai usahamu dulu: siapa kamu, apa layanannya, bagaimana portofolionya. Biasanya 3-10 halaman dengan struktur SEO per halaman.</p>
                    <h2>Jadi pilih yang mana?</h2>
                    <ul><li>Butuh order cepat dari iklan? Landing page.</li><li>Butuh dipercaya klien perusahaan atau pasar luar kota? Company profile.</li><li>Budget cukup? Keduanya saling melengkapi.</li></ul>
                    HTML,
                'meta_description' => 'Panduan memilih landing page atau company profile untuk bisnis: fungsi, contoh, dan kapan pakai keduanya.',
            ],
            [
                'title' => 'Tips Memilih Jasa Pembuatan Website untuk Bisnis',
                'slug' => 'tips-memilih-jasa-pembuatan-website-untuk-bisnis',
                'excerpt' => 'Lima hal yang wajib dicek sebelum bayar DP: lingkup tertulis, revisi, garansi, harga, dan portofolio asli.',
                'content' => <<<'HTML'
                    <p>Salah pilih jasa website berujung project mangkrak dan uang muka hangus. Lima hal ini wajib kamu cek dulu.</p>
                    <h2>1. Minta lingkup tertulis</h2>
                    <p>Jumlah halaman, fitur, dan jadwal harus tertulis sebelum DP. Janji lisan tidak bisa ditagih.</p>
                    <h2>2. Tanya jatah revisi</h2>
                    <p>Vendor yang sehat berani menulis jatah revisi per paket. Yang bilang "revisi bebas selamanya" biasanya menghilang di tengah jalan.</p>
                    <h2>3. Pastikan ada garansi</h2>
                    <p>Error karena pengerjaan harus diperbaiki gratis dalam masa garansi. Tanyakan berapa lama dan apa yang dicover.</p>
                    <h2>4. Lihat portofolio asli</h2>
                    <p>Buka websitenya langsung, jangan cuma lihat screenshot. Cek kecepatannya di HP.</p>
                    <h2>5. Harga transparan</h2>
                    <p>Hindari yang tidak berani tulis harga mulai. Biaya tambahan harus dibuka di awal, bukan muncul di tengah project.</p>
                    HTML,
                'meta_description' => 'Lima tips memilih jasa pembuatan website: lingkup tertulis, revisi, garansi, portofolio asli, dan harga transparan.',
            ],
        ];

        foreach ($posts as $post) {
            BlogPost::updateOrCreate(
                ['slug' => $post['slug']],
                array_merge($post, [
                    'is_published' => true,
                    'published_at' => now(),
                    'author_id' => $author->id,
                ])
            );
        }
    }
}
