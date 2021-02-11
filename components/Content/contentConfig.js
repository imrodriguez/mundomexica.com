import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { ImageWrapper } from './styles';

const dtrOptions = {
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node) => (
            <ImageWrapper width={node.data?.target?.fields?.file?.details?.image.width}>
                <img src={node.data?.target?.fields?.file?.url}
                    alt={node.data?.target?.fields?.title}
                />
                <figcaption>{node.data?.target?.fields?.title}</figcaption>
            </ImageWrapper>
        )
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