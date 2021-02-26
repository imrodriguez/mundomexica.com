const sitemap = require('nextjs-sitemap-generator');  

sitemap({    
  baseUrl: 'https://mundomexica.com',  
  ignoredPaths: ['next', 'index', '404'],  
  pagesDirectory: __dirname + "/.next/server/pages",  
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