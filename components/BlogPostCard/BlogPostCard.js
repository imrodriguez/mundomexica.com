import Image from "next/image";
import styles from "./BlogPostCard.module.css";

const BlogPostCard = ({ title,description, image, category, url, highlighted }) => (
  <div className={styles.Card} data-highlighted={highlighted}>
    <a href={`/articulo/${url}`}>
      <div className={styles.Image}>
        <Image
          src={`https:${image.fields.file.url}?w=${highlighted ? "611" : "311"}`}
          alt={title}
          width={highlighted ? "611" : "311"}
          height={highlighted ? "248" : "126"}
          quality="70"
          layout="responsive"
          priority={highlighted}
        />
      </div>
    </a>
    <div className={styles.Content}>
      <div className={styles.Category}>
        <a href={`/categoria/${category.fields?.url}`}>
          {category.fields?.name}
        </a>
      </div>
      <a href={`/articulo/${url}`}>
        <h2>{title}</h2>
      </a>
      {highlighted && <p>{description}</p>}
    </div>
  </div>
);

export { BlogPostCard };
