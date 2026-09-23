# PRD — Website Jasa Pembuatan Web UMKM (Nasional)

## 1. Ringkasan
Website untuk menawarkan jasa pembuatan web ke UMKM di seluruh Indonesia (mebel, cafe, perusahaan lokal, toko online, dll — mulai dari basis Jepara lalu melayani nasional), dengan 3 lini layanan utama: **Landing Page**, **Company Profile**, dan **E-commerce**. Website ini sekaligus jadi portofolio hidup — dibangun pakai stack yang sama yang ditawarkan ke klien (Laravel + React), jadi bisa jadi contoh kualitas kerja. Karena target nasional, website ini harus kuat secara **SEO** (biar ditemukan calon klien dari kota lain) dan **aman** (biar kredibel — bisnis calon klien akan menilai keamanan sebagai indikator kualitas kerja Anda).

## 2. Tujuan
- Mendapatkan leads/klien UMKM dari seluruh Indonesia, tidak terbatas Jepara
- Menjelaskan paket layanan secara jelas (harga, scope, waktu pengerjaan)
- Menampilkan portofolio & testimoni
- Mempermudah calon klien menghubungi (WhatsApp/form) dan konsultasi
- Ranking baik di pencarian Google untuk keyword seperti "jasa pembuatan website UMKM", "jasa web company profile", "jasa buat toko online" (nasional, bukan cuma lokal)

## 3. Target Pengguna
| Persona | Kebutuhan |
|---|---|
| Pemilik UMKM mebel (Jepara & daerah lain) | Company profile buat pasar ekspor/luar kota |
| Pemilik cafe baru (kota mana pun) | Landing page + menu digital sederhana |
| Pemilik toko/produk online nasional | E-commerce sederhana (produk, cart, checkout) |
| UMKM di luar Jawa | Butuh proses onboarding & komunikasi full remote (tanpa ketemu langsung) |

**Catatan**: karena target sekarang nasional, seluruh proses (briefing, revisi, pembayaran, handover) harus bisa dilakukan 100% remote — pertimbangkan tools seperti Google Meet/WhatsApp call untuk konsultasi, dan sistem pembayaran DP yang mudah (transfer bank nasional/QRIS) untuk klien luar kota.

## 4. Stack Teknis
- **Backend**: Laravel (terbaru, LTS-stable)
- **Frontend**: React (via **Inertia.js** — direkomendasikan, biar nggak perlu API terpisah dan development lebih cepat; alternatif: React SPA + Laravel Sanctum kalau butuh benar-benar decoupled)
- **Styling**: Tailwind CSS
- **Admin panel**: Filament (Laravel) atau custom dashboard React — buat kelola konten/portofolio/leads
- **Database**: MySQL/PostgreSQL
- **Payment (untuk paket ecommerce ke klien nanti)**: Midtrans / Xendit
- **Hosting**: VPS (DigitalOcean/Niagahoster) atau shared hosting support Laravel
- **Form handling**: kirim ke email + WhatsApp API/link (wa.me)

## 5. Scope Fitur (Website Jasa Ini Sendiri)

### 5.1 Halaman Publik
- **Home / Landing**: hero, value proposition, 3 layanan utama, CTA konsultasi
- **Layanan**: detail 3 paket (Landing Page, Company Profile, E-commerce) — fitur, harga mulai dari, estimasi waktu
- **Portofolio**: grid/list project (screenshot, deskripsi singkat, link demo kalau ada)
- **Tentang**: profil Anda/tim, kenapa pilih jasa ini
- **Testimoni** (bisa kosong dulu / pakai draft awal)
- **Kontak**: form (nama, kontak, jenis layanan diminati, pesan) + link WhatsApp langsung
- **Blog/artikel sederhana** *(opsional, v2)* — buat SEO lokal ("jasa buat website Jepara", dll)

### 5.2 Admin Panel (buat Anda kelola sendiri)
- CRUD portofolio (tambah/edit/hapus project)
- CRUD paket layanan & harga
- Lihat daftar leads/pesan masuk dari form kontak
- (Opsional) CRUD testimoni

### 5.3 Non-fungsional (umum)
- Mobile-responsive (mayoritas calon klien UMKM akan buka dari HP)
- Loading cepat (< 3 detik di koneksi biasa, termasuk dari luar Jawa)

