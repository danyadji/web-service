import { useState } from 'react';
import SectionHeading from './SectionHeading';
import { services } from '../data/site';

export default function ServiceAccordion() {
    const [active, setActive] = useState(services[0].slug);
    const current = services.find((s) => s.slug === active);

    return (
        <section id="layanan" aria-labelledby="layanan-title" className="scroll-mt-20">
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
                <SectionHeading
                    eyebrow="Layanan"
                    titleId="layanan-title"
                    title="Pilih layanan sesuai kebutuhan usaha"
                    description="Tiga layanan utama. Klik tiap judul untuk melihat rinciannya."
                />
                <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-start">
                    <div className="divide-y divide-zinc-200 rounded-xl border border-zinc-200 bg-white">
                        {services.map((s) => {
                            const open = s.slug === active;
                            return (
                                <div key={s.slug}>
                                    <h3>
                                        <button
                                            type="button"
                                            aria-expanded={open}
                                            aria-controls={`panel-${s.slug}`}
                                            id={`tab-${s.slug}`}
                                            onClick={() => setActive(s.slug)}
                                            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-zinc-950 hover:bg-orange-50 focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-orange-800"
                                        >
                                            <span className="flex items-center gap-2">
                                                <span
                                                    aria-hidden="true"
                                                    className={`inline-block h-1.5 w-1.5 rounded-full ${open ? 'bg-orange-600' : 'bg-zinc-300'}`}
                                                />
                                                {s.name}
                                            </span>
                                            <span aria-hidden="true" className="text-zinc-500">
                                                {open ? 'Tutup' : 'Buka'}
                                            </span>
                                        </button>
                                    </h3>
                                    {open && (
                                        <div
                                            id={`panel-${s.slug}`}
                                            role="region"
                                            aria-labelledby={`tab-${s.slug}`}
                                            className="px-5 pb-5"
                                        >
                                            <p className="text-sm text-zinc-700">{s.short}</p>
                                            <ul className="mt-3 space-y-2">
                                                {s.features.map((f) => (
                                                    <li key={f} className="flex gap-2 text-sm text-zinc-700">
                                                        <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-600" />
                                                        {f}
                                                    </li>
                                                ))}
                                            </ul>
                                            <p className="mt-3 text-sm text-zinc-600">
                                                Estimasi pengerjaan: {s.duration}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    <div className="rounded-xl bg-gradient-to-br from-orange-100 via-orange-50 to-sky-100 p-6">
                        <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
                            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                                {current.name}
                            </p>
                            <p className="mt-2 text-lg font-semibold text-zinc-950">{current.short}</p>
                            <div className="mt-4 space-y-2" aria-hidden="true">
                                <div className="h-2.5 rounded bg-zinc-200" />
                                <div className="h-2.5 w-4/5 rounded bg-zinc-200" />
                                <div className="h-2.5 w-3/5 rounded bg-orange-200" />
                                <div className="flex gap-2 pt-2">
                                    <div className="h-9 w-24 rounded-md bg-orange-700" />
                                    <div className="h-9 w-24 rounded-md border border-zinc-300" />
                                </div>
                            </div>
                        </div>
                        <p className="mt-3 text-xs text-zinc-600">
                            Ilustrasi struktur halaman {current.name}. Diganti tampilan asli setelah ada project tayang.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
