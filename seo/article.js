import { JsonLd } from "react-schemaorg";
import generalData from '../config/generalData.json';
import { NextSeo } from 'next-seo';

const ArticleSeo = ({ article }) => (
    <>
        <JsonLd
            item={{
                "@context": "http://schema.org",
                "@type": "Article",
                "author": {
                    "@type": "Person",
                    "name": "Ariadna"
                },
                "name": article.fields.title,
                "headline": article.fields.title,
                "image": article.fields.image.fields.file.url,
                "publisher": {
                    "@type": "Organization",
                    "name": generalData.name,
                    "logo": {
                        "@type": "ImageObject",
                        "url": generalData.logo.fields.file.url
                    }
                },
                "description": "",
                "datePublished": article.fields.date,
                "dateModified": article.fields.date,
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": `https://mundomexica.com/${article.fields.url}/`
                }
            }}
        />

        <NextSeo
            title={`${article.fields.title} | ${generalData.name}`}
            description={article.fields.metaDescription}
            canonical={`https://mundomexica.com/${article.fields.url}/`}
            openGraph={{
                url: `https://mundomexica.com/${article.fields.url}/`,
                title: article.fields.title,
                description: article.fields.metaDescription,
                images: [
                    {
                        url: article.fields.image.fields.file.url,
                        alt: article.fields.image.fields.title,
                    },
                ],
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

export { ArticleSeo };