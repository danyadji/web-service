export const siteConfig = {
    brandName: '[Nama Brand]',
    tagline: 'Website yang bikin UMKM dilirik pembeli',
    email: '[email@brand.id]',
    phone: '[08xx-xxxx-xxxx]',
    whatsappNumber: '',
    nav: [
        { label: 'Tentang', href: '#tentang' },
        { label: 'Layanan', href: '#layanan' },
        { label: 'Paket', href: '#paket' },
        { label: 'Portofolio', href: '#portofolio' },
        { label: 'Kontak', href: '#kontak' },
    ],
};

export const services = [
    {
        slug: 'landing-page',
        name: 'Landing Page',
        short: 'Satu halaman fokus untuk promosi dan kumpul leads.',
        priceStart: null,
        duration: '1-2 minggu',
        features: [
            'Satu halaman dengan struktur promosi yang jelas',
            'Tombol WhatsApp dan formulir singkat',
            'Dasar SEO dan kecepatan mobile',
        ],
    },
    {
        slug: 'company-profile',
        name: 'Company Profile',
        short: 'Profil usaha untuk pasar luar kota dan ekspor.',
        priceStart: null,
        duration: '2-3 minggu',
        features: [
            'Hingga 5 halaman: beranda, tentang, layanan, galeri, kontak',
            'Struktur SEO per halaman dan sitemap',
            'Serah terima dan panduan update konten',
        ],
    },
    {
        slug: 'ecommerce',
        name: 'Toko Online',
        short: 'Katalog, keranjang, dan checkout sederhana.',
        priceStart: null,
        duration: '3-4 minggu',
        features: [
            'Katalog produk dan halaman checkout',
            'Pembayaran QRIS dan transfer bank',
            'Pelatihan kelola produk dan pesanan',
        ],
    },
];

export const whyUs = [
    {
        title: 'Harga jelas di awal',
        text: 'Rincian paket dan biaya tambahan ditulis sebelum mulai, jadi tidak ada kejutan di tengah jalan.',
    },
    {
        title: 'Proses full remote',
        text: 'Briefing, revisi, dan serah terima lewat WhatsApp dan video call. Bisa dari kota mana pun.',
    },
    {
        title: 'Dibangun dengan standar rapi',
        text: 'Struktur SEO dasar, keamanan form, dan kecepatan mobile dikerjakan sejak hari pertama.',
    },
    {
        title: 'Revisi tercatat',
        text: 'Setiap putaran revisi dicatat di dokumen bersama, jadi progresnya terlihat jelas.',
    },
    {
        title: 'Pendampingan setelah serah terima',
        text: 'Panduan update konten dan masa tanya jawab setelah website tayang.',
    },
    {
        title: 'Fokus ke UMKM',
        text: 'Bahasa dan fiturnya disesuaikan untuk pemilik usaha, bukan untuk tim teknis.',
    },
];

export function waLink(number, text) {
    if (!number) return '#kontak';
    return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

// Slot showcase hero. Bukan project asli: tiap slot adalah bingkai abstrak
// yang diganti screenshot project begitu portofolio tersedia.
export const heroShowcase = [
    { id: 'slot-1', frame: 'browser', kind: 'Toko Online', tilt: '-rotate-2' },
    { id: 'slot-2', frame: 'phone', kind: 'Landing Page', tilt: 'rotate-1' },
    { id: 'slot-3', frame: 'browser', kind: 'Profil Usaha', tilt: 'rotate-2' },
    { id: 'slot-4', frame: 'phone', kind: 'Toko Online', tilt: '-rotate-1' },
    { id: 'slot-5', frame: 'browser', kind: 'Landing Page', tilt: '-rotate-1' },
    { id: 'slot-6', frame: 'phone', kind: 'Profil Usaha', tilt: 'rotate-2' },
    { id: 'slot-7', frame: 'browser', kind: 'Toko Online', tilt: 'rotate-1' },
];
