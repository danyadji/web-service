import { siteConfig, waLink } from '../data/site';

export default function PreFooterCTA() {
    return (
        <section id="mulai" aria-labelledby="mulai-title" className="scroll-mt-20 overflow-hidden">
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
                <div className="relative rounded-2xl bg-zinc-50 px-6 py-12 text-center sm:px-12">
                    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                        <span className="absolute left-8 top-8 h-14 w-14 rounded-2xl bg-orange-200" />
                        <span className="absolute bottom-8 left-16 h-10 w-24 rounded-full bg-sky-200" />
                        <span className="absolute right-10 top-10 h-16 w-12 rounded-xl bg-orange-100" />
                        <span className="absolute bottom-10 right-16 h-12 w-12 rounded-full bg-orange-200" />
                    </div>
                    <h2
                        id="mulai-title"
                        className="relative mx-auto max-w-xl text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl"
                    >
                        Siap bawa produk Anda ke{' '}
                        <em className="font-serif font-medium italic">level berikutnya</em>?
                    </h2>
                    <p className="relative mx-auto mt-3 max-w-lg text-base leading-relaxed text-zinc-700">
                        Ceritakan usaha Anda. Kami bantu petakan halaman yang paling cocok
                        sebelum Anda keluar biaya.
                    </p>
                    <a
                        href={waLink(
                            siteConfig.whatsappNumber,
                            'Halo, saya mau jadwalkan panggilan gratis tentang website.'
                        )}
                        className="relative mt-6 inline-flex min-h-[48px] items-center rounded-md bg-orange-700 px-6 text-sm font-semibold text-white hover:bg-orange-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-800"
                    >
                        Jadwalkan panggilan gratis
                    </a>
                </div>
            </div>
        </section>
    );
}
