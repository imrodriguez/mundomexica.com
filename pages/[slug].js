import { getPages, getPage } from '../services/Pages';
import { getPostsByCategory } from '../services/Posts';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { BlogPostPreview } from '../components/BlogPostPreview';
import { Content } from '../components/Content';
import { PageSeo } from '../seo/page';

export default function Page({ page, posts }) {
    return (
      <>
        <PageSeo page={page} />
        <Container>
          <Section center>
            <h1>{page.fields.title}</h1>
            <Content content={page.fields.body} />
          </Section>
          {posts && <BlogPostPreview posts={posts.items} />}
        </Container>
      </>
    )
};

export async function getStaticPaths() {
    const pages = await getPages();
    const paths = pages.items.map(item => ({ params: { slug: item.fields.url } }));

    return { paths, fallback: false };
};

export async function getStaticProps({ params }) {
    const page = await getPage(params.slug);

    let posts = null;
    if (page.items[0].fields.category) {
        posts = await getPostsByCategory(page.items[0].fields.category.sys.id);
    }

    return { props: { page: page.items[0], posts } };
};