## 6. Keamanan (Security)

Karena target nasional & website ini jadi "etalase kualitas kerja", keamanan harus solid dari awal — ini juga jadi selling point ke klien (bisa bilang "web Anda akan dibuat dengan standar keamanan yang sama").

### 6.1 Level Aplikasi (Laravel)
- **HTTPS wajib** (SSL/TLS) — paksa redirect HTTP → HTTPS
- **CSRF protection** — bawaan Laravel, pastikan aktif di semua form (termasuk form kontak & login admin)
- **Validasi & sanitasi input** di semua form (server-side, jangan andalkan validasi client-side React saja)
- **Rate limiting**: throttle route form kontak & login (cegah spam/brute force) — pakai `throttle` middleware Laravel
- **Login admin**: 
  - Password hashing (bawaan Laravel/bcrypt)
  - Rate limit percobaan login (lockout sementara setelah beberapa kali gagal)
  - Pertimbangkan 2FA untuk akun admin (Laravel Fortify support ini)
- **Authorization**: pastikan route admin panel diproteksi middleware `auth`, cek role/permission kalau nanti ada multi-admin
- **Environment**: `.env` tidak pernah masuk git, `APP_DEBUG=false` di production (hindari expose stack trace/error detail ke publik)
- **Session security**: cookie `secure` + `httpOnly`, session timeout wajar
- **File upload** (kalau ada upload gambar portofolio dari admin): validasi tipe file & ukuran, simpan di storage terpisah, scan nama file (hindari path traversal)
- **Dependency security**: rutin update Laravel & package (composer/npm) untuk patch keamanan, cek `composer audit` / `npm audit`

### 6.2 Level Infrastruktur
- **Firewall dasar** di VPS (ufw / provider firewall)
- **Backup otomatis** database & file (harian/mingguan) — penting karena data leads klien nasional makin berharga
- **Monitoring uptime** (misal UptimeRobot gratis) — biar tahu kalau server down
- **Security headers**: Content-Security-Policy, X-Frame-Options, X-Content-Type-Options (bisa pakai package `spatie/laravel-csp` atau setup manual di middleware)

### 6.3 Privasi Data
- Data leads (nama, kontak, pesan) dari form disimpan aman, tidak diekspos publik
- Pertimbangkan halaman kebijakan privasi sederhana (makin penting untuk kredibilitas skala nasional)

## 7. SEO Friendly

Karena kompetisi sekarang bukan cuma lokal Jepara tapi nasional, SEO jadi prioritas tinggi, bukan sekadar tambahan.

### 7.1 Teknis (bergantung pendekatan render)
- **Rendering**: kalau pakai Inertia.js + React murni (client-side render), Google *bisa* index tapi kurang optimal untuk SEO berat. Untuk target nasional yang serius SEO, pertimbangkan:
  - **Inertia SSR** (Laravel Inertia mendukung Server-Side Rendering via Node) — direkomendasikan, atau
  - Halaman-halaman utama (Home, Layanan, per-Portofolio) dibuat sebagai **Blade biasa** (server-rendered penuh) sementara admin panel/dashboard pakai React — hybrid ini paling aman untuk SEO tanpa kompleksitas SSR
- **Meta tags** dinamis per halaman: title, description, Open Graph (og:title, og:image, og:description) — penting untuk share link di WhatsApp/social media
- **Sitemap.xml** otomatis (regenerate saat ada portofolio/layanan baru)
- **robots.txt** dikonfigurasi benar
- **Structured data (Schema.org)**: `LocalBusiness` atau `ProfessionalService`, `Review`/`AggregateRating` untuk testimoni — bantu muncul rich snippet di Google
- **URL friendly**: slug rapi (`/layanan/company-profile`, bukan `/service?id=3`)
- **Canonical URL** untuk hindari duplicate content
- **Image optimization**: lazy loading, format WebP, alt text deskriptif di semua gambar portofolio

