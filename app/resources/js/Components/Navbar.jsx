import { useState } from 'react';
import { siteConfig, waLink } from '../data/site';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const waHref = waLink(
        siteConfig.whatsappNumber,
        'Halo, saya mau konsultasi pembuatan website.'
    );

    return (
        <header className="sticky top-3 z-40 px-4 sm:px-6">
            <nav
                aria-label="Navigasi utama"
                className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 rounded-full border border-zinc-200/70 bg-white/95 py-2 pl-6 pr-2 shadow-sm backdrop-blur-sm"
            >
                <a
                    href="#atas"
                    className="font-serif text-xl italic text-zinc-950"
                    aria-label={`${siteConfig.brandName} ke atas halaman`}
                >
                    {siteConfig.brandName}
                </a>

                <ul className="hidden items-center gap-1 lg:flex">
                    {siteConfig.nav.map((item) => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                className="rounded-full px-4 py-2.5 text-sm font-medium text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-800"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-1">
                    <a
                        href={waHref}
                        className="hidden min-h-[44px] items-center rounded-full bg-zinc-950 px-5 text-sm font-semibold text-white hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 sm:inline-flex"
                    >
                        Konsultasi via WhatsApp
                    </a>
                    <button
                        type="button"
                        aria-expanded={open}
                        aria-controls="menu-mobile"
                        onClick={() => setOpen((v) => !v)}
                        className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full px-4 text-sm font-medium text-zinc-950 hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-800 lg:hidden"
                    >
                        {open ? 'Tutup' : 'Menu'}
                    </button>
                </div>
            </nav>

            {open && (
                <div
                    id="menu-mobile"
                    className="mx-auto mt-2 max-w-6xl rounded-3xl border border-zinc-200 bg-white p-3 shadow-lg lg:hidden"
                >
                    <ul className="space-y-1">
                        {siteConfig.nav.map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className="block rounded-2xl px-4 py-3 text-sm font-medium text-zinc-800 hover:bg-zinc-100"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                        <li className="pt-1 sm:hidden">
                            <a
                                href={waHref}
                                className="block rounded-2xl bg-zinc-950 px-4 py-3 text-center text-sm font-semibold text-white"
                            >
                                Konsultasi via WhatsApp
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}
