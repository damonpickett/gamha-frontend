const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { resolve } = require('path');

const sitemap = new SitemapStream({ hostname: 'https://www.gamha.xyz' });

const writeStream = createWriteStream(resolve(__dirname, '../public/sitemap.xml'));

sitemap.pipe(writeStream);

// Add URLs
sitemap.write({ url: '/', changefreq: 'monthly', priority: 1.0 });
sitemap.write({ url: '/about', changefreq: 'monthly', priority: 0.8 });

// End sitemap stream
sitemap.end();

streamToPromise(sitemap).then(() => console.log('Sitemap created successfully.'));