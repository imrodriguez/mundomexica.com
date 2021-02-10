import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { getPost } from '../../services/Posts';
import { Container } from '../../components/Container';
import { ContentBox } from '../../components/ContentBox';
import { Image } from '../../components/Image';
import { SocialShareSection } from '../../components/SocialShareSection';
import { ArticleSeo } from '../../seo/article';

const dtrOptions = {
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node) => (
            <>
                <img
                    src={node.data?.target?.fields?.file?.url}
                    alt={node.data?.target?.fields?.title}
                />
                <figcaption>{node.data?.target?.fields?.title}</figcaption>
            </>
        ),
    },
};

export default function Article({ post }) {
    return (
        <>
            <ArticleSeo article={post} />
            <Container>
                <ContentBox>
                    <Image image={post.fields.image} />
                    <div>
                        <h1>{post.fields.title}</h1>
                        <SocialShareSection url={`https://mundomexica.com/articulo/${post.fields.url}`} text={post.metaDescription} />
                        {documentToReactComponents(post.fields.body, dtrOptions)}
                    </div>
                </ContentBox>
            </Container>
        </>
    )
};

export async function getServerSideProps({ params }) {
    const post = await getPost(params.slug, true);

    return { props: { post: post.items[0] } };
}