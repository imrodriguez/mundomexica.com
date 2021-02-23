import { getPost } from '../../services/Posts';
import { Container } from '../../components/Container';
import { SocialShareSection } from '../../components/SocialShareSection';
import { ArticleSeo } from '../../seo/article';
import { Content } from '../../components/Content';

export default function Article({ post }) {
    return (
        <>
            <ArticleSeo article={post} />
            <Container>
                <div>
                    <div>
                        <h1>{post.fields.title}</h1>
                        <SocialShareSection url={`https://mundomexica.com/articulo/${post.fields.url}`} text={post.metaDescription} />
                        <Content content={post.fields.body}/>
                    </div>
                </div>
            </Container>
        </>
    )
};

export async function getServerSideProps({ params }) {
    const post = await getPost(params.slug, true);

    return { props: { post: post.items[0] } };
}