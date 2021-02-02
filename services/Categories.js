import { client } from '../lib/Contentful';

const getCategories = () => {
    return client.getEntries({
        content_type: 'category'
    });
};

const getCategory = (slug) => {
    return client.getEntries({
        content_type: 'category',
        'fields.url': slug
    });
}

export {
    getCategories,
    getCategory
};