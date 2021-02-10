import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
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
        ),
    },
};

const Content = ({ content }) => (
    <div>
        {documentToReactComponents(content, dtrOptions)}
    </div>
);

export { Content };