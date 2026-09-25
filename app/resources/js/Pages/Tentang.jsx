import Layout from '../Components/Layout';
import Seo from '../Components/Seo';
import About from '../Components/About';
import WhyUs from '../Components/WhyUs';

export default function Tentang() {
    return (
        <Layout>
            <Seo
                title="Tentang Kami"
                description="Kenalan dengan pembuat website untuk bisnis ini: cara kerja transparan, harga jelas, dan garansi tertulis."
            />
            <About />
            <WhyUs limit={3} />
        </Layout>
    );
}
