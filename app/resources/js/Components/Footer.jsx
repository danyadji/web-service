import { siteConfig } from '../data/site';

export default function Footer() {
    return (
        <footer className="border-t border-zinc-200 bg-white">
            <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
                <ul className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Tautan footer">
                    {siteConfig.nav.map((item) => (
                        <li key={item.href}>
                            <a href={item.href} className="text-sm text-zinc-700 hover:text-zinc-950">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <p aria-hidden="true" className="mt-6 select-none overflow-hidden font-serif text-[22vw] italic leading-none text-zinc-100 sm:text-[9rem]">
                    {siteConfig.brandName}
                </p>
                <div className="flex flex-col gap-2 border-t border-zinc-200 py-5 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
                    <p>© 2026 {siteConfig.brandName}. Seluruh hak cipta dilindungi.</p>
                    <p>Halaman kebijakan privasi dan syarat layanan segera hadir.</p>
                </div>
            </div>
        </footer>
    );
}
