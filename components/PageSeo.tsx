import { NextSeo } from 'next-seo';

function PageSeo({ title, titleTemplate, description, path, children }) {
  const url = `https://consultbio-jr.vercel.app/${path}`;
  return (
    <div>
      <NextSeo
        title={title}
        description={description}
        titleTemplate={titleTemplate}
        canonical={url}
        additionalMetaTags={[{
          property: 'dc:creator',
          content: 'Matheus S. Lopes'
        }, {
          name: 'application-name',
          content: 'Site da ConsultBio Jr.'
        }, {
          httpEquiv: 'x-ua-compatible',
          content: 'IE=edge; chrome=1'
        }]}
      />
      {children}
    </div>
  )
}
export default PageSeo;
