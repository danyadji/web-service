import Layout from '../Components/Layout';
import Seo from '../Components/Seo';
import SectionHeading from '../Components/SectionHeading';

export default function Blog({ posts = [] }) {
    return (
        <Layout>
            <Seo
                title="Blog"
                description="Tips memilih jasa website, perbedaan jenis website, dan panduan online untuk UMKM."
            />
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
                <SectionHeading
                    eyebrow="Blog"
                    titleId="blog-title"
                    title="Tulisan untuk pemilik usaha"
                    description="Panduan praktis, bukan teori. Satu artikel dibaca dalam lima menit."
                />
                {posts.length > 0 ? (
                    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {posts.map((p) => (
                            <article
                                key={p.slug}
                                className="flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-shadow hover:shadow-md"
                            >
                                {p.cover_url ? (
                                    <img
                                        src={p.cover_url}
                                        alt={p.title}
                                        loading="lazy"
                                        className="aspect-[16/9] w-full object-cover"
                                    />
                                ) : (
                                    <div className="aspect-[16/9] w-full bg-zinc-100" aria-hidden="true" />
                                )}
                                <div className="flex flex-1 flex-col p-5">
                                    {p.published_at && (
                                        <p className="text-xs font-medium text-zinc-500">{p.published_at}</p>
                                    )}
                                    <h2 className="mt-1 text-lg font-semibold tracking-tight text-zinc-950">
                                        <a href={`/blog/${p.slug}`} className="hover:text-orange-800">
                                            {p.title}
                                        </a>
                                    </h2>
                                    {p.excerpt && (
                                        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-zinc-600">
                                            {p.excerpt}
                                        </p>
                                    )}
                                    <a
                                        href={`/blog/${p.slug}`}
                                        className="mt-4 text-sm font-semibold text-orange-800 hover:text-orange-900"
                                    >
                                        Baca artikel →
                                    </a>
                                </div>
                            </article>
                        ))}
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
