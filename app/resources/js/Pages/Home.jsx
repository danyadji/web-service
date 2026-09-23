import { useState } from 'react';
import Layout from '../Components/Layout';
import Hero from '../Components/Hero';
import About from '../Components/About';
import HighlightBanner from '../Components/HighlightBanner';
import ServiceAccordion from '../Components/ServiceAccordion';
import Pricing from '../Components/Pricing';
import WhyUs from '../Components/WhyUs';
import Portfolio from '../Components/Portfolio';
import PreFooterCTA from '../Components/PreFooterCTA';
import ContactSection from '../Components/ContactSection';

export default function Home() {
    const [selectedService, setSelectedService] = useState(null);

    return (
        <Layout>
            <Hero />
            <About />
            <HighlightBanner />
            <ServiceAccordion />
            <Pricing onChoose={setSelectedService} />
            <WhyUs />
            <Portfolio />
            <PreFooterCTA />
            <ContactSection selectedService={selectedService} />
        </Layout>
    );
}
