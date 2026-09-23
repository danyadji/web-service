# Daftar Fitur & Prioritas — Web Jasa Pembuatan Website UMKM

Legenda: **P0** = wajib v1 (tanpa ini web belum layak launch) · **P1** = penting tapi bisa nyusul cepat setelah launch · **P2** = nice-to-have / v2

## Halaman Publik

| Fitur | Prioritas | Catatan |
|---|---|---|
| Home / Landing Page | P0 | Hero, value prop, ringkasan layanan, CTA |
| Halaman Layanan (3 paket + card harga) | P0 | Inti dari konversi |
| Form Pemesanan → redirect WhatsApp | P0 | Inti dari lead generation |
| Halaman Kontak (form umum + tombol WA) | P0 | |
| Portofolio (list) | P0 | Minimal 2-3 dummy project dulu |
| Portofolio (detail per project) | P1 | Bisa nyusul minggu setelah list jalan |
| Tentang | P1 | Konten statis, cepat dikerjakan |
| Testimoni | P1 | Kosong dulu OK, tampilkan setelah ada 1-2 real testimoni |
| Blog/Artikel (list + detail) | P1 | Penting untuk SEO nasional, tapi web bisa launch duluan tanpa ini, susul cepat |
| WhatsApp floating button (semua halaman) | P0 | Mudah dikerjakan, dampak besar ke konversi |

## Admin Panel (Filament)

| Fitur | Prioritas | Catatan |
|---|---|---|
| Login admin (auth dasar) | P0 | |
| CRUD Services | P0 | Anda perlu ubah harga/paket tanpa coding |
| CRUD Portfolios | P0 | |
| Kelola Leads (lihat + ubah status) | P0 | Ini "hasil" dari seluruh web, wajib ada dari awal |
| CRUD Testimonials | P1 | |
| CRUD Blog Posts | P1 | Sejalan dengan fitur blog publik |
| 2FA untuk login admin | P2 | Bisa ditambah setelah stabil, bukan blocker launch |
| Role multi-admin (kalau nanti ada tim) | P2 | Belum dibutuhkan kalau masih single admin |

## SEO (berjalan di background, tidak terlihat user)

| Fitur | Prioritas | Catatan |
|---|---|---|
| SSR (Inertia) aktif | P0 | Keputusan arsitektur dari awal, tidak bisa ditunda |
| Meta title/description per halaman | P0 | |
| URL friendly (slug) | P0 | |
| Sitemap.xml otomatis | P1 | Bisa nyusul minggu 1 setelah launch |
| robots.txt | P0 | 5 menit kerja, tidak ada alasan skip |
| Structured data (Schema.org) | P2 | Dampak baru terasa setelah ada traffic |
| Open Graph tags (share ke WA/social) | P1 | Penting karena leads sering share link ke rekan |
| Image alt text & optimization (WebP) | P1 | |

## Keamanan (berjalan di background)

| Fitur | Prioritas | Catatan |
|---|---|---|
| HTTPS/SSL | P0 | Non-negotiable, wajib sebelum launch |
| CSRF protection | P0 | Bawaan Laravel, pastikan aktif |
| Validasi & sanitasi form (server-side) | P0 | |
| Rate limiting form (leads & login) | P0 | Cegah spam sejak hari pertama |
| `.env` aman, `APP_DEBUG=false` production | P0 | |
| Security headers (CSP, dll) | P1 | Bisa nyusul minggu 1 |
| Backup otomatis DB | P1 | Setup begitu ada data leads asli |
| Monitoring uptime | P2 | |
| 2FA admin | P2 | |

## Performa

| Fitur | Prioritas | Catatan |
|---|---|---|
| Mobile responsive | P0 | Mayoritas traffic dari HP |
| Compress/optimize gambar | P1 | |
| Caching halaman statis | P2 | Baru relevan kalau traffic mulai besar |
| CDN untuk asset | P2 | |

---

## Ringkasan: Target Fitur untuk Launch v1 (semua P0)
1. Home, Layanan, Kontak, Portofolio (list), WA floating button
2. Form pemesanan → capture lead → redirect WhatsApp
3. Admin: login, CRUD Services, CRUD Portfolios, kelola Leads
4. SSR aktif, meta tags dasar, slug, robots.txt
5. HTTPS, CSRF, validasi, rate limiting, `.env` aman

Semua P1 ditarget selesai dalam **2-4 minggu setelah launch** (portofolio detail, tentang, testimoni, blog, sitemap, OG tags, security headers, backup, image optimization).

P2 dikerjakan bertahap sesuai kebutuhan (2FA, role admin, structured data, monitoring, caching, CDN) — tidak jadi blocker apapun.