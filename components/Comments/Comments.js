import Disqus from "disqus-react";
import { config } from './config';

const Comments = ({url, id, title}) => (
    <Disqus.DiscussionEmbed
        shortname={config.shortname}
        config={{
            url: url,
            identifier: id,
            title: title
        }}
    />
);

export { Comments };