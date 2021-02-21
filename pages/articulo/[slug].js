import { getPosts, getPost, getPostsByCategory } from '../../services/Posts';
import { Container } from '../../components/Container';
import { ContentBox } from '../../components/ContentBox';
import { SocialShareSection } from '../../components/SocialShareSection';
import { ArticleSeo } from '../../seo/article';
import { Content } from '../../components/Content';
import { BlogPostPreview } from '../../components/BlogPostPreview';
import { Comments } from '../../components/Comments';
import { SocialButtons } from '../../components/SocialButtons';
import LazyLoad from 'react-lazyload';

export default function Article({ post, related }) {
  return (
    <>
      <ArticleSeo article={post} />
      <Container>
        <LazyLoad>
          <ContentBox>
            <picture>
              <source srcSet={`${post.fields.image.fields.file.url}?w=835&fm=webp&q=50`} />
              <img title={post.fields.image.fields.title} src={`${post.fields.image.fields.file.url}?w=835&fm=webp&q=50`} alt={post.fields.image.fields.title} width={835} height={133} />
            </picture>
            <div>
              <h1>{post.fields.title}</h1>
              <SocialShareSection url={`https://mundomexica.com/articulo/${post.fields.url}`} text={post.metaDescription} />
              <p className="time">Publicado el <time dateTime={post.sys.createdAt}>{new Intl.DateTimeFormat().format(new Date(post.sys.createdAt))}</time></p>
              <Content content={post.fields.body} />
            </div>

            <div className="social">
              <div className="social-section">
                <p>Comparte este articulo en redes sociales</p>
                <SocialShareSection url={`https://mundomexica.com/articulo/${post.fields.url}`} text={post.metaDescription} />
              </div>
              <div className="social-section">
                <p>Siguenos en redes sociales</p>
                <SocialButtons />
              </div>
            </div>
          </ContentBox>
        </LazyLoad>
        <LazyLoad>


          {related.length > 0 && <h2>Artículos relacionados</h2>}
          <BlogPostPreview posts={related} />
          <Comments url={`https://mundomexica.com/articulo/${post.fields.url}`} id={post.fields.url} title={post.fields.title} />
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