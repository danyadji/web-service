# Design Spec — Web Jasa Pembuatan Website UMKM

Referensi visual: Stallion Landing Page + MoneyHub Landing Page (screenshot user, redesign). Diadaptasi ke konteks jasa website UMKM Indonesia. Bukan clone: komposisi warna, tipografi, dan bahasa komponen dipinjam; struktur section dan konten tetap milik web ini.

---

## 1. Mood & Gaya Visual

- Bold & percaya diri + Hangat: hero dan footer gelap premium, body putih lapang, aksen lime playful di momen aksi. Kesan "agensi berani" seperti MoneyHub, bahasanya tetap ramah UMKM.
- Tidak ada section/kartu baru: struktur halaman yang sudah dibangun tidak berubah, yang diganti hanya warna, font, dan styling komponen.
- Dial: ENERGY 3 / RHYTHM 3 / MOTION 2. Design Read: landing jasa website untuk pemilik UMKM Indonesia, bahasa visual fintech-bold yang percaya diri, dial ENERGY 3 / RHYTHM 3 / MOTION 2.

## 2. Palet Warna

### Warna Utama (Primary)
- CTA dan aksen: lime `#CDF138` dengan teks gelap `#0B1F17` di atasnya, rasio 13.28:1, lolos AA (hasil cek script). Alasan: meminjam tombol lime MoneyHub sebagai momen aksi.
- ATURAN KERAS: tidak ada teks putih di atas lime (rasio 1.29:1, gagal AA). Lime selalu pasangan teks gelap.

### Warna Sekunder / Pendukung
- Dark green `#0B1F17` untuk hero, kartu gelap, dan footer. Teks putih di atasnya rasio 17.18:1, lolos AA. Alasan: panggung premium untuk headline dan momen penekanan, seperti hero MoneyHub.
- Oranye `#C2410C` pensiun dari peran CTA, boleh bertahan maksimal sebagai aksen mikro bila dibutuhkan saat implementasi (dengan alasan tertulis per titik).

### Background
- Utama: `#FFFFFF` (putih) untuk body section.
- Selang: `#F9FAFB` dan `stone-50` hangat yang sudah ada. Hero dan section tier: dark green penuh. Banner highlight gradient pensiun (perannya diganti strip garansi).

### Teks
- Di atas putih: `#18181B` utama, `#3F3F46` sekunder (tetap).
- Di atas dark green: putih utama, lime `#CDF138` untuk penekan kecil/label (13.28:1, lolos AA).

## 3. Tipografi

- Heading: `Anton` (uppercase, tight, satu weight). Alasan: meniru headline condensed tebal MoneyHub ("BEST SOLUTION...") sebagai suara berani; menggantikan Plus Jakarta Sans di heading.
- Aksen artistik lama (`Playfair Display` italic) PENSIUN. Motif identitas baru: uppercase condensed + aksen lime. Alasan: serif italic bertabrakan dengan suara bold referensi baru (R-20, satu identitas).
- Body: `Plus Jakarta Sans` 400-500 (tetap, terbaca untuk paragraf panjang).
- Logo wordmark: sans tebal rapat (tanpa serif miring), mengikuti logo MoneyHub.
- Semua dari Google Fonts.

## 4. Referensi Website

1. Stallion Landing Page (screenshot user) — alasan: ritme section bervariasi, hero lapang dengan mockup floating, kartu layanan berborder halus. Dipinjam polanya, bukan mereknya.
2. MoneyHub Landing Page (screenshot user, arah redesign) — alasan: komposisi dark green + lime, headline condensed uppercase, tombol pil, kartu gelap dengan aksen lime. Dipinjam warna, font, dan bahasa komponennya; struktur section dan konten tetap milik web ini.

## 5. Komponen & Elemen Visual

### Bahasa komponen (MoneyHub, berlaku global)
- Tombol CTA: pil penuh (`rounded-full`), lime dengan teks gelap. Tombol sekunder: pil putih/outline. Alasan: pil adalah gestur paling berulang di referensi (R-31).
- Kartu gelap: background dark green, teks putih, angka/ikon lime. Kartu terang: putih dengan aksen dark green + lime.
- Pil/badge kecil: `rounded-full`; label di atas gambar tetap pil putih agar terbaca di semua foto.
- Titik penanda section (dulu oranye): dark green di atas terang, lime di atas gelap. Alasan: lime di atas putih gagal kontras sebagai indikator.

### Hero
- Teks tengah (headline condensed UPPERCASE, sub, CTA pil) seperti referensi, lalu strip showcase full-bleed di bawahnya. Background dark green penuh dengan teks putih. Section selayar (`min-h-svh`, konten vertikal tengah).
- Showcase: mockup browser (dengan url bar + sidebar mini) dan HP yang dimiringkan, bayangan kuat, seperti kartu floating referensi. Dibuat dari div (bukan screenshot palsu), tiap kartu berlabel tipe layout ("Contoh: Toko Online"). Alasan: belum ada portofolio real (R-38).
- Badge: tanpa pill + dot (hindari badge AI). Diganti baris teks kecil dengan ikon relevan + klaim jujur (teks putih/lime di atas dark).
- Showcase: marquee bingkai browser/HP abstrak dari div (bukan screenshot palsu), tiap kartu berlabel tipe layout ("Contoh: Toko Online"). Alasan: belum ada portofolio real (R-38).
- Marquee berhenti saat hover (R-19, tujuan: pengguna sempat membaca tiap kartu) dan nonaktif total saat `prefers-reduced-motion` (ganti scroll horizontal manual).

