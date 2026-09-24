import { Head } from '@inertiajs/react';
import { siteConfig } from '../data/site';

export default function Seo({ title, description, image }) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={siteConfig.brandName} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {image && <meta property="og:image" content={image} />}
        </Head>
    );
}
