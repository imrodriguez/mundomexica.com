import { getPost } from "../../services/Posts";
import { Container } from "../../components/Container";
import { SocialShareSection } from "../../components/SocialShareSection";
import { ArticleSeo } from "../../seo/article";
import { Content } from "../../components/Content";
import { BlogPostPreview } from "../../components/BlogPostPreview";
import { Comments } from "../../components/Comments";
import { SocialButtons } from "../../components/SocialButtons";
import LazyLoad from "react-lazyload";
import Image from "next/image";
import styles from "../../styles/Article.module.css";

export default function Article({ post }) {
  return (
    <>
      <ArticleSeo article={post} />
      <Container>
        <div className={styles.ArticleBox}>
          <Image
            className={styles.ImageArticle}
            title={post.fields.image.fields.title}
            src={`https:${post.fields.image.fields.file.url}?w=1140&fm=webp`}
            alt={post.fields.image.fields.title}
            width="445"
            height="180"
            priority="true"
            layout="responsive"
          />

          <div className={styles.ArticleMainWrapper}>
            <h1>{post.fields.title}</h1>
            <SocialShareSection
              url={`https://mundomexica.com/articulo/${post.fields.url}`}
              text={post.metaDescription}
            />
            <p className={styles.Time}>
              Publicado el{" "}
              <time dateTime={post.sys.createdAt}>
                {new Intl.DateTimeFormat().format(new Date(post.sys.createdAt))}
              </time>
            </p>
            <Content content={post.fields.body} />
          </div>

          <div className={styles.SocialSection}>
            <div className={styles.SocialItem}>
              <p>Comparte este artículo en redes sociales</p>
              <SocialShareSection
                url={`https://mundomexica.com/articulo/${post.fields.url}`}
                text={post.metaDescription}
              />
            </div>
            <div className={styles.SocialItem}>
              <p>Síguenos en redes sociales</p>
              <SocialButtons />
            </div>
          </div>
        </div>

        {related.length > 0 && <h2>Artículos relacionados</h2>}
        <LazyLoad>
          <BlogPostPreview posts={related} />
        </LazyLoad>
        <LazyLoad>
          <Comments
            url={`https://mundomexica.com/articulo/${post.fields.url}`}
            id={post.fields.url}
            title={post.fields.title}
          />
        </LazyLoad>
      </Container>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const post = await getPost(params.slug, true);

  return { props: { post: post.items[0] } };
}
