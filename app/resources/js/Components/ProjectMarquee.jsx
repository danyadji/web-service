import ShowcaseCard from './ShowcaseCard';
import { heroShowcase } from '../data/site';

export default function ProjectMarquee() {
    return (
        <div>
            <p className="sr-only">
                Showcase project akan tampil di sini setelah screenshot portofolio asli tersedia.
            </p>
            <div
                aria-hidden="true"
                className="hero-marquee overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
            >
                <div className="hero-marquee-track flex w-max items-center gap-4 px-4 py-6 sm:gap-6">
                    {heroShowcase.map((slot, i) => (
                        <ShowcaseCard key={slot.id} slot={slot} index={i} />
                    ))}
                    {heroShowcase.map((slot, i) => (
                        <ShowcaseCard key={`${slot.id}-copy`} slot={slot} index={i} />
                    ))}
                </div>
            </div>
            <p className="mt-1 text-center text-xs text-zinc-400">
                Slot showcase, ganti dengan screenshot project asli. Arahkan kursor untuk
                menghentikan geseran.
            </p>
        </div>
    );
}
