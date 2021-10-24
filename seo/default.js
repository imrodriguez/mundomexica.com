import { NextSeo } from 'next-seo';
import generalData from '../config/generalData.json';

const DefaultSeo = ({ page, url }) => (
  <NextSeo
    title={`${page} | ${generalData.name}`}
    description={generalData.description}
    canonical={`https://mundomexica.com${url}`}
    openGraph={{
            url: `${page} | ${generalData.name}`,
            title: generalData.name,
            description: generalData.description,
            images: [
                {
                    url: `https:${generalData.defautOpengraph.fields.file.url}`,
                    alt: generalData.defautOpengraph.fields.title,
                },
            ],
            site_name: generalData.name,
            type: 'website',
            locale: 'es_ES'
        }}
    twitter={{
            handle: '@handle',
            site: '@site',
            cardType: 'summary_large_image',
        }}
  />
);

export { DefaultSeo };