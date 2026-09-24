import SectionHeading from './SectionHeading';

const steps = [
    {
        title: 'Ceritakan kebutuhan',
        text: 'Chat WhatsApp atau isi form, gratis. Kami petakan jenis website yang paling cocok sebelum bahas biaya.',
    },
    {
        title: 'Deal dan DP',
        text: 'Penawaran tertulis berisi lingkup, harga, dan jadwal. DP tanda jadi via transfer atau QRIS.',
    },
    {
        title: 'Revisi tercatat',
        text: 'Draf dikirim, kamu ajukan revisi sekaligus per putaran sesuai jatah tier. Semua tercatat.',
    },
    {
        title: 'Tayang dan garansi',
        text: 'Pelunasan saat tayang. Dapat panduan update konten plus garansi [30] hari untuk error dari kami.',
    },
];

export default function HowItWorks() {
    return (
        <section aria-labelledby="cara-title" className="border-t border-zinc-200">
            <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                <div className="lg:sticky lg:top-28 lg:self-start">
                    <SectionHeading
                        eyebrow="Cara kerja"
                        titleId="cara-title"
                        title="Dari chat pertama sampai tayang"
                        description="Empat langkah yang sama untuk semua tier. Tidak ada proses tersembunyi."
                    />
                    <a
                        href="/kontak"
                        className="mt-6 inline-flex min-h-[44px] items-center rounded-md bg-orange-700 px-5 text-sm font-semibold text-white hover:bg-orange-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-800"
                    >
                        Mulai langkah pertama
                    </a>
                </div>
                <ol className="space-y-2">
                    {steps.map((s, i) => (
                        <li key={s.title} className="flex gap-5 rounded-2xl p-4 hover:bg-zinc-50">
                            <span
                                aria-hidden="true"
                                className="font-serif text-4xl italic leading-none text-orange-200"
                            >
                                {i + 1}
                            </span>
                            <div>
                                <h3 className="text-base font-semibold text-zinc-950">{s.title}</h3>
                                <p className="mt-1 text-sm leading-relaxed text-zinc-700">{s.text}</p>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
