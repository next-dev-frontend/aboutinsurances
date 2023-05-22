import Contact from './Contact'

const Footer = () => {
  return (
    <section id="contato" className="select-none mx-auto border-[#142039] border-opacity-70 border-t-4">
      <footer className="select-none bg-gray-200 bg-center bg-cover bg-fixed bg-no-repeat w-screen">
        <Contact />

        <div className="container max-w-5xl mx-auto px-4 pt-6 pb-6 sm:px-6 lg:px-8 lg:pt-4">
          <div className="w-full pb-4">
            <div className="h-1 my-0 py-0 bg-[#142039] bg-opacity-30" />
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <p className="text-center text-xs lg:text-sm text-gray-700 md:text-left">
              ©2023 About Insurances. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Footer
