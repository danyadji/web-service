import Layout from '../Components/Layout';
import Hero from '../Components/Hero';
import ServicesList from '../Components/ServicesList';
import ServiceTierTabs from '../Components/ServiceTierTabs';
import HowItWorks from '../Components/HowItWorks';
import Portfolio from '../Components/Portfolio';
import Faq from '../Components/Faq';

function PageLink({ href, children }) {
    return (
        <div className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
            <a
                href={href}
                className="inline-flex min-h-[44px] items-center rounded-full border border-zinc-300 px-5 text-sm font-semibold text-zinc-950 hover:border-brand-pine hover:text-brand-pine focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-pine"
            >
                {children}
            </a>
        </div>
    );
}

export default function Home({ previewPortfolios = [], serviceTiers = [] }) {
    return (
        <Layout>
            <Hero />
            <ServicesList />
            <ServiceTierTabs items={serviceTiers} />
            <HowItWorks />
            <Portfolio items={previewPortfolios} />
            <PageLink href="/portofolio">Lihat semua portofolio</PageLink>
            <Faq />
        </Layout>
    );
}
