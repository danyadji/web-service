import { useId, useRef, useState } from 'react';
import SectionHeading from './SectionHeading';

function formatPrice(value, tierName) {
    if (value != null) return `Rp ${Number(value).toLocaleString('id-ID')}`;
    if (tierName === 'Custom') return 'Sesuai kebutuhan';
    return 'Harga menyusul';
}

function CheckIcon({ light }) {
    const color = light ? '#0B1F17' : '#0B1F17';
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            className="mt-0.5 shrink-0"
        >
            <circle cx="8" cy="8" r="7" stroke={color} strokeWidth="1.5" />
            <path
                d="M5.5 8.2 7.2 10l3.3-3.8"
                stroke={color}
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
            className={`flex flex-col rounded-2xl p-6 sm:p-7 ${light
                    ? 'bg-brand-lime text-brand-pine shadow-xl'
                    : 'bg-white text-zinc-950'
                }`}
        >
            <h3 className="text-lg font-semibold">{tier.name}</h3>
            <p className="mt-1 text-3xl font-bold tracking-tight text-brand-pine sm:text-4xl">
                {formatPrice(tier.price, tier.name)}
            </p>
            {tier.duration_estimate && (
                <p className={`mt-1 text-sm ${light ? 'text-brand-pine/70' : 'text-zinc-600'}`}>
                    Pengerjaan {tier.duration_estimate}
                </p>
            )}
            <ul className="mt-5 flex-1 space-y-2.5">
                {tier.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm leading-relaxed">
                        <CheckIcon light={light} />
                        <span className={light ? 'text-brand-pine' : 'text-zinc-700'}>{f}</span>
                    </li>
                ))}
            </ul>
            {tier.bonus_text && (
                <p
                    className={`mt-5 rounded-lg px-4 py-2.5 text-center text-xs font-semibold ${light ? 'bg-brand-pine text-brand-lime' : 'bg-brand-pinelight text-brand-pine'
                        }`}
                >
                    {tier.bonus_text}
                </p>
            )}
            <a
                href={`/kontak?paket=${serviceSlug}&tier=${encodeURIComponent(tier.name)}`}
                className={`mt-4 inline-flex min-h-[48px] items-center justify-center rounded-full px-4 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 ${light
                        ? 'bg-brand-pine text-white hover:bg-zinc-800 focus-visible:outline-white'
                        : 'bg-brand-pine text-white hover:bg-zinc-800 focus-visible:outline-brand-pine'
                    }`}
            >
                Pesan Sekarang
            </a>
        </article>
    );
}

export default function ServiceTierTabs({ items = [], flushTop = false }) {
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
            <section aria-labelledby="tier-title" className={`bg-brand-pine ${flushTop ? '-mt-[76px] pt-[76px]' : ''}`}>
                <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
                    <SectionHeading
                        tone="dark"
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
        <section aria-labelledby="tier-title" className={`bg-brand-pine ${flushTop ? '-mt-[76px] pt-[76px]' : ''}`}>
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                    <SectionHeading
                        tone="dark"
                        eyebrow="Layanan dan harga"
                        titleId="tier-title"
                        title="Pilih kategori, lalu tier yang pas"
                        description="Tiap kategori punya 3 tier. Harga final dikunci setelah diskusi kebutuhan."
                    />
                    <div
                        role="tablist"
                        aria-label="Kategori layanan"
                        onKeyDown={onKeyDown}
                        className="flex flex-wrap gap-2"
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
                                    className={`min-h-[44px] rounded-full border px-5 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-lime ${selected
                                            ? 'border-brand-lime bg-brand-lime text-brand-pine'
                                            : 'border-white/30 bg-transparent text-white hover:border-white/70'
                                        }`}
                                >
                                    {s.name}
                                </button>
                            );
                        })}
                    </div>
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
