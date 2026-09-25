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
                        className="mt-6 inline-flex min-h-[44px] items-center rounded-full bg-brand-lime px-5 text-sm font-semibold text-brand-pine hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-pine"
                    >
                        Mulai langkah pertama
                    </a>
                </div>
                <ol className="space-y-2">
                    {steps.map((s, i) => (
                        <li key={s.title} className="flex gap-5 rounded-2xl p-4 hover:bg-zinc-50">
                            <span
                                aria-hidden="true"
                                className="font-display font-extrabold text-5xl leading-none text-brand-pine/10"
                            >
                                {i + 1}
                            </span>
                            <div>
                                <h3 className="w-fit bg-brand-lime px-1.5 py-0.5 text-base font-semibold text-brand-pine">{s.title}</h3>
                                <p className="mt-1 text-sm leading-relaxed text-zinc-700">{s.text}</p>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
