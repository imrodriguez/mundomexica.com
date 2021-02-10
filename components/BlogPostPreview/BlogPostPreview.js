import { v4 as uuidv4 } from 'uuid';
import { Grid } from "../Grid";
import { BlogPostCard, Highlighted } from "../BlogPostCard";
import { Button } from "../Button";
import { Section } from "../Section";
import { ArticleItem } from '../../seo/articleItem';

const BlogPostPreview = ({ posts = [], highlighted, limited = false }) => (
  <>
    {highlighted && (
      <div key={uuidv4()}>
        <ArticleItem article={highlighted} />
        <Highlighted
          title={highlighted.fields.title}
          image={highlighted.fields.image}
          description={highlighted.fields.metaDescription}
          category={highlighted.fields.category}
          url={highlighted.fields.url}
        />
      </div>
    )}

    <Grid columns={3} maxWidth='900'>
      {posts.map((post) => (
        <div key={uuidv4()}>
          <ArticleItem article={post} />
          <BlogPostCard
            title={post.fields.title}
            image={post.fields.image}
            category={post.fields.category}
            description={post.fields.description}
            url={post.fields.url}
          />
        </div>
      ))}
    </Grid>

    {limited && (
      <Section center>
        <Button variant="large" action='/articulos'>Ver todas las entradas</Button>
      </Section>
    )}
  </>
);

export { BlogPostPreview };
