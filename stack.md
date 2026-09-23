# Tech Stack — Web Jasa Pembuatan Website UMKM

Dokumen ini jadi acuan tetap. AI assistant (vibe coding) WAJIB mengikuti versi & pilihan library di sini, tidak boleh mengganti/menambah package tanpa persetujuan eksplisit.

## 1. Core Framework
- **Backend**: Laravel 12 (versi terinstall: v12.69.2)
- **Frontend**: React 19 (wajib — Inertia v3 require React 19, tidak bisa dipisah)
- **Penghubung**: **Inertia.js** dengan **SSR (Server-Side Rendering) diaktifkan**
  - Alasan: target nasional butuh SEO kuat, SSR wajib supaya Google bisa index konten tanpa halaman Blade terpisah
  - Setup: `@inertiajs/react` + Laravel Inertia SSR bundle (jalan via Node process terpisah di production)
- **Build tool**: Vite (bawaan Laravel)

## 2. Styling
- **Tailwind CSS v3** (bukan v4 — demi kompatibilitas penuh dengan Filament v3)
- **Catatan**: Tailwind v3 tetap, Filament v3 support Tailwind v3 penuh
- Tidak pakai UI kit berat (Bootstrap, MUI) — biar konsisten & ringan
- Komponen custom disimpan di `resources/js/Components/`

## 3. Database
- **MySQL**
- Migration & seeder wajib untuk semua tabel (lihat `schema.md`)

## 4. Admin Panel
- **Filament v4** (Laravel) — dipakai untuk kelola: services, portfolios, testimonials, leads, blog_posts
- Catatan: Filament v4 (bukan v3) karena v3 hanya support Laravel 9–11, sedangkan project ini pakai Laravel 12
- Alasan pilih Filament (bukan custom React admin): lebih cepat dibangun, gratis, dan tidak perlu dobel maintain (publik pakai Inertia+React, admin pakai Filament — keduanya jalan di atas Laravel yang sama)

## 5. Lead Conversion Flow (Web Jasa Ini Sendiri)
Website jasa ini **TIDAK** pakai payment gateway — transaksi jasa dilakukan manual (DP transfer/QRIS pribadi via chat). Flow yang dipakai:
1. User lihat card harga paket → klik "Pilih Paket Ini"
2. Muncul form singkat (nama, kontak, kebutuhan tambahan, kota)
3. Submit → data tersimpan ke tabel `leads` (masuk admin panel) **dan** generate link `wa.me/62xxx?text=...` terisi otomatis dari isi form, lalu buka WhatsApp
4. Follow-up, DP, dan pembayaran dilanjut manual via chat WA

Implementasi teknis:
- Generate WA link di backend (Laravel) atau frontend (React) — format: `https://wa.me/<nomor>?text=<urlencode pesan>`
- Simpan lead ke DB **sebelum** redirect ke WA (jangan andalkan redirect saja, karena user bisa saja tidak lanjut ke WA setelah klik — data leads tetap harus ke-capture)
- Validasi & rate limit tetap berlaku di endpoint submit form (lihat PRD section 6)

## 6. Payment Gateway (Khusus untuk Paket Ecommerce yang DIBANGUN untuk Klien)
Ini bukan dipakai di web jasa ini sendiri — ini adalah fitur yang ditawarkan/dipasang ketika Anda mengerjakan **project ecommerce untuk klien UMKM**.
- **Midtrans** (Snap API) — prioritas utama, dukung QRIS/VA/e-wallet
- Xendit sebagai alternatif kalau ada kebutuhan spesifik nanti

## 7. Package Wajib (whitelist)
| Package | Fungsi |
|---|---|
| `inertiajs/inertia-laravel` | Jembatan Laravel-React |
| `@inertiajs/react` | Client Inertia untuk React |
| `filament/filament` | Admin panel |
| `spatie/laravel-csp` | Security headers (Content-Security-Policy) |
| `spatie/laravel-sitemap` | Generate sitemap.xml otomatis |
| `spatie/laravel-sluggable` | Slug untuk portfolio & blog |
| `spatie/laravel-medialibrary` | File/image storage yang proper (ganti simpan path manual) |
| `laravel/fortify` (opsional) | 2FA untuk login admin |
| `intervention/image` | Optimasi/resize gambar upload (WebP, compress) |
| `react-hook-form` | Form handling di React (ringan, performant) |
| `zod` | Schema validation frontend (pasangan react-hook-form) |

## 8. Email (Notifikasi Leads)
- **Development**: Mailtrap (SMTP dummy, bisa lihat email tanpa kirim ke inbox asli)
- **Production**: **Resend** (gratis s/d 3000 email/bulan, reliable, mudah setup di Laravel)
- Kirim notifikasi email ke admin setiap ada leads masuk (via Laravel Mail + Queue)

## 9. Package yang TIDAK boleh ditambah tanpa izin
- Library UI besar tambahan (Bootstrap, MUI, Ant Design) — sudah ada Tailwind
- ORM/query builder pengganti Eloquent
- Auth package pengganti Laravel bawaan/Fortify tanpa alasan jelas
- Package apapun yang belum diupdate >1 tahun (isu keamanan)
- Tailwind v4 — belum kompatibel penuh dengan Filament v3, tunda ke v2 project
- Downgrade Inertia ke v2 — tidak support Laravel 13, bukan opsi

## 10. Testing
- **Pest PHP** untuk backend testing (feature test: form kontak, auth admin, dsb)
- Testing frontend React: opsional di v1, prioritaskan manual QA checklist dulu

## 11. Environment & Deployment
- **Hosting**: VPS (DigitalOcean/Niagahoster) — bukan shared hosting, karena butuh Node process untuk Inertia SSR
- **Web server**: Nginx + PHP-FPM
- **Process manager**: Supervisor (untuk queue worker & Inertia SSR Node process)
- **SSL**: Let's Encrypt (via Certbot)
- **CI/CD**: manual deploy di awal (script `deploy.sh`), pertimbangkan GitHub Actions kalau sudah rutin update

## 12. Konvensi Penamaan
- Model: singular PascalCase (`Portfolio`, `Service`, `BlogPost`)
- Tabel: plural snake_case (`portfolios`, `services`, `blog_posts`)
- Komponen React: PascalCase (`ServiceCard.jsx`, `ContactForm.jsx`)
- Route name: kebab-case untuk URL, dot notation untuk nama route (`portfolio.show`)

## 13. Versi
- Laravel: `v12.69.2`
- React: `19` (wajib — Inertia v3 require ini)
- Inertia: `v3.3.4` (server) + `@inertiajs/react` (client, terbaru)
- Node: `v24.18.0`
- PHP: `8.3.12`
- Tailwind: `v3` (terbaru dalam major v3)
- Filament: `v4`