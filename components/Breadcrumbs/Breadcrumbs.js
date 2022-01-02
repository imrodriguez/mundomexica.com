import { BreadcrumbJsonLd} from 'next-seo';
import styles from "./Breadcrumbs.module.css";

const Breadcrumbs = ({ post }) => (
  <div>
    <BreadcrumbJsonLd
      itemListElements={[
        {
          position: 1,
          name: 'Inicio',
          item: 'https://mundomexica.com',
        },
        {
          position: 2,
          name: post.fields.category.fields.name,
          item: `https://mundomexica.com/categoria/${post.fields.category.fields.url}`,
        },
        {
          position: 3,
          name: post.fields.title,
          item: `https://mundomexica.com/articulo/${post.fields.url}`,
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