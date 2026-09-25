import Layout from '../Components/Layout';
import Seo from '../Components/Seo';
import SectionHeading from '../Components/SectionHeading';

function FeaturedCard({ p }) {
    return (
        <article className="grid overflow-hidden rounded-2xl bg-brand-pine md:grid-cols-2">
            {p.cover_url ? (
                <img
                    src={p.cover_url}
                    alt={p.title}
                    loading="lazy"
                    className="aspect-[16/9] h-full w-full object-cover md:aspect-auto"
                />
            ) : (
                <div className="aspect-[16/9] w-full bg-white/10 md:aspect-auto" aria-hidden="true" />
            )}
            <div className="flex flex-col justify-center p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-lime">
                    Artikel pilihan{p.published_at ? ` · ${p.published_at}` : ''}
                </p>
                <h2 className="mt-2 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
                    <a href={`/blog/${p.slug}`} className="hover:text-brand-lime">
                        {p.title}
                    </a>
                </h2>
                {p.excerpt && (
                    <p className="mt-2 text-sm leading-relaxed text-zinc-300">{p.excerpt}</p>
                )}
                <a
                    href={`/blog/${p.slug}`}
                    className="mt-5 inline-flex min-h-[44px] w-fit items-center rounded-full bg-brand-lime px-6 text-sm font-semibold text-brand-pine hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-lime"
                >
                    Baca artikel →
                </a>
            </div>
        </article>
    );
}

export default function Blog({ posts = [] }) {
    const [featured, ...rest] = posts;

    return (
        <Layout>
            <Seo
                title="Blog"
                description="Tips memilih jasa website, perbedaan jenis website, dan panduan online untuk bisnis."
            />
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
                <SectionHeading
                    eyebrow="Blog"
                    titleId="blog-title"
                    title="Tulisan untuk pemilik usaha"
                    description="Panduan praktis, bukan teori. Satu artikel dibaca dalam lima menit."
                />
                {posts.length > 0 ? (
                    <div className="mt-8 space-y-5">
                        <FeaturedCard p={featured} />
                        {rest.length > 0 && (
                            <div className="grid gap-5 sm:grid-cols-2">
                                {rest.map((p) => (
                                    <article
                                        key={p.slug}
                                        className="flex min-w-0 items-center gap-4 overflow-hidden rounded-2xl border border-zinc-200 bg-white p-4 transition-shadow hover:shadow-md"
                                    >
                                        {p.cover_url ? (
                                            <img
                                                src={p.cover_url}
                                                alt=""
                                                loading="lazy"
                                                className="h-20 w-24 shrink-0 rounded-xl object-cover"
                                            />
                                        ) : (
                                            <div className="h-20 w-24 shrink-0 rounded-xl bg-zinc-100" aria-hidden="true" />
                                        )}
                                        <div className="min-w-0">
                                            {p.published_at && (
                                                <p className="text-xs font-medium text-zinc-500">{p.published_at}</p>
                                            )}
                                            <h2 className="line-clamp-2 text-base font-semibold leading-snug text-zinc-950">
                                                <a href={`/blog/${p.slug}`} className="hover:text-brand-pine">
                                                    {p.title}
                                                </a>
                                            </h2>
                                            <a
                                                href={`/blog/${p.slug}`}
                                                className="mt-1 inline-block text-sm font-semibold text-brand-pine hover:underline"
                                            >
                                                Baca →
                                            </a>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        )}
                    </div>
                ) : (
                    <p className="mt-8 rounded-xl border border-dashed border-zinc-300 bg-white px-4 py-6 text-sm text-zinc-600">
                        Belum ada artikel tayang. Artikel pertama sedang disiapkan.
                    </p>
                )}
            </div>
        </Layout>
    );
}
