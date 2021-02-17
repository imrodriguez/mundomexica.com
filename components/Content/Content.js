import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { dtrOptions } from './contentConfig';
import LazyLoad from 'react-lazyload';
import { Wrapper } from './styles';

const Content = ({ content }) => {
    return (
        <Wrapper>
            <LazyLoad>
                {documentToReactComponents(content, dtrOptions)}
            </LazyLoad>
        </Wrapper>
    )
}

export { Content };