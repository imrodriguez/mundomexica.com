import { client } from '../lib/Contentful';

const getPosts = () => {
    return client.getEntries({
        content_type: 'blogPost'
    });
};

const getPost = (slug) => {
    return client.getEntries({
        content_type: 'blogPost',
        'fields.url': slug,
    });
};

const getPostsByCategory = (category) => {
    return client.getEntries({
        content_type: 'blogPost',
        'fields.category.sys.contentType.sys.id': 'category',
        'fields.category.sys.id': category
    });
};

export {
    getPosts,
    getPost,
    getPostsByCategory
};