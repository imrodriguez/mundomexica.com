import { client } from '../lib/Contentful';

const getCategories = () => client.getEntries({
        content_type: 'category'
    });

const getCategory = (slug) => client.getEntries({
        content_type: 'category',
        'fields.url': slug
    })

export {
    getCategories,
    getCategory
};