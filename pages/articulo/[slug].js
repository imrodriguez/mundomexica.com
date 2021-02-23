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
import Image from 'next/image';

export default function Article({ post, related }) {
  return (
    <>
      <ArticleSeo article={post} />
      <Container>
          <ContentBox>
            <Image 
            className="image-article"
            title={post.fields.image.fields.title} 
            src={`https:${post.fields.image.fields.file.url}?w=1140&fm=webp`} 
            alt={post.fields.image.fields.title}
            width="1140" 
            height="462.81"
            priority="true"
            quality="100"
            layout="responsive"/>
            <div className="content">
              <h1>{post.fields.title}</h1>
              <SocialShareSection url={`https://mundomexica.com/articulo/${post.fields.url}`} text={post.metaDescription} />
              <p className="time">Publicado el <time dateTime={post.sys.createdAt}>{new Intl.DateTimeFormat().format(new Date(post.sys.createdAt))}</time></p>
              <Content content={post.fields.body} />  
            </div>

            <div className="social">
              <div className="social-section">
                <p>Comparte este artículo en redes sociales</p>
                <SocialShareSection url={`https://mundomexica.com/articulo/${post.fields.url}`} text={post.metaDescription} />
              </div>
              <div className="social-section">
                <p>Síguenos en redes sociales</p>
                <SocialButtons />
              </div>
            </div>
          </ContentBox>
        
          {related.length > 0 && <h2>Artículos relacionados</h2>}
          <LazyLoad><BlogPostPreview posts={related} /></LazyLoad>
          <LazyLoad><Comments url={`https://mundomexica.com/articulo/${post.fields.url}`} id={post.fields.url} title={post.fields.title} /></LazyLoad>
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