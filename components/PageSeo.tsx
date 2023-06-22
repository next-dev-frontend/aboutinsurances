import { NextSeo } from 'next-seo'
import image from 'next/legacy/image'

function PageSeo({ title, titleTemplate, description, path, children }) {
  const url = `https://aboutinsurances.vercel.app/${path}`
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
          type: 'website',
          url: url,
          site_name: 'Website About Insurances',
          title: title,
          description: description,
          images: image ? [
            {
              url: 'https:/aboutinsurances.vercel.app/backgrounds/bg-insurances.jpeg',
              alt: 'template about insurances',
              width: 380,
              height: 380,
              type: 'image/jpeg'
            }
          ] : [],
        }}
      />
      {children}
    </div>
  )
}
export default PageSeo
