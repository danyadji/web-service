import Layout from '../Components/Layout';
import Portfolio from '../Components/Portfolio';

export default function Portofolio({ portfolios = [] }) {
    return (
        <Layout>
            <Portfolio items={portfolios} />
        </Layout>
    );
}
