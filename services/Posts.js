import { client } from '../lib/Contentful';
import { previewClient } from '../lib/Preview';

const getPosts = () => {
    return client.getEntries({
        content_type: 'blogPost'
    });
};

const getPost = (slug, preview) => {
    if (preview) {
        return previewClient.getEntries({
            content_type: 'blogPost',
            'fields.url': slug,
        });
    }

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