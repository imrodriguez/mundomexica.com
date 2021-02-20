import { getPosts, getPost, getPostsByCategory } from '../../services/Posts';
import { Container } from '../../components/Container';
import { ContentBox } from '../../components/ContentBox';
import { Image } from '../../components/Image';
import { SocialShareSection } from '../../components/SocialShareSection';
import { ArticleSeo } from '../../seo/article';
import { Content } from '../../components/Content';
import { BlogPostPreview } from '../../components/BlogPostPreview';
import LazyLoad from 'react-lazyload';

export default function Article({ post, related }) {
  return (
    <>
      <ArticleSeo article={post} />
      <Container>
        <LazyLoad>
        <ContentBox>
          <Image image={post.fields.image} />
          <div>
            <h1>{post.fields.title}</h1>
            <SocialShareSection url={`https://mundomexica.com/articulo/${post.fields.url}`} text={post.metaDescription} />
            <p className="time">Publicado el <time dateTime={post.sys.createdAt}>{new Intl.DateTimeFormat().format(new Date(post.sys.createdAt))}</time></p>
            <Content content={post.fields.body} />
          </div>
        </ContentBox>
        </LazyLoad>
        <LazyLoad>
          {related.length > 0 && <h2>Artículos relacionados</h2>}
          <BlogPostPreview posts={related} />
        </LazyLoad> 
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
  const related = await getPostsByCategory(post.items[0].fields.category.sys.id);
  const relatedPost = await related.items.filter(article => article.sys.id !== post.items[0].sys.id);

  return { props: { post: post.items[0], related: relatedPost } };
}