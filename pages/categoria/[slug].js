import { getPostsByCategory } from '../../services/Posts';
import { getCategories, getCategory } from '../../services/Categories';
import { Container } from '../../components/Container';
import { Section } from '../../components/Section';
import { BlogPostPreview } from '../../components/BlogPostPreview';
import { CategorySeo } from '../../seo/category';

export default function Article({ category, posts }) {
    return (
        <>
            <CategorySeo />
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
    let category = await getCategory(params.slug);
    category = category.items[0];
    const posts = await getPostsByCategory(category.sys.id);

    return { props: { category, posts: posts.items } };
}