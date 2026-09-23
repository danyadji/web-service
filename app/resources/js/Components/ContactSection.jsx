import SectionHeading from './SectionHeading';
import ContactForm from './ContactForm';
import { siteConfig } from '../data/site';

export default function ContactSection({ selectedService }) {
    return (
        <section id="kontak" aria-labelledby="kontak-title" className="scroll-mt-20 border-t border-zinc-200">
            <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                    <SectionHeading
                        eyebrow="Kontak"
                        titleId="kontak-title"
                        title="Ceritakan usaha Anda, mari mulai dari sini"
                    />
                    <dl className="mt-6 space-y-3 text-sm">
                        <div>
                            <dt className="font-medium text-zinc-950">Email</dt>
                            <dd className="text-zinc-700">{siteConfig.email}</dd>
                        </div>
                        <div>
                            <dt className="font-medium text-zinc-950">Telepon / WA</dt>
                            <dd className="text-zinc-700">{siteConfig.phone}</dd>
                        </div>
                    </dl>
                    <p className="mt-4 text-sm leading-relaxed text-zinc-600">
                        Balasan maksimal 1 hari kerja. Data form tersimpan ke admin dan
                        diteruskan ke WhatsApp setelah endpoint server disambung.
                    </p>
                </div>
                <div>
                    <ContactForm selectedService={selectedService} />
                </div>
            </div>
        </section>
    );
}
