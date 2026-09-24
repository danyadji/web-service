import { Head } from '@inertiajs/react';
import Layout from '../Components/Layout';
import SectionHeading from '../Components/SectionHeading';
import { PortfolioCard } from '../Components/Portfolio';

export default function PortfolioDetail({ item, others = [] }) {
    const gallery = item.gallery_urls.length > 0 ? item.gallery_urls : [];

    return (
        <Layout>
            <Head>
                <title>{item.title}</title>
                <meta name="description" content={item.description.slice(0, 160)} />
            </Head>

            <article className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
                <a
                    href="/portofolio"
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-md border border-zinc-300 px-4 text-sm font-semibold text-zinc-950 hover:border-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
                >
                    <span aria-hidden="true">←</span>
                    Kembali ke Portofolio
                </a>
                <p className="mt-4 text-sm">
                    <a href="/portofolio" className="font-medium text-zinc-600 hover:text-zinc-950">
                        Portofolio
                    </a>
                    <span aria-hidden="true" className="mx-2 text-zinc-400">/</span>
                    <span className="text-zinc-950">{item.title}</span>
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                    {item.service && (
                        <span className="rounded-full bg-orange-700 px-3 py-1 text-xs font-semibold text-white">
                            {item.service}
                        </span>
                    )}
                    {item.year && (
                        <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700">
                            {item.year}
                        </span>
                    )}
                    {item.client_name && (
                        <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700">
                            Klien: {item.client_name}
                        </span>
                    )}
                </div>

                <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
                    {item.title}
                </h1>

                {item.cover_url && (
                    <img
                        src={item.cover_url}
                        alt={item.alt_text || item.title}
                        className="mt-8 aspect-video w-full rounded-2xl border border-zinc-200 object-cover"
                    />
                )}

                <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
                    <div>
                        <h2 className="text-lg font-semibold text-zinc-950">Tentang project</h2>
                        <p className="mt-2 text-base leading-relaxed text-zinc-700">
                            {item.description}
                        </p>
                        {item.technologies.length > 0 && (
                            <>
                                <h2 className="mt-6 text-lg font-semibold text-zinc-950">Teknologi</h2>
                                <ul aria-label="Teknologi yang dipakai" className="mt-2 flex flex-wrap gap-1.5">
                                    {item.technologies.map((t) => (
                                        <li
                                            key={t}
                                            className="rounded-full bg-orange-50 px-3 py-1 text-sm font-medium text-orange-800"
                                        >
                                            {t}
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                    <aside className="h-fit rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
                        <h2 className="text-base font-semibold text-zinc-950">Tertarik yang seperti ini?</h2>
                        <p className="mt-1 text-sm leading-relaxed text-zinc-600">
                            Ceritakan kebutuhanmu, kami susun penawaran yang pas.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {item.demo_url && (
                                <a
                                    href={item.demo_url}
                                    target="_blank"
                                    rel="noopener"
                                    className="inline-flex min-h-[44px] items-center rounded-md border border-zinc-300 bg-white px-5 text-sm font-semibold text-zinc-950 hover:border-zinc-950"
                                >
                                    Lihat demo
                                </a>
                            )}
                            <a
                                href="/kontak"
                                className="inline-flex min-h-[44px] items-center rounded-md bg-orange-700 px-5 text-sm font-semibold text-white hover:bg-orange-800"
                            >
                                Konsultasi project
                            </a>
                        </div>
                    </aside>
                </div>

                {gallery.length > 0 && (
                    <div className="mt-12">
                        <h2 className="text-lg font-semibold text-zinc-950">Galeri</h2>
                        <div className="mt-4 grid gap-4 sm:grid-cols-2">
                            {gallery.map((src, i) => (
                                <img
                                    key={src}
                                    src={src}
                                    alt={`${item.title} galeri ${i + 1}`}
                                    loading="lazy"
                                    className="aspect-video w-full rounded-xl border border-zinc-200 object-cover"
                                />
                            ))}
                        </div>
                    </div>
                )}
            </article>

            {others.length > 0 && (
                <div className="border-t border-zinc-200 bg-zinc-50">
                    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
                        <SectionHeading
                            eyebrow="Project lain"
                            titleId="lain-title"
                            title="Lihat juga"
                        />
                        <div className="mt-6 grid gap-5 sm:grid-cols-2">
                            {others.map((o) => (
                                <PortfolioCard key={o.slug} item={o} />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </Layout>
    );
}
