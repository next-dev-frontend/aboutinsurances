const SideBar = () => {
  return (
    <div className="select-none flex h-max w-full max-w-5xl container mx-auto flex-col justify-between border-r bg-white">

      <div className='flex flex-nowrap items-center justify-left md:justify-center px-4 md:px-0 shadow-xl md:shadow-none pt-10'>
        <div className='w-auto pl-5'>
          <p className="my-4 text-left lg:text-center text-3xl md:text-4xl lg:text-5xl font-bold text-dark-green">
            Frequently Asked Questions About Insurance
          </p>
        </div>
      </div>

      <div className="px-4 py-6">
        <nav aria-label="Main Nav" className="mt-6 flex flex-col space-y-1 items-center">

          <a href="#" className="flex items-center gap-2 rounded-lg px-4 py-2 text-color1 hover:bg-gray-100 hover:text-color2">
            <span className="text-md md:text-lg lg:text-xl font-medium underline"> Billing </span>
          </a>
        </nav>
      </div>
    </div>


  );
}
export default SideBar;