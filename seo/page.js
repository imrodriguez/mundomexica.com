import generalData from '../config/generalData.json';
import { NextSeo } from 'next-seo';

const PageSeo = ({ page }) => (
    <>
        <NextSeo
            title={`${page.fields.title} | ${generalData.name}`}
            description={page.fields.metaDescription}
            canonical={`https://mundomexica.com/categoria/${page.fields.url}/`}
            openGraph={{
                url: `https://mundomexica.com/categoria/${page.fields.url}/`,
                title: page.fields.title,
                description: page.fields.metaDescription,
                site_name: generalData.name,
            }}
            twitter={{
                handle: '@handle',
                site: '@site',
                cardType: 'summary_large_image',
            }}
        />
    </>
);

export { PageSeo };