import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppFloat from './WhatsAppFloat';

export default function Layout({ children }) {
    return (
        <div id="atas" className="min-h-screen bg-white text-gray-900">
            <a
                href="#konten"
                className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:bg-gray-900 focus:px-4 focus:py-2 focus:text-white"
            >
                Lewati ke konten
            </a>
            <Navbar />
            <main id="konten">{children}</main>
            <Footer />
            <WhatsAppFloat />
        </div>
    );
}
