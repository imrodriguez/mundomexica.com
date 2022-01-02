import { client } from '../lib/Contentful';

const getPages = () => client.getEntries({
        content_type: 'page'
    });

const getPage = (slug) => client.getEntries({
        content_type: 'page',
        'fields.url': slug,
    });

export {
    getPages,
    getPage
};