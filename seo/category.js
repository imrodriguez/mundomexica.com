import { NextSeo } from "next-seo";
import generalData from "../config/generalData.json";
import { categoryURL } from "../config/routes";

const CategorySeo = ({ category }) => (
  <>
    <NextSeo
      title={`${category.fields.name} | ${generalData.name}`}
      description={category.fields.metaDescription}
      canonical={`${categoryURL}/${category.fields.url}`}
      openGraph={{
        url: `${categoryURL}/${category.fields.url}`,
        title: category.fields.name,
        description: category.fields.metaDescription,
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

export { CategorySeo };
