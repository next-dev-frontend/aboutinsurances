const sitemap = require('nextjs-sitemap-generator')
const chalk = require('chalk')

const targetDirectory = 'public'

sitemap({
  baseUrl: 'https://aboutinsurances.vercel.app',
  pagesDirectory: __dirname + '\\pages',
  ignoreIndexFiles: true,
  targetDirectory: targetDirectory,
  nextConfigPath: __dirname + '\\next.config.js',
  pagesConfig: {
    '/pages': {
      priority: '1',
      changefreq: 'daily'
    }
  },
  ignoredPaths: ['api', 'fallback'],
  sitemapStylesheet: [
    {
      type: 'text/css',
      styleFile: '/test/styles.css'
    },
    {
      type: 'text/xsl',
      styleFile: 'test/test/styles.xls'
    }
  ]
})

console.log(
  chalk.green(`Sitemap generated and available at /${targetDirectory}`)
)
