const sitemap = require('nextjs-sitemap-generator');  
const DOMAIN = require('./config/routes');

sitemap({    
  baseUrl: DOMAIN,  
  ignoredPaths: ['next', 'index', '404'],  
  pagesDirectory: `${__dirname  }/.next/server/pages`,  
  targetDirectory : "public",
  extraPaths: ['/'],
  ignoredExtensions: [
        'png',
        'jpg',
        'css',
        'txt',
        'js',
        'json',
        'webp'
  ]
});