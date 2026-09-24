import Layout from '../Components/Layout';
import Seo from '../Components/Seo';

export default function BlogDetail({ post, others = [] }) {
    return (
        <Layout>
            <Seo
                title={post.title}
                description={post.meta_description || post.excerpt || post.title}
                image={post.cover_absolute}
            />
            <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
                <a
                    href="/blog"
                    className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-zinc-700 hover:text-zinc-950"
                >
                    <span aria-hidden="true">←</span>
                    Semua artikel
                </a>
                {post.published_at && (
                    <p className="mt-4 text-sm font-medium text-zinc-500">{post.published_at}</p>
                )}
                <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
                    {post.title}
                </h1>
                {post.cover_url && (
                    <img
                        src={post.cover_url}
                        alt={post.title}
                        className="mt-8 aspect-video w-full rounded-2xl border border-zinc-200 object-cover"
                    />
                )}
                <div
                    className="prose-zinc mt-8 space-y-4 text-base leading-relaxed text-zinc-800 [&>h2]:pt-4 [&>h2]:text-xl [&>h2]:font-semibold [&>h2]:text-zinc-950 [&>p>a]:text-brand-pine [&>p>a]:underline [&>ul]:list-disc [&>ul]:pl-5"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
                <div className="mt-10 rounded-2xl bg-zinc-50 p-6 text-center">
                    <p className="text-base font-semibold text-zinc-950">
                        Butuh website seperti yang dibahas di artikel ini?
                    </p>
                    <a
                        href="/kontak"
                        className="mt-3 inline-flex min-h-[44px] items-center rounded-full bg-brand-lime px-5 text-sm font-semibold text-brand-pine hover:brightness-95"
                    >
                        Konsultasi gratis
                    </a>
                </div>
            </article>
            {others.length > 0 && (
                <div className="border-t border-zinc-200">
                    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
                        <h2 className="text-base font-semibold text-zinc-950">Artikel lain</h2>
                        <ul className="mt-3 space-y-2">
                            {others.map((o) => (
                                <li key={o.slug}>
                                    <a
                                        href={`/blog/${o.slug}`}
                                        className="text-sm font-medium text-zinc-700 hover:text-brand-pine"
                                    >
                                        {o.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </Layout>
    );
}
