import { services } from '../data/site';

const thumbs = {
    'company-profile': 'bg-brand-pinelight',
    'landing-page': 'bg-sky-100',
    ecommerce: 'bg-brand-lime/40',
};

function Thumb({ slug, name }) {
    return (
        <span
            aria-hidden="true"
            className={`block h-28 w-36 shrink-0 overflow-hidden rounded-xl sm:h-32 sm:w-44 ${thumbs[slug] || 'bg-zinc-100'}`}
        >
            <span className="block h-full w-full p-2.5">
                <span className="mx-auto block h-1.5 w-12 rounded-full bg-white/80" />
                <span className="mt-2 block h-8 rounded-md bg-white/80" />
                <span className="mt-1.5 block h-1.5 rounded bg-white/80" />
                <span className="mt-1 block h-1.5 w-2/3 rounded bg-white/80" />
                <span className="mt-2 block h-4 w-14 rounded-full bg-brand-pine" />
            </span>
            <span className="sr-only">Ilustrasi contoh: {name}</span>
        </span>
    );
}

export default function ServicesList() {
    const items = services.filter((s) => !s.isCustom);

    return (
        <section aria-labelledby="layanan-title" className="bg-white">
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div className="max-w-xl">
                        <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-600">
                            <span aria-hidden="true" className="inline-block h-px w-8 bg-brand-pine" />
                            Layanan pembuatan website
                        </p>
                        <h2
                            id="layanan-title"
                            className="mt-3 text-4xl font-bold leading-[1.05] tracking-tight text-zinc-950 sm:text-5xl"
                        >
                            Apa yang Anda butuhkan dari website?
                        </h2>
                    </div>
                    <a
                        href="/kontak"
                        className="inline-flex min-h-[44px] w-fit items-center gap-2 border-b border-zinc-950 pb-1 text-sm font-semibold text-zinc-950 hover:gap-3 hover:text-brand-pine focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-pine"
                    >
                        Siap mulai? Hubungi kami
                        <span aria-hidden="true">↗</span>
                    </a>
                </div>

                <ul className="mt-10 divide-y divide-zinc-200 border-t border-zinc-200">
                    {items.map((s, i) => (
                        <li key={s.slug}>
                            <a
                                href="/layanan"
                                aria-label={`${s.name}: bandingkan di halaman layanan`}
                                className="group grid gap-4 py-6 sm:grid-cols-[auto_auto_1fr] sm:items-center sm:gap-8 sm:py-7"
                            >
                                <Thumb slug={s.slug} name={s.name} />
                                <span aria-hidden="true" className="hidden text-lg font-medium text-zinc-950 sm:block">
                                    0{i + 1}
                                </span>
                                <span>
                                    <span className="flex items-center gap-3">
                                        <span aria-hidden="true" className="text-lg font-medium text-zinc-950 sm:hidden">
                                            0{i + 1}
                                        </span>
                                        <span className="text-2xl font-bold tracking-tight text-zinc-950 group-hover:text-brand-pine sm:text-[1.7rem]">
                                            {s.name}
                                        </span>
                                    </span>
                                    <span className="mt-1.5 block max-w-xl text-sm leading-relaxed text-zinc-600">
                                        {s.blurb}
                                    </span>
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
