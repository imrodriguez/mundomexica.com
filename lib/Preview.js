const previewClient = require('contentful').createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_PREVIEW_SECRET,
    host: 'preview.contentful.com'
});

export {
    previewClient
};
