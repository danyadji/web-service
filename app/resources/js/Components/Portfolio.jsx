import SectionHeading from './SectionHeading';

function PortfolioCard({ item }) {
    return (
        <article className="overflow-hidden rounded-xl border border-zinc-200 bg-white transition-shadow hover:shadow-md">
            {item.cover_url ? (
                <img
                    src={item.cover_url}
                    alt={item.alt_text || item.title}
                    loading="lazy"
                    className="aspect-video w-full object-cover"
                />
            ) : (
                <div className="aspect-video w-full bg-zinc-100" aria-hidden="true" />
            )}
            <div className="p-6">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                    {item.service && (
                        <span className="font-semibold uppercase tracking-wide text-orange-800">
                            {item.service}
                        </span>
                    )}
                    {item.demo_url && (
                        <a
                            href={item.demo_url}
                            target="_blank"
                            rel="noopener"
                            className="font-medium text-zinc-600 underline underline-offset-2 hover:text-zinc-950"
                        >
                            Lihat demo
                        </a>
                    )}
                </div>
                <h3 className="mt-2 text-lg font-semibold text-zinc-950">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-zinc-700">{item.description}</p>
                {item.technologies.length > 0 && (
                    <ul aria-label="Teknologi yang dipakai" className="mt-3 flex flex-wrap gap-1.5">
                        {item.technologies.map((t) => (
                            <li
                                key={t}
                                className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700"
                            >
                                {t}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </article>
    );
}

export default function Portfolio({ items = [] }) {
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
                    title="Hasil kerja yang sudah tayang"
                    description="Project asli yang dikelola dari admin. Tiap project tampil dengan deskripsi unik untuk SEO."
                />
                {items.length > 0 ? (
                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                        {items.map((item) => (
                            <PortfolioCard key={item.title} item={item} />
                        ))}
                    </div>
                ) : (
                    <p className="mt-8 rounded-xl border border-dashed border-zinc-300 bg-white px-4 py-6 text-sm text-zinc-600">
                        Belum ada portofolio tayang. Tambahkan dari admin panel.
                    </p>
                )}
            </div>
        </section>
    );
}
