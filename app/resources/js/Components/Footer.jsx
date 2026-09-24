import { siteConfig, services } from '../data/site';

export default function Footer() {
    return (
        <footer className="bg-brand-pine">
            <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <nav aria-label="Layanan">
                        <h2 className="text-sm font-semibold text-white">Layanan</h2>
                        <ul className="mt-3 space-y-2.5">
                            {services
                                .filter((s) => !s.isCustom)
                                .map((s) => (
                                    <li key={s.slug}>
                                        <a
                                            href="/layanan"
                                            className="text-sm text-zinc-400 hover:text-white"
                                        >
                                            {s.name}
                                        </a>
                                    </li>
                                ))}
                            <li>
                                <a
                                    href="/kontak?paket=custom"
                                    className="text-sm text-zinc-400 hover:text-white"
                                >
                                    Custom
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <nav aria-label="Jelajahi">
                        <h2 className="text-sm font-semibold text-white">Jelajahi</h2>
                        <ul className="mt-3 space-y-2.5">
                            {siteConfig.nav.map((item) => (
                                <li key={item.href}>
                                    <a
                                        href={item.href}
                                        className="text-sm text-zinc-400 hover:text-white"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div>
                        <h2 className="text-sm font-semibold text-white">Hubungi kami</h2>
                        <ul className="mt-3 space-y-2.5 text-sm text-zinc-400">
                            <li>{siteConfig.email}</li>
                            <li>{siteConfig.phone}</li>
                            <li>Balasan maksimal 1 hari kerja.</li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col gap-2 border-t border-zinc-800 py-5 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
                    <p>© 2026 {siteConfig.brandName}. Seluruh hak cipta dilindungi.</p>
                    <p>Halaman kebijakan privasi dan syarat layanan segera hadir.</p>
                </div>
            </div>
        </footer>
    );
}
