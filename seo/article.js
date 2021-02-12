import generalData from '../config/generalData.json';
import { NextSeo, ArticleJsonLd } from 'next-seo';

const ArticleSeo = ({ article }) => (
    <>
        <ArticleJsonLd
            url={`https://mundomexica.com/articulo/${article.fields.url}/`}
            title={article.fields.title}
            images={[
                `https:${article.fields.image.fields.file.url}`
            ]}
            datePublished="2015-02-05T08:00:00+08:00"
            dateModified="2015-02-05T09:00:00+08:00"
            authorName={['Ariadna Rodriguez Marquez', 'Mundo Mexica']}
            publisherName="Ariadna Rodriguez Marquez"
            publisherLogo={`https:${generalData.logo.fields.file.url}`}
            description={article.fields.metaDescription}
        />
        <NextSeo
            title={`${article.fields.title} | ${generalData.name}`}
            description={article.fields.metaDescription}
            canonical={`https://mundomexica.com/articulo/${article.fields.url}/`}
            additionalMetaTags={[{
                name: 'keywords',
                content: article.fields.keywords
            }]}
            openGraph={{
                url: `https://mundomexica.com/${article.fields.url}/`,
                title: article.fields.title,
                description: article.fields.metaDescription,
                images: [
                    {
                        url: `https:${article.fields.image.fields.file.url}`,
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