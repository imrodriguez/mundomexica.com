import { client } from '../lib/Contentful';

const getPages = () => {
    return client.getEntries({
        content_type: 'page'
    });
};

const getPage = (slug) => {
    return client.getEntries({
        content_type: 'page',
        'fields.url': slug,
    });
};

export {
    getPages,
    getPage
};