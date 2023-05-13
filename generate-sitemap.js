const sitemap = require('nextjs-sitemap-generator');

const targetDirectory = 'public';

sitemap({
  baseUrl: 'https://aboutinsurances.vercel.app',
  pagesDirectory: __dirname + '/pages',
  ignoreIndexFiles: true,
  targetDirectory: targetDirectory,
  nextConfigPath: __dirname + "/next.config.js",
  pagesConfig: {
    '/': {
      priority: '1',
      changefreq: 'daily',
    },
  },
  ignoredPaths: [
    'api',
    'fallback'
  ],
  sitemapStylesheet: [
    {
      type: "text/css",
      styleFile: "/globals.css"
    },

  ]
});

console.log(`Sitemap generated and available at /${targetDirectory}`);