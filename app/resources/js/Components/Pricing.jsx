import SectionHeading from './SectionHeading';
import ServiceCard from './ServiceCard';
import { services } from '../data/site';

export default function Pricing({ onChoose }) {
    return (
        <section id="paket" aria-labelledby="paket-title" className="scroll-mt-20 border-t border-zinc-200">
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
                <SectionHeading
                    eyebrow="Paket dan harga"
                    titleId="paket-title"
                    title="Harga awal yang jelas"
                    description="Harga final menyesuaikan kebutuhan. Klik pilih paket, lalu ceritakan usaha Anda di form kontak."
                />
                <div className="mt-8 grid gap-4 md:grid-cols-3">
                    {services.map((s) => (
                        <ServiceCard key={s.slug} service={s} onChoose={onChoose} />
                    ))}
                </div>
            </div>
        </section>
    );
}