### 7.2 Konten
- Keyword riset dasar: variasi seperti "jasa pembuatan website UMKM", "jasa website company profile murah", "jasa bikin toko online" — sebar natural di konten, bukan keyword stuffing
- Blog/artikel (masukkan lagi ke scope, tadinya opsional v2) — jadi **prioritas** untuk SEO nasional, misal: "Tips memilih jasa pembuatan website untuk UMKM", "Perbedaan landing page vs company profile", dll
- Halaman portofolio dengan deskripsi unik per project (bukan cuma gambar) — bantu index & keyword coverage
- Internal linking antar halaman (Layanan ↔ Portofolio ↔ Blog)

### 7.3 Performa (berpengaruh ke ranking Google — Core Web Vitals)
- Minify CSS/JS (Vite bawaan Laravel sudah bantu ini)
- Compress gambar sebelum upload / auto-optimize saat upload
- Gunakan CDN untuk asset statis kalau traffic mulai besar
- Cache halaman yang jarang berubah (Laravel cache / Cloudflare)

### 7.4 Non-fungsional lainnya
- Validasi & sanitasi form tetap berlaku (lihat section Keamanan)
- Rate limit submit form (cegah spam, juga bagian dari SEO — spam bisa kena penalti kalau nyangkut ke email/reputasi domain)

## 6. Out of Scope (v1)
- Multi-bahasa
- Sistem pembayaran di website jasa ini sendiri (pembayaran klien tetap manual/transfer + invoice)
- Live chat otomatis (cukup link WhatsApp dulu)

## 8. Struktur Data Awal (kasar)
- `services` (id, nama, deskripsi, harga_mulai, fitur[], durasi_estimasi)
- `portfolios` (id, judul, kategori, deskripsi, gambar, alt_text, link_demo, meta_description)
- `testimonials` (id, nama_klien, usaha, kota, isi, foto, rating)
- `leads` (id, nama, kontak, kota, layanan_diminati, pesan, status, created_at)
- `blog_posts` (id, judul, slug, konten, meta_title, meta_description, published_at) — untuk kebutuhan SEO
- `admin_users` (untuk login admin panel, dengan role)

## 9. Alur Utama (User Flow)
1. Calon klien dari kota mana pun menemukan web via Google/social media
2. Buka Home → baca value proposition
3. Klik ke Layanan → lihat paket yang cocok
4. Lihat Portofolio buat validasi kualitas
5. Isi form Kontak / klik WhatsApp langsung
6. Leads masuk ke admin panel → Anda follow up manual (remote, via call/WA)

## 10. Metrik Keberhasilan
- Jumlah leads/form masuk per bulan (dan sebaran kota asal leads)
- Jumlah klik tombol WhatsApp
- Ranking keyword target di Google (cek via Google Search Console)
- Traffic organik bulanan
- (Opsional lanjut) konversi leads → deal

## 11. Milestone / Fase Pengerjaan
| Fase | Scope |
|---|---|
| Fase 1 | Setup project, auth admin, struktur DB dasar, konfigurasi keamanan dasar (.env, HTTPS, security headers) |
| Fase 2 | Halaman publik statis (Home, Layanan, Tentang) — dibangun dengan pendekatan SEO-friendly (SSR/Blade) |
| Fase 3 | Portofolio + Admin CRUD portofolio (dengan meta fields untuk SEO) |
| Fase 4 | Form kontak + integrasi leads ke admin (dengan rate limiting & validasi) |
| Fase 5 | Blog/artikel dasar (untuk SEO), testimoni, polish UI/responsive |
| Fase 6 | Setup sitemap, robots.txt, structured data, Google Search Console |
| Fase 7 | Audit keamanan (checklist section 6) + deploy ke production + testing manual (QA checklist) |

## 12. Risiko & Catatan
- Belum ada portofolio real di awal → perlu buat 2-3 project dummy dulu sebagai contoh
- Konten/copywriting asli harus disiapkan sebelum mulai coding, jangan andalkan lorem ipsum sampai lupa diganti
- Pastikan versi Laravel & React yang dipakai konsisten dicatat di `tech-stack.md` terpisah biar AI assistant (vibe coding) nggak berubah-ubah pilihan library
- Keputusan SSR vs Blade-hybrid (section 7.1) harus diambil di awal — mengubahnya di tengah jalan cukup mahal secara waktu
- SEO nasional butuh waktu (biasanya 3-6 bulan baru terasa hasil organik) — jangan berharap instan, siapkan strategi pemasaran lain (social media, komunitas) sebagai pelengkap di awal