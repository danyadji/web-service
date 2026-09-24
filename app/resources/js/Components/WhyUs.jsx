import SectionHeading from './SectionHeading';
import { whyUs } from '../data/site';

export default function WhyUs({ limit = whyUs.length }) {
    return (
        <section id="kenapa" aria-labelledby="kenapa-title" className="scroll-mt-20 border-t border-zinc-200 bg-zinc-50">
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
                <SectionHeading
                    align="center"
                    eyebrow="Kenapa pilih kami"
                    titleId="kenapa-title"
                    title="Cara kerja yang tenang untuk pemilik usaha"
                />
                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {whyUs.slice(0, limit).map((item) => (
                        <article
                            key={item.title}
                            className="rounded-xl border border-zinc-200 bg-white p-6 transition-shadow hover:shadow-md"
                        >
                            <span aria-hidden="true" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-brand-pinelight">
                                <span className="h-2 w-2 rounded-full bg-brand-pine" />
                            </span>
                            <h3 className="mt-4 text-base font-semibold text-zinc-950">{item.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-zinc-700">{item.text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

