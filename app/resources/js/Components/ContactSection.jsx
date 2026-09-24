import SectionHeading from './SectionHeading';
import ContactForm from './ContactForm';
import { siteConfig } from '../data/site';

export default function ContactSection({ selectedService, selectedTier = '' }) {
    return (
        <section id="kontak" aria-labelledby="kontak-title" className="scroll-mt-20">
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
                <SectionHeading
                    eyebrow="Kontak"
                    titleId="kontak-title"
                    title="Ceritakan usaha Anda, mari mulai dari sini"
                />
                <div className="mt-8 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
                    <div className="h-fit rounded-2xl bg-brand-pine p-6 sm:p-7">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-lime">
                            Langsung hubungi
                        </p>
                        <dl className="mt-4 space-y-4">
                            <div>
                                <dt className="text-sm font-medium text-zinc-400">Email</dt>
                                <dd className="mt-0.5 text-base font-semibold text-white">{siteConfig.email}</dd>
                            </div>
                            <div>
                                <dt className="text-sm font-medium text-zinc-400">Telepon / WA</dt>
                                <dd className="mt-0.5 text-base font-semibold text-white">{siteConfig.phone}</dd>
                            </div>
                        </dl>
                        <p className="mt-4 border-t border-white/15 pt-4 text-sm leading-relaxed text-zinc-300">
                            Balasan maksimal 1 hari kerja. Data form tersimpan ke admin dan
                            diteruskan ke WhatsApp setelah endpoint server disambung.
                        </p>
                    </div>
                    <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-7">
                        <ContactForm selectedService={selectedService} selectedTier={selectedTier} />
                    </div>
                </div>
            </div>
        </section>
    );
}
