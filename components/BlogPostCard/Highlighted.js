import {
  CardHighlighted,
  CardImageHighlighted,
  CardContentHighlighted,
  Category
} from "./styles";

const Highlighted = ({ title, image, description, category, url }) => (
  <CardHighlighted>
    <a href={`/articulo/${url}`}>
      <picture>
        <source srcSet={`${image.fields.file.url}?w=611&fm=webp`} />
        <CardImageHighlighted
        src={`${image.fields.file.url}?w=611`}
        alt="Contemplative Reptile"
        width={611}
        height={248}
      />
      </picture>
    </a>
    <CardContentHighlighted>
      <div>
        <Category><a href={`/categoria/${category.fields.url}`}>{category.fields.name}</a></Category>
        <a href={`/articulo/${url}`}><h2>{title}</h2></a>
        <p>{description}</p>
      </div>
    </CardContentHighlighted>
  </CardHighlighted>
);

export { Highlighted };
