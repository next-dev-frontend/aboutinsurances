import { useState, useEffect } from 'react';
import { ArticleJsonLd, NextSeo } from 'next-seo';

function PageSeo({ title, titleTemplate, description, path, children }) {
  const url = `https://aboutinsurances.vercel.app${path}`;
  const imageUrl = 'https:/aboutinsurances.vercel.app/backgrounds/bg-insurances.jpeg';

  // State to hold the last build date
  const [lastBuildDate, setLastBuildDate] = useState(null);

  useEffect(() => {
    fetch('/api/getLastBuildDate') // Replace this with the endpoint to fetch the last build date from your backend or server
      .then((response) => response.json())
      .then((data) => {
        const lastBuildDate = new Date(data.lastBuildDate); // Assuming the API returns the last build date as a string in ISO format
        setLastBuildDate(lastBuildDate);
      })
      .catch((error) => {
        console.error('Error fetching last build date:', error);
      });
  }, []);

  return (
    <div>
      <NextSeo
        title={title}
        description={description}
        titleTemplate={titleTemplate}
        canonical={url}

        additionalMetaTags={[
          {
            property: 'dc:creator',
            content: 'Lopes Matheus S.'
          },
          {
            name: 'application-name',
            content: 'About Insurances Web Site'
          },
          {
            httpEquiv: 'x-ua-compatible',
            content: 'IE=edge; chrome=1'
          }
        ]}

        openGraph={{
          type: 'article',
          article: {
            publishedTime: lastBuildDate?.toISOString() || '2023-06-21T23:04:13Z',
            modifiedTime: lastBuildDate?.toISOString() || '2023-01-21T18:04:43Z',
            tags: ['insurance', 'tips', 'coverage'],
          },
          url: url,
          site_name: 'Website About Insurances',
          title: title,
          description: description,
          images: [
            {
              url: imageUrl,
              alt: 'template about insurances',
              width: 380,
              height: 380,
              type: 'image/jpeg',
            },
          ],
        }}
      />

      <ArticleJsonLd
        url={url}
        title={title}
        images={[
          'https:/aboutinsurances.vercel.app/backgrounds/bg-insurances.jpeg',
          'https:/aboutinsurances.vercel.app/cards/post-card1.webp',
          'https:/aboutinsurances.vercel.app/cards/post-card2.webp',
          'https:/aboutinsurances.vercel.app/cards/post-card3.webp',
          'https:/aboutinsurances.vercel.app/cards/post-card4.webp',
        ]}
        datePublished={lastBuildDate?.toISOString() || "2023-06-21T23:04:13Z"}
        dateModified={lastBuildDate?.toISOString() || "2023-01-21T18:04:43Z"}
        authorName="Lopes Matheus S."
        publisherName="Website About Insurances"
        publisherLogo="https://aboutinsurances.vercel.app/logos/logo-72x72.png"
        description={description}
      />

      {children}
    </div>
  )
}
export default PageSeo;