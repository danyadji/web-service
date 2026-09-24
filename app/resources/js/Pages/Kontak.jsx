import { usePage } from '@inertiajs/react';
import Layout from '../Components/Layout';
import Seo from '../Components/Seo';
import ContactSection from '../Components/ContactSection';
import { services } from '../data/site';

export default function Kontak() {
    const { url } = usePage();
    const query = new URLSearchParams(url.split('?')[1] || '');
    const selected = services.find((s) => s.slug === query.get('paket')) || null;
    const tier = query.get('tier') || '';

    return (
        <Layout>
            <Seo
                title="Kontak"
                description="Ceritakan kebutuhan websitemu. Balasan maksimal 1 hari kerja, lanjut konsultasi via WhatsApp."
            />
            <ContactSection selectedService={selected} selectedTier={tier} />
        </Layout>
    );
}
