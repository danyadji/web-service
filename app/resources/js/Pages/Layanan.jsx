import Layout from '../Components/Layout';
import ServiceTierTabs from '../Components/ServiceTierTabs';
import PolicySection from '../Components/PolicySection';

export default function Layanan({ serviceTiers = [] }) {
    return (
        <Layout>
            <ServiceTierTabs items={serviceTiers} />
            <PolicySection />
            <div className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 sm:pb-16">
                <div className="flex flex-col gap-4 rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-6 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h2 className="text-base font-semibold text-zinc-950">
                            Butuh yang lain? Paket Custom
                        </h2>
                        <p className="mt-1 max-w-lg text-sm leading-relaxed text-zinc-600">
                            Integrasi khusus, multibahasa, atau alur yang tidak biasa.
                            Ceritakan kebutuhan, kami susun penawaran yang pas.
                        </p>
                    </div>
                    <a
                        href="/kontak?paket=custom"
                        className="inline-flex min-h-[44px] shrink-0 items-center justify-center rounded-md bg-zinc-950 px-5 text-sm font-semibold text-white hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
                    >
                        Diskusikan kebutuhan
                    </a>
                </div>
            </div>
        </Layout>
    );
}
