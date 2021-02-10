import { BlogPostPreview } from "../components/BlogPostPreview";
import { Container } from "../components/Container";
import { Section } from '../components/Section';
import { getPosts } from "../services/Posts";
import { DefaultSeo } from '../seo/default';

export default function Articulos({ posts }) {
  return (
    <>
      <DefaultSeo page="Articulos"/>
      <Section center>
        <Container maxWidth="lg">
          <h1>Articulos</h1>
          <BlogPostPreview posts={posts} />
        </Container>
      </Section>
    </>
  );
};

export async function getStaticProps() {
  const posts = await getPosts();

  return { props: { posts: posts.items } };
}