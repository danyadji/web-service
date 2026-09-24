import Layout from '../Components/Layout';
import Seo from '../Components/Seo';
import Portfolio from '../Components/Portfolio';

export default function Portofolio({ portfolios = [] }) {
    return (
        <Layout>
            <Seo
                title="Portofolio"
                description="Hasil website yang sudah tayang: landing page, profil usaha, dan toko online beserta teknologinya."
            />
            <Portfolio items={portfolios} filterable />
        </Layout>
    );
}
