import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { dtrOptions } from './contentConfig';

const Content = ({ content }) => (
    <div>
        {documentToReactComponents(content, dtrOptions)}
    </div>
);

export { Content };