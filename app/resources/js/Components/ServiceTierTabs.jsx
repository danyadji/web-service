import { useId, useRef, useState } from 'react';
import SectionHeading from './SectionHeading';

function formatPrice(value) {
    if (value == null) return 'Harga menyusul';
    return `Rp ${Number(value).toLocaleString('id-ID')}`;
}

function CheckIcon({ light }) {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            className="mt-0.5 shrink-0"
        >
            <circle
                cx="8"
                cy="8"
                r="7"
                stroke={light ? '#FFFFFF' : '#C2410C'}
                strokeWidth="1.5"
            />
            <path
                d="M5.5 8.2 7.2 10l3.3-3.8"
                stroke={light ? '#FFFFFF' : '#C2410C'}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function TierCard({ serviceSlug, tier }) {
    const light = tier.is_highlighted;

    return (
        <article
            className={`flex flex-col rounded-2xl border p-6 sm:p-7 ${
                light
                    ? 'border-orange-700 bg-orange-700 text-white shadow-lg'
                    : 'border-zinc-200 bg-white text-zinc-950'
            }`}
        >
            <h3 className="text-lg font-semibold">{tier.name}</h3>
            <p className={`mt-1 text-2xl font-bold tracking-tight sm:text-3xl ${light ? 'text-white' : 'text-orange-700'}`}>
                {formatPrice(tier.price)}
            </p>
            {tier.duration_estimate && (
                <p className={`mt-1 text-sm ${light ? 'text-orange-100' : 'text-zinc-600'}`}>
                    Pengerjaan {tier.duration_estimate}
                </p>
            )}
            <ul className="mt-5 flex-1 space-y-2.5">
                {tier.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm leading-relaxed">
                        <CheckIcon light={light} />
                        <span className={light ? 'text-white' : 'text-zinc-700'}>{f}</span>
                    </li>
                ))}
            </ul>
            {tier.bonus_text && (
                <p
                    className={`mt-5 rounded-lg px-4 py-2.5 text-center text-xs font-semibold ${
                        light ? 'bg-white/15 text-white' : 'bg-orange-50 text-orange-800'
                    }`}
                >
                    {tier.bonus_text}
                </p>
            )}
            <a
                href={`/kontak?paket=${serviceSlug}&tier=${encodeURIComponent(tier.name)}`}
                className={`mt-4 inline-flex min-h-[48px] items-center justify-center rounded-xl text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 ${
                    light
                        ? 'bg-white text-orange-800 hover:bg-orange-50 focus-visible:outline-white'
                        : 'bg-orange-700 text-white hover:bg-orange-800 focus-visible:outline-orange-800'
                }`}
            >
                Pesan Sekarang
            </a>
        </article>
    );
}

export default function ServiceTierTabs({ items = [] }) {
    const [active, setActive] = useState(0);
    const tabRefs = useRef([]);
    const panelId = useId();
    const current = items[active];

    function onKeyDown(e) {
        let next = null;
        if (e.key === 'ArrowRight') next = (active + 1) % items.length;
        if (e.key === 'ArrowLeft') next = (active - 1 + items.length) % items.length;
        if (e.key === 'Home') next = 0;
        if (e.key === 'End') next = items.length - 1;
        if (next !== null) {
            e.preventDefault();
            setActive(next);
            tabRefs.current[next]?.focus();
        }
    }

    if (items.length === 0) {
        return (
            <section aria-labelledby="tier-title" className="border-t border-zinc-200">
                <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
                    <SectionHeading
                        eyebrow="Layanan dan harga"
                        titleId="tier-title"
                        title="Pilih kategori, lalu tier yang pas"
                        description="Data paket sedang disiapkan di admin panel."
                    />
                </div>
            </section>
        );
    }

    return (
        <section aria-labelledby="tier-title" className="border-t border-zinc-200">
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
                <div className="mx-auto max-w-2xl text-center">
                    <SectionHeading
                        align="center"
                        eyebrow="Layanan dan harga"
                        titleId="tier-title"
                        title="Pilih kategori, lalu tier yang pas"
                        description="Tiap kategori punya 3 tier. Harga final dikunci setelah diskusi kebutuhan."
                    />
                </div>

                <div
                    role="tablist"
                    aria-label="Kategori layanan"
                    onKeyDown={onKeyDown}
                    className="mt-8 flex flex-wrap justify-center gap-2"
                >
                    {items.map((s, i) => {
                        const selected = i === active;
                        return (
                            <button
                                key={s.slug}
                                ref={(el) => {
                                    tabRefs.current[i] = el;
                                }}
                                role="tab"
                                aria-selected={selected}
                                aria-controls={panelId}
                                id={`${panelId}-tab-${s.slug}`}
                                tabIndex={selected ? 0 : -1}
                                onClick={() => setActive(i)}
                                className={`min-h-[44px] rounded-full border px-5 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-800 ${
                                    selected
                                        ? 'border-orange-700 bg-orange-700 text-white'
                                        : 'border-zinc-300 bg-white text-zinc-700 hover:border-zinc-500 hover:text-zinc-950'
                                }`}
                            >
                                {s.name}
                            </button>
                        );
                    })}
                </div>

                <div
                    role="tabpanel"
                    id={panelId}
                    aria-labelledby={`${panelId}-tab-${current.slug}`}
                    className="mt-8 grid gap-4 md:grid-cols-3"
                >
                    {current.packages.map((tier) => (
                        <TierCard key={tier.name} serviceSlug={current.slug} tier={tier} />
                    ))}
                </div>
            </div>
        </section>
    );
}
