export default function About() {
    return (
        <section id="tentang" aria-labelledby="tentang-title" className="scroll-mt-20 overflow-hidden">
            <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
                <div>
                    <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-600">
                        <span aria-hidden="true" className="inline-block h-px w-8 bg-brand-pine" />
                        Tentang
                    </p>
                    <h2
                        id="tentang-title"
                        className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-zinc-950 sm:text-5xl"
                    >
                        Teman bangun website untuk bisnis Anda
                    </h2>
                    <p className="mt-4 max-w-md border-l-2 border-brand-lime bg-brand-pinelight/40 py-1 pl-4 text-base leading-relaxed text-zinc-800">
                        Kami merancang dan membangun website untuk warung, bengkel, butik,
                        kedai, dan produsen lokal. Fokusnya satu: pengunjung paham usaha
                        Anda dan mudah menghubungi.
                    </p>
                </div>
                <div className="space-y-4 self-end text-sm leading-relaxed text-zinc-700 lg:pb-2">
                    <p>
                        Setiap project mulai dari percakapan singkat tentang produk, pembeli,
                        dan cara order yang paling nyaman. Dari situ kami susun halaman yang
                        rapi dan ringan dibuka dari HP.
                    </p>
                    <p>
                        Setelah tayang, Anda dapat panduan update konten dan masa tanya jawab.
                        Data angka dan testimoni akan kami tampilkan di sini setelah ada hasil
                        kerja yang bisa diverifikasi.
                    </p>
                </div>
            </div>
        </section>
    );
}
