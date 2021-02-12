import { BLOCKS } from '@contentful/rich-text-types';
import { ImageWrapper } from './styles';
import { BlogPostCard } from '../BlogPostCard';

const dtrOptions = {
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node) => (
            <ImageWrapper width={node.data?.target?.fields?.file?.details?.image.width}>
                <img src={node.data?.target?.fields?.file?.url}
                    alt={node.data?.target?.fields?.title}
                />
                <figcaption>{node.data?.target?.fields?.title}</figcaption>
            </ImageWrapper>
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
    renderText: text =>
        text.split('\n').map((t, i) =>
            i > 0 ? (
                <>
                    <br />
                    {t}
                </>
            ) : (
                    t
                ),
        ),
};
export { dtrOptions };