### Ilustrasi / Gambar
- Tidak pakai ilustrasi stok generik. Visual = mockup UI abstrak + foto kontak jujur menyusul. Alasan: R-22.

### Layanan bernomor (referensi averra.id)
- Kolom kiri sticky: eyebrow uppercase spasi lebar + headline + deskripsi + link garis bawah "Bandingkan jenis layanan". Alasan tracking lebar: meminjam suara editorial referensi sebagai penanda section, dipakai sekali ini saja (R-06).
- Kolom kanan: daftar 01-04, tiap baris ikon garis relevan dalam kotak border + judul + blurb + panah ↗ (hover: ikon dan panah jadi dark green). Alasan panah: tiap baris adalah link ke halaman perbandingan harga (R-08, R-26).
- Background `stone-50` hangat. Alasan: jeda bertekstur antara hero biru dan konten putih, tetap netral (R-29).
### Card Tier per Kategori (referensi screenshot pricing)
- Tab pil kategori di atas (satu aktif solid lime + teks gelap, sisanya outline). Alasan: pola dari referensi pricing, diterjemahkan ke lime brand (bukan ungu, R-01).
- 3 kartu tier: nama, harga Rp besar, checklist (ikon cek lingkaran mengikuti konteks kartu), estimasi, kotak bonus, tombol pil "Pesan Sekarang" (lime + teks gelap di kartu terang).
- Tier `is_highlighted`: kartu solid lime + teks pine + tombol pine. Alasan: momen penekanan paling terang di section gelap; tombol pine di lime 13.28:1.
- Tombol per tier ke `/kontak?paket=slug&tier=Nama`, form prefill "paket X tier Y" dan ikut ke pesan WA.

### Kartu Portofolio (referensi screenshot)
- Kartu putih rounded: sampul + pil tipe (putih, teks dark green) + pil tahun di atas gambar, judul, kutipan deskripsi 90 karakter, pil teknologi lime muda + teks gelap, tombol pil outline "Lihat Detail →" full-width. Alasan panah: semua tombol kartu berarti "buka halaman detail" (R-08).
- Halaman detail `/portofolio/{slug}`: breadcrumb, cover besar, meta (tipe, tahun, klien), deskripsi penuh, badge teknologi, galeri grid, aside CTA konsultasi, 2 project lain. Meta title/description per project untuk SEO.

### Penutup (cara kerja, garansi, FAQ, kontak, blog)
- About `/tentang`: headline condensed kiri + highlight box lime + teks kanan bawah. Alasan: asimetri editorial, teks sama.
- Portofolio: filter pil jenis (muncul bila 3+ tipe), hanya di halaman penuh.
- Blog: artikel pertama featured dark + sisanya list thumb. Detail: judul condensed + aside CTA.
- Kontak: panel info dark + form dalam kartu putih.
- Cara kerja: kolom kiri sticky + 4 langkah bernomor condensed besar dark green. Alasan: variasi ritme dari daftar layanan bernomor, angka besar sebagai penanda urutan bukan ikon (R-05).
- Strip garansi: satu baris solid dark green + teks putih + tombol pil lime. Alasan: risk reversal di titik ragu, dibedakan dari banner highlight (R-31).
- FAQ 5 pertanyaan asli seputar durasi, pembayaran, revisi, redesign, remote. Alasan: tiap jawaban merujuk ke halaman/fitur yang ada (R-28). Pemilik wajib koreksi bila pertanyaan aktual klien berbeda.
### Card Paket Layanan
- Border halus, radius sedang konsisten. Tiap kartu: nama, penanda level (misal "Essential · paling dipilih"), deskripsi, harga mulai, estimasi, fitur, CTA ke form kontak. Tanpa badge "Paling Populer" (belum ada data konversi). Hover: angkat 1 level + border menguat, dengan alasan elevasi.
- Kartu ke-5 "Custom" tampil beda: banner horizontal border putus-putus + CTA gelap "Diskusikan kebutuhan". Alasan: komposisi beda menandai aksi beda (konsultasi, bukan pilih harga), bukan sekadar kartu ke-5.

