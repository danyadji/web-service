import { siteConfig, waLink } from '../data/site';
import ProjectMarquee from './ProjectMarquee';

export default function Hero() {
    return (
        <section aria-labelledby="hero-title" className="-mt-[76px] overflow-hidden bg-gradient-to-b from-sky-100 via-white to-white pt-[76px]">
            <div className="mx-auto max-w-6xl px-4 pt-8 text-center sm:px-6 sm:pt-10">
                <p className="inline-flex items-center gap-2 text-sm font-medium text-zinc-800">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <circle cx="10" cy="10" r="10" fill="#16A34A" />
                        <circle cx="7" cy="8" r="1.2" fill="#fff" />
                        <circle cx="13" cy="8" r="1.2" fill="#fff" />
                        <path d="M6.5 11.5c1 1.5 2.2 2 3.5 2s2.5-.5 3.5-2" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                    Proses remote, cocok untuk UMKM di seluruh Indonesia
                </p>
                <h1
                    id="hero-title"
                    className="mx-auto mt-4 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl"
                >
                    Website yang bikin UMKM{' '}
                    <em className="font-serif font-medium italic">naik kelas</em>
                </h1>
                <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-700 sm:text-lg">
                    Kami buatkan landing page, profil usaha, dan toko online yang rapi,
                    cepat di HP, dan mudah dihubungi pembeli. {siteConfig.brandName} mendampingi
                    dari brief sampai tayang.
                </p>
                <div className="mt-7 flex flex-wrap justify-center gap-3">
                    <a
                        href="/layanan"
                        className="inline-flex min-h-[48px] items-center rounded-md bg-orange-700 px-6 text-sm font-semibold text-white hover:bg-orange-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-800"
                    >
                        Lihat paket dan harga
                    </a>
                    <a
                        href={waLink(
                            siteConfig.whatsappNumber,
                            'Halo, saya mau konsultasi pembuatan website.'
                        )}
                        className="inline-flex min-h-[48px] items-center rounded-md border border-zinc-300 bg-white px-6 text-sm font-semibold text-zinc-950 hover:border-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
                    >
                        Konsultasi via WhatsApp
                    </a>
                </div>
            </div>
            <div className="mt-8 pb-10">
                <ProjectMarquee />
            </div>
        </section>
    );
}
