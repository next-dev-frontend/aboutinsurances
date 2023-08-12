import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { generatedPage } = req.query;
    const { title, title2, paragraph, articleContent } = req.body;

    const routeName = generatedPage;
    const words = title.trim().split(/\s+/);
    const sanitizedRouteName = words.slice(0, 4).join('').replace(/\W/g, '');

    const currentDate = new Date().toISOString();
    const formattedDate = new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });

    const images = [
      "/backgrounds/bg1-insurances.webp",
      "/backgrounds/bg2-insurances.webp",
      "/backgrounds/bg3-insurances.webp",
      "/backgrounds/bg4-insurances.webp",
      "/backgrounds/bg6-insurances.webp",
      "/backgrounds/bg7-insurances.webp",
      "/backgrounds/bg8-insurances.webp",
      "/backgrounds/bg9-insurances.webp",
      "/backgrounds/bg10-insurances.webp",
      "/backgrounds/bg11-insurances.webp",
      "/backgrounds/bg12-insurances.webp",
      "/backgrounds/bg13-insurances.webp",
      "/backgrounds/bg14-insurances.webp",
      "/backgrounds/bg15-insurances.webp",
      "/backgrounds/bg16-insurances.webp",
      "/backgrounds/bg17-insurances.webp",
      "/backgrounds/bg18-insurances.webp",
      "/backgrounds/bg19-insurances.webp",
      "/backgrounds/bg20-insurances.webp",
      "/backgrounds/bg21-insurances.webp",
      "/backgrounds/bg22-insurances.webp",
      "/backgrounds/bg23-insurances.webp",
      "/backgrounds/bg24-insurances.webp",
      "/backgrounds/bg25-insurances.webp",
      "/backgrounds/bg26-insurances.webp",
      "/backgrounds/bg27-insurances.webp",
      "/backgrounds/bg28-insurances.webp",
      "/backgrounds/bg29-insurances.webp",
      "/backgrounds/bg30-insurances.webp",
      "/backgrounds/bg31-insurances.webp",
      "/backgrounds/bg32-insurances.webp",
      "/backgrounds/bg33-insurances.webp",
      "/backgrounds/bg34-insurances.webp",
      "/backgrounds/bg35-insurances.webp",
      "/backgrounds/bg36-insurances.webp",
      "/backgrounds/bg37-insurances.webp",
      "/backgrounds/bg38-insurances.webp"
    ];

    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImagePath = images[randomIndex];

    const pageContent = `import dynamic from 'next/dynamic'
const PageSeo = dynamic(() => import('../../components/PageSeo'))

${routeName.charAt(0).toUpperCase() + sanitizedRouteName.slice(1)}.title = "${title} ${title2}";

export default function ${routeName.charAt(0).toUpperCase() + sanitizedRouteName.slice(1)}() {
  return (
    <PageSeo
      title="${title}"
      titleTemplate="%s | ${title2}"
      description="${paragraph}"
      path="/articles/"
      publishedTime="${currentDate}"
      modifiedTime="${currentDate}"
    >
      <main>
        <section id='convertText' className="select-none container mx-auto w-full max-w-5xl">
          <div className="flex flex-nowrap items-center h-96 justify-center px-4 md:px-0 py-8 shadow-xl md:shadow-none bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('${randomImagePath}')" }}>
            <div className="w-full md:w-2/3 p-4 bg-color1 bg-opacity-70 rounded">
              <h1 className="my-4 text-center text-4xl md:text-5xl lg:text-6xl text-white font-bold underline decoration-color2">
              ${title} ${title2}
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap pt-16">
            <div className="w-full px-8 text-md md:text-xl lg:text-2xl">
              <div className="mx-auto align-middle">

              ${articleContent}
              
              </div>
            </div>
          </div>

          <div className="container mx-auto py-8 px-8 w-full max-w-5xl">
          <div className="flex flex-nowrap items-center justify-end px-2 py-2">
            <p className="font-bold text-sm md:text-lg text-white bg-color1 px-2 rounded border-2 border-color2">
              Posted by: About Insurances
            </p>
          </div>
          <div className="flex flex-nowrap items-center justify-end px-2">
            <p className="font-bold text-sm md:text-lg text-white bg-color1 px-2 rounded border-2 border-color2">
              last update: ${formattedDate}
            </p>
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

