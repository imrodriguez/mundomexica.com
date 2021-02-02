import {
  CardHighlighted,
  CardImageHighlighted,
  CardContentHighlighted,
  Category
} from "./styles";

const Highlighted = ({ title, image, description, category, url }) => (
  <CardHighlighted>
    <a href={`/articulo/${url}`}>
      <CardImageHighlighted
        src={image.fields.file.url}
        alt="Contemplative Reptile"
      />
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
