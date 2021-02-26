import { Title } from "../components/Title";
import { BlogPostPreview } from "../components/BlogPostPreview";
import { Container } from "../components/Container";
import { Section } from '../components/Section';
import { CategoriesSection } from '../components/CategoriesSection';
import { getPosts } from "../services/Posts";
import { getWebsiteConfig } from '../services/WebsiteConfig';
import { getCategories } from '../services/Categories';
import { DefaultSeo } from '../seo/default';
import LazyLoad from 'react-lazyload';

export default function Home({ posts, highlighted, website, categories }) {
  return (
    <>
      <DefaultSeo page="Inicio" />
      <Container maxWidth="lg">
        <Title title={website.fields.name} description={website.fields.description} />
        <BlogPostPreview highlighted={highlighted} posts={posts} limited />
        <LazyLoad>
          <Section center>
            <h2 className="pepito">Categorías</h2>
            <CategoriesSection categories={categories.items} />
          </Section>
        </LazyLoad>
      </Container>
    </>
  );
};

export async function getStaticProps() {
  let posts = await getPosts();
  const highlighted = posts.items[0];
  posts = posts.items.slice(0, 7);

  if (posts.length === 1) {
    posts = [];
  } else {
    posts.shift();
  }

  const website = await getWebsiteConfig();
  const categories = await getCategories();

  return { props: { posts, highlighted, website, categories } };
}