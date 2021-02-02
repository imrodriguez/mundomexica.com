import { Card, CardImage, CardContent, Category } from "./styles";

const BlogPostCard = ({ title, image, description, category, url }) => (
  <Card>
    <a href={`/articulo/${url}`}>
      <CardImage
        src={image.fields.file.url}
        alt="Contemplative Reptile"
      />
    </a>
    <CardContent>
      <Category><a href={`/categoria/${category.fields?.url}`}>{category.fields?.name}</a></Category>
      <a href={`/articulo/${url}`}><h2>{title}</h2></a>
    </CardContent>
  </Card>
);

export { BlogPostCard };
