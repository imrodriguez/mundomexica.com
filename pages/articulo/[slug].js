import { getPosts, getPost } from '../../services/Posts';
import { Container } from '../../components/Container';
import { ContentBox } from '../../components/ContentBox';
import { Image } from '../../components/Image';
import { SocialShareSection } from '../../components/SocialShareSection';
import { ArticleSeo } from '../../seo/article';
import { Content } from '../../components/Content';

export default function Article({ post }) {
  console.log(post)

  return (
    <>
      <ArticleSeo article={post} />
      <Container>
        <ContentBox>
          <Image image={post.fields.image} />
          <div>
            <h1>{post.fields.title}</h1>
            <SocialShareSection url={`https://mundomexica.com/articulo/${post.fields.url}`} text={post.metaDescription} />
            <Content content={post.fields.body}/>
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

export async function getStaticProps({ params, preview = false }) {
  const post = await getPost(params.slug, preview);

  return { props: { post: post.items[0] } };
}