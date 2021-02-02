import { getPosts, getPost } from '../../services/Posts';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Container } from '../../components/Container';
import { ContentBox } from '../../components/ContentBox';
import { Image } from '../../components/Image';
import { SocialShareSection } from '../../components/SocialShareSection';
import { ArticleSeo } from '../../seo/article';

export default function Article({ post }) {
    return (
        <>
            <ArticleSeo article={post}/>
            <Container>
                <ContentBox>
                    <Image image={post.fields.image} />
                    <div>
                        <h1>{post.fields.title}</h1>
                        <SocialShareSection url={`https://mundomexica.com/articulo/${post.fields.url}`} text={post.metaDescription}/>
                        {documentToReactComponents(post.fields.body)}
                    </div>
                </ContentBox>
            </Container>
        </>
    )
};

export async function getStaticPaths() {
    const posts = await getPosts();
    const paths = posts.items.map(item => ({ params: { slug: item.fields.url } }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const post = await getPost(params.slug);

    return { props: { post: post.items[0] } };
}