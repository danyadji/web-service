import { useEffect, useState } from 'react';

function xsrfToken() {
    const match = document.cookie.match(/(?:^|; )XSRF-TOKEN=([^;]*)/);
    return match ? decodeURIComponent(match[1]) : '';
}

export default function ContactForm({ selectedService, selectedTier = '' }) {
    const [state, setState] = useState('idle');
    const [error, setError] = useState('');
    const [waOpened, setWaOpened] = useState(false);
    const [values, setValues] = useState({ name: '', contact: '', message: '' });

    useEffect(() => {
        if (selectedService) {
            const interest = `Saya tertarik paket ${selectedService.name}${selectedTier ? ` tier ${selectedTier}` : ''}.`;
            setValues((v) =>
                v.message.includes(interest)
                    ? v
                    : { ...v, message: `${interest} ${v.message}`.trim() }
            );
        }
    }, [selectedService, selectedTier]);

    async function handleSubmit(e) {
        e.preventDefault();
        if (!values.name.trim() || !values.contact.trim() || !values.message.trim()) {
            setState('error');
            setError('Lengkapi nama, kontak, dan kebutuhan dulu sebelum kirim.');
            return;
        }
        setState('sending');
        setError('');

        try {
            const res = await fetch('/kontak', {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                    'X-XSRF-TOKEN': xsrfToken(),
                },
                body: JSON.stringify({
                    name: values.name.trim(),
                    contact: values.contact.trim(),
                    message: values.message.trim(),
                    service: selectedService?.slug || null,
                    tier: selectedTier || null,
                }),
            });

            if (res.status === 422) {
                const data = await res.json();
                const first = Object.values(data.errors || {})[0];
                setState('error');
                setError(Array.isArray(first) ? first[0] : 'Periksa kembali isian form.');
                return;
            }
            if (res.status === 429) {
                setState('error');
                setError('Terlalu sering mengirim. Tunggu sebentar lalu coba lagi.');
                return;
            }
            if (!res.ok) throw new Error('submit failed');

            const data = await res.json();
            setState('success');
            if (data.wa_url) {
                setWaOpened(true);
                window.open(data.wa_url, '_blank', 'noopener');
            }
        } catch {
            setState('error');
            setError('Gagal mengirim. Periksa koneksi lalu coba lagi.');
        }
    }

    return (
        <form onSubmit={handleSubmit} className="mt-6 max-w-xl space-y-4">
            {selectedService && (
                <p className="rounded-md bg-orange-50 px-4 py-3 text-sm text-zinc-800">
                    Paket dipilih: <strong>{selectedService.name}</strong>
                    {selectedTier && (
                        <>
                            {' '}tier <strong>{selectedTier}</strong>
                        </>
                    )}
                    . Lengkapi form untuk lanjut konsultasi.
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
                    {error}
                </p>
            )}
            {state === 'success' && (
                <p role="status" className="text-sm font-medium text-green-800">
                    {waOpened
                        ? 'Permintaan tersimpan. Lanjut ke WhatsApp untuk konsultasi langsung.'
                        : 'Permintaan tersimpan. Kami hubungi maksimal 1 hari kerja.'}
                </p>
            )}

            <button
                type="submit"
                disabled={state === 'sending'}
                className="inline-flex min-h-[48px] items-center justify-center rounded-md bg-orange-700 px-6 text-sm font-semibold text-white hover:bg-orange-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-800 disabled:opacity-60"
            >
                {state === 'sending' ? 'Mengirim...' : 'Kirim permintaan konsultasi'}
            </button>
        </form>
    );
}
