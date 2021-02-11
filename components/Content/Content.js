import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { dtrOptions } from './contentConfig';
import { Wrapper } from './styles';

const Content = ({ content }) => (
    <Wrapper>
        {documentToReactComponents(content, dtrOptions)}
    </Wrapper>
);

export { Content };