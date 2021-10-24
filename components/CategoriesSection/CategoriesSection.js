import { v4 as uuidv4 } from "uuid";
import Image from 'next/image';
import styles from "./CategoriesSection.module.css";

const CategoriesSection = ({ categories }) => (
  <div className={styles.CategoriesWrapper}>
    {categories.map((cat) => (
      <div key={uuidv4()}>
        <a href={`/categoria/${cat.fields.url}`}>
          <div className={styles.Category}>
            <Image 
              src={`https:${cat.fields.image.fields.file.url}?fm=webp`} 
              alt={cat.fields.image.fields.title}
              title={cat.fields.image.fields.title}
              width="273"
              height="500"
              layout="responsive"
            />
            <p>{cat.fields.name}</p>
          </div>
        </a>
      </div>
    ))}
  </div>
);

export { CategoriesSection };
