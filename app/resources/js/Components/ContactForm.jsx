import { useEffect, useState } from 'react';
import { siteConfig, waLink } from '../data/site';

export default function ContactForm({ selectedService }) {
    const [state, setState] = useState('idle');
    const [values, setValues] = useState({ name: '', contact: '', message: '' });

    useEffect(() => {
        if (selectedService) {
            setValues((v) => ({
                ...v,
                message: v.message.includes(selectedService.name)
                    ? v.message
                    : `Saya tertarik paket ${selectedService.name}. ${v.message}`.trim(),
            }));
        }
    }, [selectedService]);

    function handleSubmit(e) {
        e.preventDefault();
        if (!values.name.trim() || !values.contact.trim() || !values.message.trim()) {
            setState('error');
            return;
        }
        // TODO: POST ke endpoint Laravel (validasi server + throttle), lalu buka wa.me
        const link = waLink(
            siteConfig.whatsappNumber,
            `Halo, saya ${values.name} (${values.contact}). ${values.message}`
        );
        setState('success');
        if (siteConfig.whatsappNumber) window.open(link, '_blank', 'noopener');
    }

    return (
        <form onSubmit={handleSubmit} className="mt-6 max-w-xl space-y-4">
            {selectedService && (
                <p className="rounded-md bg-orange-50 px-4 py-3 text-sm text-zinc-800">
                    Paket dipilih: <strong>{selectedService.name}</strong>. Lengkapi form untuk
                    lanjut konsultasi.
                </p>
            )}
            <div className="grid gap-4 sm:grid-cols-2">
                <div>
                    <label htmlFor="nama-depan" className="block text-sm font-medium text-zinc-950">
                        Nama depan
                    </label>
                    <input
                        id="nama-depan"
                        name="nama-depan"
                        type="text"
                        autoComplete="given-name"
                        required
                        value={values.name}
                        onChange={(e) => setValues({ ...values, name: e.target.value })}
                        placeholder="Nama Anda"
                        className="mt-1 block w-full rounded-md border border-zinc-300 px-3 py-3 text-sm text-zinc-950 placeholder:text-zinc-500 focus:border-orange-700 focus:outline-none"
                    />
                </div>
                <div>
                    <label htmlFor="kontak-field" className="block text-sm font-medium text-zinc-950">
                        Nomor WA atau email
                    </label>
                    <input
                        id="kontak-field"
                        name="kontak"
                        type="text"
                        autoComplete="tel"
                        required
                        value={values.contact}
                        onChange={(e) => setValues({ ...values, contact: e.target.value })}
                        placeholder="08xx atau email@example.com"
                        className="mt-1 block w-full rounded-md border border-zinc-300 px-3 py-3 text-sm text-zinc-950 placeholder:text-zinc-500 focus:border-orange-700 focus:outline-none"
                    />
                </div>
            </div>
            <div>
                <label htmlFor="pesan" className="block text-sm font-medium text-zinc-950">
                    Ceritakan kebutuhan
                </label>
                <textarea
                    id="pesan"
                    name="pesan"
                    rows={4}
                    required
                    value={values.message}
                    onChange={(e) => setValues({ ...values, message: e.target.value })}
                    placeholder="Jenis usaha, produk, dan website yang diinginkan"
                    className="mt-1 block w-full rounded-md border border-zinc-300 px-3 py-3 text-sm text-zinc-950 placeholder:text-zinc-500 focus:border-orange-700 focus:outline-none"
                />
            </div>

            {state === 'error' && (
                <p role="alert" className="text-sm font-medium text-red-700">
                    Lengkapi nama, kontak, dan kebutuhan dulu sebelum kirim.
                </p>
            )}
            {state === 'success' && (
                <p role="status" className="text-sm font-medium text-green-800">
                    Permintaan tercatat. Data akan tersimpan ke server setelah endpoint Laravel disambung.
                </p>
            )}

            <button
                type="submit"
                className="inline-flex min-h-[48px] items-center justify-center rounded-md bg-orange-700 px-6 text-sm font-semibold text-white hover:bg-orange-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-800"
            >
                Kirim permintaan konsultasi
            </button>
        </form>
    );
}
