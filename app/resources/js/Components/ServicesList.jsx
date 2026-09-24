import { services } from '../data/site';

const icons = {
    'company-profile': (
        <path
            d="M4 10V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4M4 10h16M4 10v3a1 1 0 0 0 1 1h2v4h4v-4h2a1 1 0 0 0 1-1v-3M9 21v-3h6v3"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    ),
    'landing-page': (
        <rect x="4" y="5" width="16" height="14" rx="1.5" strokeWidth="1.8" />
    ),
    ecommerce: (
        <path
            d="M5 8h14l-1.2 11a1 1 0 0 1-1 .9H7.2a1 1 0 0 1-1-.9L5 8ZM8.5 8V6.5a3.5 3.5 0 0 1 7 0V8"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    ),
};

export default function ServicesList() {
    return (
        <section aria-labelledby="layanan-title" className="bg-stone-50">
            <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                <div className="lg:sticky lg:top-28 lg:self-start">
                    <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-600">
                        <span aria-hidden="true" className="inline-block h-px w-8 bg-orange-700" />
                        Layanan pembuatan website
                    </p>
                    <h2
                        id="layanan-title"
                        className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-zinc-950 sm:text-4xl"
                    >
                        Apa yang Anda butuhkan dari website?
                    </h2>
                    <p className="mt-4 max-w-md text-base leading-relaxed text-zinc-700">
                        Pilih berdasarkan kebutuhan bisnis: menjelaskan perusahaan,
                        mendukung kampanye, menjual produk, atau memperbaiki website
                        lama. Lingkupnya dibahas sebelum pekerjaan dimulai.
                    </p>
                    <a
                        href="/layanan"
                        className="mt-6 inline-flex min-h-[44px] items-center gap-2 border-b border-zinc-950 pb-1 text-sm font-semibold text-zinc-950 hover:gap-3 hover:text-orange-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-800"
                    >
                        Bandingkan jenis layanan
                        <span aria-hidden="true">↗</span>
                    </a>
                </div>

                <ul className="divide-y divide-zinc-300/70">
                    {services
                        .filter((s) => !s.isCustom)
                        .map((s, i) => (
                        <li key={s.slug}>
                            <a
                                href="/layanan"
                                aria-label={`${s.name}: bandingkan di halaman layanan`}
                                className="group flex items-start gap-4 py-6 first:pt-0 last:pb-0 sm:gap-5 sm:py-7"
                            >
                                <span
                                    aria-hidden="true"
                                    className="mt-1 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-zinc-300 bg-white text-zinc-800 transition-colors group-hover:border-orange-700 group-hover:text-orange-800"
                                >
                                    <svg
                                        width="22"
                                        height="22"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        {icons[s.slug]}
                                    </svg>
                                </span>
                                <span className="flex-1">
                                    <span className="text-xs font-medium text-zinc-500">
                                        0{i + 1}
                                    </span>
                                    <span className="block text-xl font-medium tracking-tight text-zinc-950">
                                        {s.name}
                                    </span>
                                    <span className="mt-1 block max-w-md text-sm leading-relaxed text-zinc-600">
                                        {s.blurb}
                                    </span>
                                </span>
                                <span
                                    aria-hidden="true"
                                    className="mt-1 shrink-0 text-lg text-zinc-950 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-orange-800"
                                >
                                    ↗
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
