import SectionHeading from './SectionHeading';

export default function About() {
    return (
        <section id="tentang" aria-labelledby="tentang-title" className="scroll-mt-20">
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
                <SectionHeading
                    eyebrow="Tentang"
                    titleId="tentang-title"
                    title="Teman bangun website untuk usaha kecil"
                    description="Kami merancang dan membangun website untuk warung, bengkel, butik, kedai, dan produsen lokal. Fokusnya satu: pengunjung paham usaha Anda dan mudah menghubungi."
                />
                <div className="mt-6 grid gap-6 text-sm leading-relaxed text-zinc-700 md:grid-cols-2">
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
