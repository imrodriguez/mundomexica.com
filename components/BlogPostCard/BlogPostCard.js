import { Card, CardImage, CardContent, Category } from "./styles";

const BlogPostCard = ({ title, image, category, url }) => (
  <Card className="blogPostCard">
    <a href={`/articulo/${url}`}>
      <picture>
        <source srcSet={`${image.fields.file.url}?w=311&fm=webp`} />
        <CardImage
          src={`${image.fields.file.url}?w=311`}
          alt="Contemplative Reptile"
          width={311}
          height={126}
        />
      </picture>
    </a>
    <CardContent>
      <Category><a href={`/categoria/${category.fields?.url}`}>{category.fields?.name}</a></Category>
      <a href={`/articulo/${url}`}><h2>{title}</h2></a>
    </CardContent>
  </Card>
);

export { BlogPostCard };
