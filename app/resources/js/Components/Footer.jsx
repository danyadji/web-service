import { siteConfig, services, waLink } from '../data/site';

export default function Footer() {
    return (
        <footer className="border-t border-zinc-200 bg-white">
            <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <nav aria-label="Layanan">
                        <h2 className="text-sm font-semibold text-zinc-950">Layanan</h2>
                        <ul className="mt-3 space-y-2.5">
                            {services
                                .filter((s) => !s.isCustom)
                                .map((s) => (
                                    <li key={s.slug}>
                                        <a
                                            href="/layanan"
                                            className="text-sm text-zinc-700 hover:text-zinc-950"
                                        >
                                            {s.name}
                                        </a>
                                    </li>
                                ))}
                            <li>
                                <a
                                    href="/kontak?paket=custom"
                                    className="text-sm text-zinc-700 hover:text-zinc-950"
                                >
                                    Custom
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <nav aria-label="Jelajahi">
                        <h2 className="text-sm font-semibold text-zinc-950">Jelajahi</h2>
                        <ul className="mt-3 space-y-2.5">
                            {siteConfig.nav.map((item) => (
                                <li key={item.href}>
                                    <a
                                        href={item.href}
                                        className="text-sm text-zinc-700 hover:text-zinc-950"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div>
                        <h2 className="text-sm font-semibold text-zinc-950">Hubungi kami</h2>
                        <ul className="mt-3 space-y-2.5 text-sm text-zinc-700">
                            <li>{siteConfig.email}</li>
                            <li>{siteConfig.phone}</li>
                            <li>Balasan maksimal 1 hari kerja.</li>
                        </ul>
                        <a
                            href={waLink(
                                siteConfig.whatsappNumber,
                                'Halo, saya mau konsultasi pembuatan website.'
                            )}
                            className="mt-4 inline-flex min-h-[44px] items-center rounded-md bg-orange-700 px-5 text-sm font-semibold text-white hover:bg-orange-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-800"
                        >
                            Konsultasi via WhatsApp
                        </a>
                    </div>
                </div>

                <div className="flex flex-col gap-2 border-t border-zinc-200 py-5 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
                    <p>© 2026 {siteConfig.brandName}. Seluruh hak cipta dilindungi.</p>
                    <p>Halaman kebijakan privasi dan syarat layanan segera hadir.</p>
                </div>
            </div>
        </footer>
    );
}
