# Database Schema — Web Jasa Pembuatan Website UMKM

Acuan untuk migration Laravel. Semua tabel pakai `id` (bigIncrements), `created_at`, `timestamps` kecuali disebutkan lain.

## 1. `admin_users`
| Kolom | Tipe | Keterangan |
|---|---|---|
| id | bigIncrements | PK |
| name | string | |
| email | string, unique | |
| password | string | hashed |
| role | enum('super_admin','editor') | default 'editor' |
| two_factor_secret | text, nullable | untuk Fortify 2FA |
| remember_token | string, nullable | |
| timestamps | | |

*Catatan: bisa pakai tabel `users` bawaan Laravel + kolom `role`, tidak perlu tabel terpisah kalau admin panel cuma dipakai internal.*

## 2. `services`
| Kolom | Tipe | Keterangan |
|---|---|---|
| id | bigIncrements | PK |
| name | string | e.g. "Company Profile" |
| slug | string, unique | untuk URL, index |
| description | text | |
| price_start | integer, nullable | harga mulai dari (dalam Rupiah) |
| features | json | array fitur, e.g. ["5 halaman","SEO dasar"] |
| duration_estimate | string | e.g. "2-3 minggu" |
| meta_title | string, nullable | SEO |
| meta_description | string, nullable | SEO |
| is_active | boolean | default true |
| sort_order | integer | default 0 |
| timestamps | | |

## 3. `portfolios`
| Kolom | Tipe | Keterangan |
|---|---|---|
| id | bigIncrements | PK |
| service_id | foreignId, nullable | relasi ke `services` (kategori project) |
| title | string | |
| slug | string, unique, index | |
| client_name | string, nullable | boleh disamarkan kalau dummy |
| description | text | |
| cover_image | string | path storage |
| gallery_images | json, nullable | array path gambar tambahan |
| alt_text | string | untuk SEO gambar utama |
| demo_url | string, nullable | |
| meta_title | string, nullable | SEO |
| meta_description | string, nullable | SEO |
| is_published | boolean | default true |
| published_at | timestamp, nullable | |
| sort_order | integer | default 0 |
| timestamps | | |

## 4. `testimonials`
| Kolom | Tipe | Keterangan |
|---|---|---|
| id | bigIncrements | PK |
| client_name | string | |
| business_name | string, nullable | |
| city | string, nullable | penting untuk tampilkan sebaran nasional |
| content | text | |
| rating | tinyInteger | 1-5 |
| photo | string, nullable | path storage |
| is_published | boolean | default true |
| timestamps | | |

## 5. `leads`
Tabel ini menangkap data dari flow "Card Harga → Isi Form → Kirim via WhatsApp" (lihat `tech-stack.md` section 5). Data disimpan ke DB **sebelum** redirect ke WA, supaya lead tetap ter-capture walau user tidak jadi lanjut chat.

| Kolom | Tipe | Keterangan |
|---|---|---|
| id | bigIncrements | PK |
| name | string | |
| contact | string | email atau nomor WA |
| city | string, nullable | |
| service_interested | string, nullable | nama paket yang dipilih (dari card harga) |
| message | text | catatan/kebutuhan tambahan dari form |
| wa_message_sent | text, nullable | isi pesan yang di-generate untuk link wa.me (untuk audit/riwayat) |
| status | enum('new','contacted','deal','closed') | default 'new' |
| ip_address | string, nullable | untuk audit/anti-spam |
| timestamps | | |

*Index: tambahkan index di `status` dan `created_at` untuk query admin panel.*

## 6. `blog_posts`
| Kolom | Tipe | Keterangan |
|---|---|---|
| id | bigIncrements | PK |
| title | string | |
| slug | string, unique, index | |
| excerpt | string, nullable | untuk preview list |
| content | longText | |
| cover_image | string, nullable | |
| meta_title | string, nullable | SEO |
| meta_description | string, nullable | SEO |
| is_published | boolean | default false |
| published_at | timestamp, nullable | |
| author_id | foreignId | relasi ke `admin_users`/`users` |
| timestamps | | |

## Relasi (ERD ringkas)
```
services (1) ──< (many) portfolios
admin_users (1) ──< (many) blog_posts   [via author_id]
```
*Testimonials & leads berdiri sendiri (tidak wajib relasi ke tabel lain di v1).*

## Index Penting (untuk performa & SEO)
- `portfolios.slug`, `blog_posts.slug`, `services.slug` — unique + index (dipakai di URL friendly)
- `leads.status`, `leads.created_at` — index (query admin panel sering filter/sort ini)
- `portfolios.is_published`, `blog_posts.is_published` — index kalau dataset sudah besar

## Catatan Migrasi
- Semua kolom gambar (`cover_image`, `photo`, dll) simpan **path relatif**, bukan full URL — biar gampang pindah storage/CDN nanti
- `features` dan `gallery_images` pakai kolom `json` (Laravel cast otomatis ke array)
- Pertimbangkan **soft deletes** (`deleted_at`) untuk `portfolios` dan `blog_posts` — biar konten yang "dihapus" bisa direstore, bukan hilang permanen