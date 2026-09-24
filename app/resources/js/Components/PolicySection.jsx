import SectionHeading from './SectionHeading';

const revisions = [
    {
        title: 'Minor vs major, jelas di depan',
        text: 'Minor: teks, warna, foto, geser section. Major: ganti struktur, tambah halaman atau fitur.',
    },
    {
        title: 'Jatah per tier, tertulis',
        text: 'Basic [1]x minor, Essential [2]x minor, Custom [2]x minor + [1]x major. Lebihnya berbayar, harga dibuka di awal.',
    },
    {
        title: 'Satu daftar, bukan cicilan chat',
        text: 'Kumpulkan sekaligus per putaran, maksimal [14] hari setelah draf diterima. Revisi nyicil kami tolak dengan sopan.',
    },
    {
        title: 'Dikerjakan maksimal [3] hari kerja',
        text: 'Tiap putaran ada tenggat, bukan janji "segera".',
    },
];

const covered = [
    'Error karena kami: tombol mati, rusak di HP, form tidak terkirim',
    'Halaman tidak bisa dibuka karena konfigurasi kami',
    'Berantakan setelah update kecil dari kami',
];

const notCovered = [
    'Konten yang kamu ubah sendiri',
    'Hosting, domain, atau email pihak lain',
    'Rusak karena update plugin pihak ketiga',
    'Fitur baru (itu project baru, bukan garansi)',
];

export default function PolicySection() {
    return (
        <section aria-labelledby="kebijakan-title" className="border-t border-zinc-200 bg-zinc-50">
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
                <SectionHeading
                    eyebrow="Kebijakan revisi dan garansi"
                    titleId="kebijakan-title"
                    title="Berani buka-bukaan soal revisi dan garansi"
                    description="Aturan main tertulis, bukan janji lisan. Angka dalam kurung siku masih draf."
                />
                <div className="mt-8 grid gap-4 lg:grid-cols-2">
                    <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-7">
                        <h3 className="text-lg font-semibold text-zinc-950">Revisi tanpa drama</h3>
                        <ul className="mt-4 space-y-4">
                            {revisions.map((r) => (
                                <li key={r.title} className="flex gap-3">
                                    <span
                                        aria-hidden="true"
                                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-700"
                                    />
                                    <div>
                                        <p className="text-sm font-semibold text-zinc-950">{r.title}</p>
                                        <p className="mt-0.5 text-sm leading-relaxed text-zinc-700">{r.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-7">
                        <h3 className="text-lg font-semibold text-zinc-950">
                            Garansi [30] hari. Rusak karena kami, kami bereskan.
                        </h3>
                        <p className="mt-2 text-sm font-medium text-zinc-950">Kami tanggung:</p>
                        <ul className="mt-2 space-y-2">
                            {covered.map((c) => (
                                <li key={c} className="flex gap-2.5 text-sm leading-relaxed text-zinc-700">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="mt-0.5 shrink-0">
                                        <circle cx="8" cy="8" r="7" stroke="#C2410C" strokeWidth="1.5" />
                                        <path d="M5.5 8.2 7.2 10l3.3-3.8" stroke="#C2410C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    {c}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-4 text-sm font-medium text-zinc-950">Bukan urusan kami:</p>
                        <ul className="mt-2 space-y-2">
                            {notCovered.map((c) => (
                                <li key={c} className="flex gap-2.5 text-sm leading-relaxed text-zinc-700">
                                    <span aria-hidden="true" className="font-semibold text-red-700">✕</span>
                                    {c}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-4 text-sm leading-relaxed text-zinc-700">
                            Klaim via WA (screenshot + URL), beres maksimal [3] hari kerja.
                            Garansi habis? Lanjut paket care.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
