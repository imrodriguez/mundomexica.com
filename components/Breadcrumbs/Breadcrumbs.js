import { BreadcrumbJsonLd} from 'next-seo';
import styles from "./Breadcrumbs.module.css";
import { DOMAIN, articleURL, categoryURL } from "../../config/routes";

const Breadcrumbs = ({ post }) => (
  <div>
    <BreadcrumbJsonLd
      itemListElements={[
        {
          position: 1,
          name: 'Inicio',
          item: DOMAIN,
        },
        {
          position: 2,
          name: post.fields.category.fields.name,
          item: `${categoryURL}/${post.fields.category.fields.url}`,
        },
        {
          position: 3,
          name: post.fields.title,
          item: `${articleURL}/${post.fields.url}`,
        }
      ]}
    />
    <ul className={styles.Breadcrumbs}>
      <li><a href="/">Inicio</a></li>
      <li><a href={`/categoria/${post.fields.category.fields.url}`}>{post.fields.category.fields.name}</a></li>
      <li>{post.fields.title}</li>
    </ul>
  </div>
);

export { Breadcrumbs };