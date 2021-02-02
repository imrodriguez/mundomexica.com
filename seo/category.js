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