### SEO teknis
- `sitemap.xml` otomatis (6 halaman + tiap portofolio/blog published, refresh sendiri saat publish via model hook, cache 24 jam) via `spatie/laravel-sitemap`. `robots.txt` membuka semua kecuali `/admin` + menunjuk sitemap.
- SSR aktif: `resources/js/ssr.jsx` + `vite build --ssr` + `php artisan inertia:start-ssr` (jalan sebagai proses Node terpisah, di production via Supervisor). Tanpa proses itu halaman fallback ke client render. Aturan: komponen tidak boleh menyentuh `window`/`document` saat render.
- Blog: Model + CRUD Filament + `/blog` + `/blog/{slug}` + CTA kontak di tiap artikel. Artikel pertama belum ditulis.
- Meta + OG per halaman via komponen `Seo.jsx` (title, description, og:title, og:description, og:image bila ada sampul). `og:image` default menunggu 1 gambar brand 1200x630.
- Catatan jujur: tanpa SSR, meta per halaman terpasang setelah JS jalan. Google merender JS jadi tetap terbaca, tapi View Source tidak menampilkannya.
### Animasi & Motion
- MOTION 2: hover states + satu marquee hero dengan tujuan tertulis (memberi kesan portofolio hidup). Tanpa loop lain dan tanpa scroll-reveal template.
- Batas: marquee satu-satunya animasi berjalan; durasi 45 detik per putaran supaya tenang; pause saat hover; hormati `prefers-reduced-motion`.

## 6. Layout & Struktur Halaman

Struktur multi-halaman (tiap item navbar adalah route Inertia sendiri, bukan anchor scroll):

- `/` Home: Hero gelap + Layanan bernomor + Tier per kategori (section gelap) + Cara kerja + Portofolio preview + FAQ
- `/layanan`: tab kategori + 3 kartu tier + Kebijakan (bold) + banner Custom. `/harga` redirect 301 ke `/layanan`.
- `/tentang`: About asimetris + Kenapa pilih kami (3)
- `/portofolio`: filter jenis + grid kartu. `/kontak`: panel info gelap + form dalam kartu.
- `/harga`: 4 kartu paket + akordeon rincian layanan + CTA ke `/kontak?paket=slug` (form terisi otomatis)
- `/portofolio`: grid slot + empty state jujur
- `/kontak`: info + form (prefill paket dari query, fallback WA ke halaman ini bila nomor belum diisi)

### Navbar
- Pil melayang seperti referensi: bar `rounded-full` putih dengan bayangan halus, logo sans tebal rapat kiri, menu tengah, CTA pil lime + teks gelap kanan. Sticky dengan jarak atas. Alasan: pil jadi motif identitas yang menggemakan kartu membulat di hero.
- Mobile: tombol "Menu" berlabel di dalam pil + panel dropdown membulat di bawahnya.

### Footer
- Gelap (`#0B1F17` dark green) sebagai penutup halaman, selaras hero. Alasan: kontras penutup setelah konten putih panjang, teks zinc-400 di atasnya tetap lolos AA. Lengkap tapi ramping: 3 kolom link real + bottom bar copyright dan kebijakan ("segera hadir" bila belum ada halaman).

### Yang SENGAJA dihilangkan dari referensi (aturan antislop)
- Logo bar klien: tidak ada logo klien real, jadi tidak ditampilkan (R-18, R-38).
- Statistik 500+/98%/$2M+/15+ (Stallion) dan 4.9/80K/234M/5.0 (MoneyHub): tidak ada sumber, jadi tidak ditampilkan (R-17).
- Testimoni James M dan kartu 95% (Stallion) serta foto + bintang MoneyHub: fiktif untuk projek ini, jadi section testimoni tidak ada sampai ada testimoni real (R-18).
- Tombol App Store / Google Play MoneyHub: tidak relevan untuk jasa website UMKM.
- FAQ generik: tidak dibuat (R-28).

## 7. Nada & Bahasa

- Semi-formal hangat Indonesia: "Kami bantu...", "Ceritakan kebutuhan...". Tanpa em dash, tanpa buzzword (tanpa seamless, revolusioner, cutting edge).
- Pengecualian: section Kebijakan Revisi & Garansi memakai nada bold/menantang ("Berani buka-bukaan...", "Revisi tanpa drama"). Alasan: ketegasan adalah isi pesannya; nada lembek justru melemahkan kepercayaan pada aturan main.
- CTA spesifik per aksi, bukan generik: "Mulai project landing page", "Konsultasi via WhatsApp", "Kirim permintaan konsultasi", "Jadwalkan panggilan gratis".

## 8. Konten yang Sudah Disiapkan

- [ ] Nama brand resmi (sementara `[Nama Brand]`)
- [ ] Tagline final
- [x] Struktur 3 paket (Landing Page, Company Profile, E-commerce) — harga dan fitur masih placeholder
- [ ] Teks Tentang final
- [ ] Nomor WhatsApp CTA (sementara kosong, fallback ke `#kontak`)
- [ ] Logo (sementara wordmark teks)
- [ ] Foto tim / portofolio (belum ada, pakai placeholder jujur)

## 9. Catatan Tambahan

- Tombol CTA wajib lime `#CDF138` + teks gelap `#0B1F17` (hasil cek kontras 13.28:1). Larangan: teks putih di atas lime (1.29:1, gagal).
- Mockup hero dan kartu portofolio dari div hingga ada aset real. Jangan samarkan sebagai produk final.
- Setelah nomor WA, harga, dan 2 portofolio real tersedia, ganti placeholder tanpa ubah struktur komponen.
