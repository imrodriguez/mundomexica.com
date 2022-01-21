import { NextSeo, ArticleJsonLd } from "next-seo";
import generalData from "../config/generalData.json";
import { articleURL } from "../config/routes";

const ArticleSeo = ({ article }) => (
  <>
    <ArticleJsonLd
      url={`${articleURL}/${article.fields.url}`}
      title={article.fields.title}
      images={[`https:${article.fields.image.fields.file.url}`]}
      datePublished={article.sys.createdAt}
      dateModified={article.sys.updatedAt}
      authorName={["Ariadna Rodriguez Marquez", "Mundo Mexica"]}
      publisherName="Ariadna Rodriguez Marquez"
      publisherLogo={`https:${generalData.logo.fields.file.url}`}
      description={article.fields.seo.fields.metaDescription}
    />
    <NextSeo
      title={article.fields.seo.fields.metaTitle}
      description={article.fields.seo.fields.metaDescription}
      canonical={`${articleURL}/${article.fields.url}`}
      additionalMetaTags={[
        {
          name: "keywords",
          content: article.fields.keywords,
        },
      ]}
      openGraph={{
        url: `${articleURL}/${article.fields.url}`,
        title: article.fields.title,
        description: article.fields.metaDescription,
        images: [
          {
            url: `https:${article.fields.image.fields.file.url}`,
            alt: article.fields.image.fields.title,
          },
        ],
        site_name: generalData.name,
        type: "website",
        locale: "es_ES",
      }}
      twitter={{
        handle: "@handle",
        site: "@site",
        cardType: "summary_large_image",
      }}
    />
  </>
);

export { ArticleSeo };
