import SectionHeading from './SectionHeading';

function excerpt(text, length = 90) {
    if (!text) return '';
    return text.length > length ? `${text.slice(0, length).trimEnd()}...` : text;
}

export function PortfolioCard({ item }) {
    return (
        <article className="flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-shadow hover:shadow-md">
            <div className="relative">
                {item.cover_url ? (
                    <img
                        src={item.cover_url}
                        alt={item.alt_text || item.title}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover"
                    />
                ) : (
                    <div className="aspect-[4/3] w-full bg-zinc-100" aria-hidden="true" />
                )}
                <div className="absolute inset-x-3 top-3 flex items-start justify-between gap-2">
                    {item.service ? (
                        <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-orange-800 shadow-sm">
                            {item.service}
                        </span>
                    ) : (
                        <span />
                    )}
                    {item.year && (
                        <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm">
                            {item.year}
                        </span>
                    )}
                </div>
            </div>
            <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold tracking-tight text-zinc-950">
                    {item.title}
                </h3>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-zinc-600">
                    {excerpt(item.description)}
                </p>
                {item.technologies.length > 0 && (
                    <ul aria-label="Teknologi yang dipakai" className="mt-3 flex flex-wrap gap-1.5">
                        {item.technologies.map((t) => (
                            <li
                                key={t}
                                className="rounded-full bg-orange-50 px-2.5 py-1 text-xs font-medium text-orange-800"
                            >
                                {t}
                            </li>
                        ))}
                    </ul>
                )}
                <a
                    href={`/portofolio/${item.slug}`}
                    className="mt-4 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-zinc-300 text-sm font-semibold text-zinc-950 hover:border-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
                >
                    Lihat Detail
                    <span aria-hidden="true">→</span>
                </a>
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
                    description="Project asli yang dikelola dari admin. Buka detail untuk galeri dan penjelasan tiap project."
                />
                {items.length > 0 ? (
                    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {items.map((item) => (
                            <PortfolioCard key={item.slug} item={item} />
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
