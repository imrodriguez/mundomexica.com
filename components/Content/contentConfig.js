import { BLOCKS } from "@contentful/rich-text-types";
import Image from "next/image";
import styles from "./Content.module.css";
import { BlogPostCard } from "../BlogPostCard";

const dtrOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => (
      <div
        className={styles.ImageWrapper}
        style={{
          width: node.data?.target?.fields?.file?.details?.image.height > 390 ? 500 : node.data?.target?.fields?.file?.details?.image.width
        }}
      >
        <Image
          layout="responsive"
          title={node.data?.target?.fields?.title}
          src={`https:${node.data?.target?.fields?.file?.url}?w=${node.data?.target?.fields?.file?.details?.image.width}`}
          alt={node.data?.target?.fields?.description}
          width={node.data?.target?.fields?.file?.details?.image.width}
          height={node.data?.target?.fields?.file?.details?.image.height}
        />
        <figcaption>{node.data?.target?.fields?.title}</figcaption>
      </div>
    ),
    [BLOCKS.EMBEDDED_ENTRY]: (node) => (
      <BlogPostCard
        title={node.data.target.fields.title}
        image={node.data.target.fields.image}
        category={node.data.target.fields.category}
        description={node.data.target.fields.description}
        url={node.data.target.fields.url}
      />
    ),
  },
  renderText: (text) =>
    text.split("\n").map((t, i) =>
      i > 0 ? (
        <>
          <br />
          {t}
        </>
      ) : (
        t
      )
    ),
};
export { dtrOptions };
