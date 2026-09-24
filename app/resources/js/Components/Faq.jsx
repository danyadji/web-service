import { useState } from 'react';
import SectionHeading from './SectionHeading';

const faqs = [
    {
        q: 'Berapa lama pengerjaannya?',
        a: 'Mengikuti estimasi di tiap tier, mulai 1 minggu untuk Landing Basic sampai 8 minggu untuk Toko Custom. Jadwal pasti tertulis di penawaran sebelum DP.',
    },
    {
        q: 'Bagaimana pembayarannya?',
        a: 'DP tanda jadi via transfer bank atau QRIS setelah penawaran disetujui, pelunasan saat website tayang. Tanpa payment gateway di sisi kami, semua manual dan tercatat.',
    },
    {
        q: 'Apakah bisa revisi?',
        a: 'Bisa, sesuai jatah tier: Basic [1]x minor, Essential [2]x minor, Custom tambah [1]x major. Aturan lengkapnya ada di halaman Layanan.',
    },
    {
        q: 'Website lama bisa diperbaiki?',
        a: 'Bisa, lewat paket Custom. Kami audit dulu, lalu sarankan scope yang paling pas.',
    },
    {
        q: 'Harus ketemu langsung?',
        a: 'Tidak. Seluruh proses full remote via WhatsApp dan video call, briefing sampai serah terima. Bisa dari kota mana pun.',
    },
];

export default function Faq() {
    const [open, setOpen] = useState(0);

    return (
        <section aria-labelledby="faq-title" className="border-t border-zinc-200">
            <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
                <SectionHeading
                    align="center"
                    eyebrow="Sering ditanyakan"
                    titleId="faq-title"
                    title="Masih ragu? Wajar."
                />
                <div className="mt-8 divide-y divide-zinc-200 rounded-2xl border border-zinc-200 bg-white">
                    {faqs.map((f, i) => {
                        const isOpen = open === i;
                        return (
                            <div key={f.q}>
                                <h3>
                                    <button
                                        type="button"
                                        aria-expanded={isOpen}
                                        aria-controls={`faq-panel-${i}`}
                                        id={`faq-tab-${i}`}
                                        onClick={() => setOpen(isOpen ? -1 : i)}
                                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-zinc-950 hover:bg-zinc-50 focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-orange-800 sm:px-6"
                                    >
                                        {f.q}
                                        <span aria-hidden="true" className="text-lg font-normal text-orange-700">
                                            {isOpen ? '−' : '+'}
                                        </span>
                                    </button>
                                </h3>
                                {isOpen && (
                                    <div
                                        id={`faq-panel-${i}`}
                                        role="region"
                                        aria-labelledby={`faq-tab-${i}`}
                                        className="px-5 pb-5 sm:px-6"
                                    >
                                        <p className="text-sm leading-relaxed text-zinc-700">{f.a}</p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
