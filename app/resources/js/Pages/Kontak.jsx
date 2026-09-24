import { usePage } from '@inertiajs/react';
import Layout from '../Components/Layout';
import ContactSection from '../Components/ContactSection';
import { services } from '../data/site';

export default function Kontak() {
    const { url } = usePage();
    const query = new URLSearchParams(url.split('?')[1] || '');
    const selected = services.find((s) => s.slug === query.get('paket')) || null;
    const tier = query.get('tier') || '';

    return (
        <Layout>
            <ContactSection selectedService={selected} selectedTier={tier} />
        </Layout>
    );
}
