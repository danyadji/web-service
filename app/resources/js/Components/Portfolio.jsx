import SectionHeading from './SectionHeading';

export default function Portfolio() {
    return (
        <section
            id="portofolio"
            aria-labelledby="portofolio-title"
            className="scroll-mt-20 border-t border-zinc-200 bg-zinc-50"
        >
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
                <SectionHeading
                    eyebrow="Portofolio"
                    titleId="portofolio-title"
                    title="Ruang untuk hasil kerja nyata"
                    description="Terhubung ke tabel portfolios setelah CRUD Filament jadi. Tiap project tampil dengan deskripsi unik untuk SEO."
                />
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {[1, 2].map((i) => (
                        <div
                            key={i}
                            className="rounded-xl border border-dashed border-zinc-300 bg-white p-6"
                        >
                            <div className="h-36 rounded-lg bg-zinc-100" aria-hidden="true" />
                            <p className="mt-4 text-sm font-semibold text-zinc-950">
                                Slot project {i}
                            </p>
                            <p className="mt-1 text-sm text-zinc-600">
                                Screenshot, deskripsi, dan tautan demo diisi dari admin. Minimal 2
                                project dummy sebelum launch.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
