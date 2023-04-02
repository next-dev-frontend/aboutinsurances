import { NextSeo } from 'next-seo'

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
      />
      {children}
    </div>
  )
}
export default PageSeo
