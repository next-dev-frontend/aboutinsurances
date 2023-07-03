import Link from "next/link"

const SideBar = () => {
  return (
    <section className="select-none h-max w-full max-w-5xl mx-auto flex-col justify-between bg-white">
      <div className="flex flex-nowrap items-center justify-left md:justify-center px-4 md:px-0 shadow-xl md:shadow-none pt-10">
        <div className="w-auto pl-5">
          <h2 className="my-4 text-left lg:text-center text-4xl md:text-5xl lg:text-6xl font-bold text-color1">
            Most Viewed and Searched Articles
          </h2>
        </div>
      </div>

      <div className="px-4 py-6">
        <nav aria-label="Main Nav" className="mt-6 flex flex-col space-y-1 items-center text-sm md:text-xl">

          <Link href="/articles/affordable-pet-insurance" passHref className="flex items-center gap-2 rounded-lg px-4 py-2 text-[#142039] hover:bg-gray-100 hover:text-[#ff6341] underline">
            Hiring a Business Insurance Professional: Your Ultimate Guide
          </Link>

          <Link href="/articles/affordable-pet-insurance" passHref className="flex items-center gap-2 rounded-lg px-4 py-2 text-[#142039] hover:bg-gray-100 hover:text-[#ff6341] underline">
            Hiring a Business Insurance Professional: Your Ultimate Guide
          </Link>

          <Link href="/articles/affordable-pet-insurance" passHref className="flex items-center gap-2 rounded-lg px-4 py-2 text-[#142039] hover:bg-gray-100 hover:text-[#ff6341] underline">
            Hiring a Business Insurance Professional: Your Ultimate Guide
          </Link>


        </nav>
      </div>
    </section>
  )
}
export default SideBar