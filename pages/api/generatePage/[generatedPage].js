import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { generatedPage } = req.query;
    const { title, title2, paragraph, articleContent } = req.body;

    const routeName = generatedPage; // The generated route name is now also used as the function name
    const words = title.trim().split(/\s+/);
    const sanitizedRouteName = words.slice(0, 4).join('').replace(/\W/g, '');

    const pageContent = `import dynamic from 'next/dynamic'
const PageSeo = dynamic(() => import('../../components/PageSeo'))

export default function ${routeName.charAt(0).toUpperCase() + sanitizedRouteName.slice(1)}() {
  return (
    <PageSeo
      title="${title}"
      titleTemplate="%s | ${title2}"
      description="${paragraph}"
      path="/articles/"
    >
      <main>
        <section id='convertText' className="container mx-auto pt-10 pb-10 w-full max-w-5xl">

          <div className="flex flex-nowrap items-center justify-left md:justify-center px-4 md:px-0 shadow-xl md:shadow-none py-8">
            <div className="w-auto pl-5">
              <h1 className="my-4 text-left lg:text-center text-4xl md:text-5xl lg:text-6xl text-[#142039] font-bold">
              ${title} ${title2}
              </h1>
            </div>
          </div>

          <div className="w-full mb-6">
            <div className="h-1 mx-8 my-0 py-0 bg-gray-400 bg-opacity-25" />
          </div>

          <div className="flex flex-wrap">
            <div className="w-full px-8 text-md md:text-xl lg:text-2xl">
              <div className="mx-auto align-middle">

              ${articleContent}
              
              </div>
            </div>
          </div>

        </section>
      </main>
    </PageSeo >
  )
}
    `;

    const pagesDir = path.join(process.cwd(), 'pages', 'articles');
    if (!fs.existsSync(pagesDir)) {
      fs.mkdirSync(pagesDir);
    }

    const filePath = path.join(pagesDir, `${routeName}.js`);
    fs.writeFileSync(filePath, pageContent);

    res.status(200).json({ message: 'Page generated successfully!' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}