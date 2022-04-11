import { NextSeo } from "next-seo";
import generalData from "../config/generalData.json";
import { categoryURL } from "../config/routes";

const PageSeo = ({ page }) => (
  <>
    <NextSeo
      title={page.fields.seo.fields.metaTitle}
      description={page.fields.seo.fields.metaDescription}
      keywords={page.fields.seo.fields.keywords}
      canonical={`${categoryURL}/${page.fields.url}`}
      openGraph={{
        url: `${categoryURL}/${page.fields.url}`,
        title: page.fields.title,
        description: page.fields.seo.fields.metaDescription,
        site_name: generalData.name,
        images: [
          {
            url: `https:${generalData.defautOpengraph.fields.file.url}`,
            alt: generalData.defautOpengraph.fields.title,
          },
        ],
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

export { PageSeo };
