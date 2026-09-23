import Layout from '../Components/Layout';
import Hero from '../Components/Hero';
import ServicesList from '../Components/ServicesList';
import Pricing from '../Components/Pricing';
import HighlightBanner from '../Components/HighlightBanner';
import Portfolio from '../Components/Portfolio';
import PreFooterCTA from '../Components/PreFooterCTA';

function PageLink({ href, children }) {
    return (
        <div className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
            <a
                href={href}
                className="inline-flex min-h-[44px] items-center rounded-md border border-zinc-300 px-5 text-sm font-semibold text-zinc-950 hover:border-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
            >
                {children}
            </a>
        </div>
    );
}

export default function Home({ previewPortfolios = [] }) {
    return (
        <Layout>
            <Hero />
            <ServicesList />
            <Pricing />
            <HighlightBanner />
            <Portfolio items={previewPortfolios} />
            <PageLink href="/portofolio">Lihat semua portofolio</PageLink>
            <PreFooterCTA />
        </Layout>
    );
}
