import SectionHeading from './SectionHeading';
import ServiceCard from './ServiceCard';
import { services } from '../data/site';

export default function Pricing() {
    return (
        <section aria-labelledby="paket-title">
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
                <SectionHeading
                    eyebrow="Paket dan harga"
                    titleId="paket-title"
                    title="Harga awal yang jelas"
                    description="Harga final menyesuaikan kebutuhan. Klik pilih paket, lalu ceritakan usaha Anda di form kontak."
                />
                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {services
                        .filter((s) => !s.isCustom)
                        .map((s) => (
                            <ServiceCard key={s.slug} service={s} />
                        ))}
                </div>
                <div className="mt-4 flex flex-col gap-4 rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-6 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h3 className="text-base font-semibold text-zinc-950">
                            Butuh yang lain? Paket Custom
                        </h3>
                        <p className="mt-1 max-w-lg text-sm leading-relaxed text-zinc-600">
                            Integrasi khusus, multibahasa, atau alur yang tidak biasa.
                            Ceritakan kebutuhan, kami susun penawaran yang pas.
                        </p>
                    </div>
                    <a
                        href="/kontak?paket=custom"
                        className="inline-flex min-h-[44px] shrink-0 items-center justify-center rounded-md bg-zinc-950 px-5 text-sm font-semibold text-white hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
                    >
                        Diskusikan kebutuhan
                    </a>
                </div>
            </div>
        </section>
    );
}
