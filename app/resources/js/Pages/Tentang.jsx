import Layout from '../Components/Layout';
import About from '../Components/About';
import WhyUs from '../Components/WhyUs';

export default function Tentang() {
    return (
        <Layout>
            <About />
            <WhyUs limit={3} />
        </Layout>
    );
}
