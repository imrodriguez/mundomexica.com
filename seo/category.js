import generalData from '../config/generalData.json';
import { NextSeo } from 'next-seo';

const CategorySeo = ({ category }) => (
    <>
        <NextSeo
            title={`${category.fields.name} | ${generalData.name}`}
            description={category.fields.metaDescription}
            canonical={`https://mundomexica.com/categoria/${category.fields.url}/`}
            openGraph={{
                url: `https://mundomexica.com/categoria/${category.fields.url}/`,
                title: category.fields.name,
                description: category.fields.metaDescription,
                site_name: generalData.name,
                images: [
                    {
                        url: generalData.defautOpengraph.fields.file.url,
                        alt: generalData.defautOpengraph.fields.title,
                    },
                ],
            }}
            twitter={{
                handle: '@handle',
                site: '@site',
                cardType: 'summary_large_image',
            }}
        />
    </>
);

export { CategorySeo };