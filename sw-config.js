export const staticFileGlobs = [
  'static/**/*.{js,ts,tsx,html,css,webp,png,jpg,gif,svg,eot,ttf,woff}',
  'manifest.json'
]
export const runtimeCaching = [
  {
    urlPattern: /^https:\/\/aboutinsurances\.vercel\.app\/.*/,
    handler: 'staleWhileRevalidate'
  }
]
export const stripPrefix = 'static/'
