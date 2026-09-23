export default function ServiceCard({ service }) {
    return (
        <article className="flex flex-col rounded-xl border border-zinc-200 bg-white p-6 transition-shadow hover:shadow-md">
            <h3 className="text-lg font-semibold text-zinc-950">{service.name}</h3>
            {service.level && (
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-orange-800">
                    {service.level}
                </p>
            )}
            <p className="mt-1 text-sm text-zinc-600">{service.short}</p>
            <p className="mt-3 text-xl font-semibold text-zinc-950">
                {service.priceStart == null
                    ? 'Harga menyusul'
                    : `Mulai Rp ${Number(service.priceStart).toLocaleString('id-ID')}`}
            </p>
            <p className="mt-1 text-sm text-zinc-600">Estimasi: {service.duration}</p>
            <ul className="mt-4 flex-1 space-y-2">
                {service.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm leading-relaxed text-zinc-700">
                        <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-600" />
                        {f}
                    </li>
                ))}
            </ul>
            <a
                href={`/kontak?paket=${service.slug}`}
                className="mt-5 inline-flex min-h-[44px] items-center justify-center rounded-md bg-orange-700 px-4 text-sm font-semibold text-white hover:bg-orange-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-800"
            >
                Pilih paket {service.name}
            </a>
        </article>
    );
}
