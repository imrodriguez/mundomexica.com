import { getPostsByCategory } from '../../services/Posts';
import { getCategories, getCategory } from '../../services/Categories';
import { Container } from '../../components/Container';
import { Section } from '../../components/Section';
import { BlogPostPreview } from '../../components/BlogPostPreview';
import { Banner } from '../../components/Banner';
import { CategorySeo } from '../../seo/category';

export default function Article({ category, posts }) {
    return (
      <>
        <CategorySeo category={category} />
        <Banner image={category.fields.image} />
        <Container>
          <Section center>
            <h1>{category.fields.name}</h1>
            <p align='center'>{category.fields.description}</p>
          </Section>
          <BlogPostPreview posts={posts} />
        </Container>
      </>
    )
};

export async function getStaticPaths() {
    const categories = await getCategories();
    const paths = categories.items.map(item => ({ params: { slug: item.fields.url } }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const category = await getCategory(params.slug);
    const posts = await getPostsByCategory(category.items[0].sys.id);

    return { props: { category: category.items[0], posts: posts.items } };
}