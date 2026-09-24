import { siteConfig, waLink } from '../data/site';

export default function WhatsAppFloat() {
    if (!siteConfig.whatsappNumber) return null;

    return (
        <a
            href={waLink(siteConfig.whatsappNumber, 'Halo, saya mau tanya paket website.')}
            aria-label="Chat WhatsApp"
            className="fixed bottom-5 right-5 inline-flex min-h-[48px] min-w-[48px] items-center justify-center rounded-full bg-brand-lime px-4 text-sm font-semibold text-brand-pine shadow-lg hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-lime"
        >
            Chat WA
        </a>
    );
}
