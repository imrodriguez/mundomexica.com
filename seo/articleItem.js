import { JsonLd } from "react-schemaorg";
import generalData from '../config/generalData.json';

const ArticleItem = ({ article }) => (
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
            "image": `https:${generalData.logo.fields.file.url}`,
            "publisher": {
                "@type": "Organization",
                "name": generalData.name,
                "logo": {
                    "@type": "ImageObject",
                    "url": `https:${generalData.logo.fields.file.url}`
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
);

export { ArticleItem };