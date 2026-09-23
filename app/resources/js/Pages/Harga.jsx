import Layout from '../Components/Layout';
import Pricing from '../Components/Pricing';
import ServiceAccordion from '../Components/ServiceAccordion';

export default function Harga() {
    return (
        <Layout>
            <Pricing />
            <ServiceAccordion />
            <div className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 sm:pb-16">
                <p className="max-w-2xl text-sm leading-relaxed text-zinc-600">
                    Butuh kombinasi khusus atau punya budget tertentu? Ceritakan lewat
                    halaman kontak, kami susun penawaran yang pas.
                </p>
                <a
                    href="/kontak"
                    className="mt-4 inline-flex min-h-[44px] items-center rounded-md border border-zinc-300 px-5 text-sm font-semibold text-zinc-950 hover:border-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
                >
                    Minta penawaran khusus
                </a>
            </div>
        </Layout>
    );
}
