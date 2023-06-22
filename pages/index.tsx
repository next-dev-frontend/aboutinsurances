import dynamic from 'next/dynamic'
const PageSeo = dynamic(() => import('../components/PageSeo'))
const SliderImages = dynamic(() => import('../components/SliderImages'))
const AboutInsurances = dynamic(() => import('../components/AboutInsurances'))

const structuredData =
{
  "@context": "http://schema.org",
  "@type": "Article",
  "name": "Stay on top of current information about the insurance market. Know well before investing in your insurance.",
  "author": {
    "@type": "Person",
    "name": "About Insurances."
  },
  "image": "https://aboutinsurances.vercel.app/_next/image?url=%2Fbackgrounds%2Fbg-insurances.webp&w=3840&q=75",
  "articleSection": "How to search and choose reliable insurance companies?",
  "articleBody": "General insurance covers a wide range of non-life insurance products, including car insurance, home insurance, travel insurance, and health insurance, among others. If you are looking for information and instructions related to general insurance, there are several resources available online. Here are some tips on how to find reliable and helpful information:<BR/><BR/><SPAN>Check the websites of reputable insurance companies: </SPAN>Many insurance companies have dedicated sections on their websites that provide information about their products, as well as general information about insurance. These sections may include FAQs, articles, and guides that can help you understand the different types of insurance and how they work.<BR/><BR/><SPAN>Visit government websites:</SPAN>Government websites, such as those of the Department of Financial Services or the National Association of Insurance Commissioners, can provide information about insurance regulations, consumer protection, and how to file a complaint or report fraud.<BR/><BR/><SPAN>Look for online forums and communities: </SPAN>There are many online communities where people discuss insurance-related topics and share their experiences. These forums can provide valuable insights and advice on choosing the right insurance policy and dealing with insurance claims.<BR/><BR/><SPAN>Consult with an insurance agent or broker: </SPAN>If you need personalized advice on insurance, you can contact an insurance agent or broker. They can help you assess your insurance needs, compare policies from different insurers, and provide guidance on how to file a claim.<BR/><BR/>When looking for information and instructions about general insurance, it is important to be cautious and verify the accuracy of the information you find. Make sure to check multiple sources and consult with a professional if you have any doubts or questions.",
  "url": "https://aboutinsurances.vercel.app/#home"
};




export default function Home() {
  return (
    <PageSeo
      title="Ask Your Questions About Insurance and Agencies"
      titleTemplate="%s | About Insurances"
      description="Insurance information and tips website. Before contracting any insurance service, visit our website and clarify all your doubts on the subject."
      path="/"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <main>
        <SliderImages />
        <AboutInsurances />
      </main>
    </PageSeo>
  )
}