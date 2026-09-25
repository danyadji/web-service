import { siteConfig, waLink } from '../data/site';
import ProjectMarquee from './ProjectMarquee';

export default function Hero() {
    return (
        <section aria-labelledby="hero-title" className="-mt-[76px] flex min-h-svh flex-col justify-center overflow-hidden bg-brand-pine pt-[76px]">
            <div className="mx-auto max-w-6xl px-4 pt-8 text-center sm:px-6 sm:pt-10">
                <p className="inline-flex items-center gap-2 text-sm font-medium text-white">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <circle cx="10" cy="10" r="10" fill="#CDF138" />
                        <circle cx="7" cy="8" r="1.2" fill="#0B1F17" />
                        <circle cx="13" cy="8" r="1.2" fill="#0B1F17" />
                        <path d="M6.5 11.5c1 1.5 2.2 2 3.5 2s2.5-.5 3.5-2" stroke="#0B1F17" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                    Proses remote, cocok untuk bisnis di seluruh Indonesia
                </p>
                <h1
                    id="hero-title"
                    className="mx-auto mt-4 max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
                >
                    Website yang bikin bisnis dilirik pelanggan
                </h1>
                <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
                    Kami buatkan landing page, profil usaha, dan toko online yang rapi,
                    cepat di HP, dan mudah dihubungi pembeli. {siteConfig.brandName} mendampingi
                    dari brief sampai tayang.
                </p>
                <div className="mt-7 flex flex-wrap justify-center gap-3">
                    <a
                        href="/layanan"
                        className="inline-flex min-h-[48px] items-center rounded-full bg-brand-lime px-7 text-sm font-semibold text-brand-pine hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-lime"
                    >
                        Lihat paket dan harga
                    </a>
                    <a
                        href={waLink(
                            siteConfig.whatsappNumber,
                            'Halo, saya mau konsultasi pembuatan website.'
                        )}
                        className="inline-flex min-h-[48px] items-center rounded-full border border-white/40 bg-transparent px-7 text-sm font-semibold text-white hover:border-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        Konsultasi via WhatsApp
                    </a>
                </div>
            </div>
            <div className="mt-6 pb-8">
                <ProjectMarquee />
            </div>
        </section>
    );
}
