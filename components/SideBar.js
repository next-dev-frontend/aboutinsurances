import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { shuffle } from 'lodash';

const SideBar = () => {
  const files = require.context('../pages/articles', true, /\.js$/);
  const allArticles = files.keys().map((key) => {
    if (!key.startsWith('./')) return null;
    const module = files(key);
    const title = module.default.title || 'Title not found';
    const slug = key.replace(/\.js$/, '').replace(/^\.\/+/, '');
    return { title, slug };
  }).filter(Boolean);

  const [shuffledArticles, setShuffledArticles] = useState([]);
  const [displayedArticles, setDisplayedArticles] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');

  const handleShowMore = () => {
    setDisplayedArticles((prevDisplayedArticles) => prevDisplayedArticles + 10);
  };

  const handleShowLess = () => {
    setDisplayedArticles(10);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    setShuffledArticles(shuffle(allArticles));
  }, []);

  const filteredArticles = shuffledArticles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <section id="articles" className="h-max w-full max-w-5xl mx-auto flex-col justify-between bg-white">
        <div className="flex flex-nowrap items-center justify-left md:justify-center px-4 md:px-0 shadow-xl md:shadow-none pt-10">
          <div className="w-auto pl-5">
            <h2 className="my-4 text-left lg:text-center text-3xl md:text-4xl lg:text-5xl font-bold text-color1">
              Most Viewed and Searched Articles
            </h2>
          </div>
        </div>
        <div className="px-2 py-10">
          <div className='flex px-2 py-4 justify-between items-center bg-color1 text-gray-100 w-full rounded'>

            <form className='flex'>

              <div className='px-4 my-auto'>
                <svg className="w-6 h-6 text-gray-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input
                type="search"
                id="searchInput"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="text-gray-700 my-auto border-2 border-color2 p-2 rounded-md w-44 md:w-96"
              />
            </form>
            <p className="my-auto text-lg md:text-xl font-medium mb-2 pr-4">Total Articles: {filteredArticles.length}</p>
          </div>
          <br />

          <ul className="mt-6 flex flex-col space-y-1 text-lg md:text-xl lg:text-2xl">
            {filteredArticles.slice(0, displayedArticles).map((article) => (
              <li key={article.slug} className="flex items-center gap-2 rounded-lg px-4 py-2 text-[#142039] hover:bg-gray-100 hover:text-[#ff6341] underline decoration-color2 hover:no-underline">
                <Link href={`/articles/${article.slug}`}>
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
          <br />

          <div className='flex mx-auto items-center justify-center py-8 text-md md:text-lg lg:text-xl'>
            {displayedArticles < filteredArticles.length ? (
              <button
                className="text-white hover:text-color1 cursor-pointer bg-color1 hover:bg-color2 rounded py-2 px-12 font-mono"
                onClick={handleShowMore}
              >
                View More
              </button>
            ) : (
              <button
                className="text-white hover:text-color1 cursor-pointer bg-color1 hover:bg-color2 rounded py-2 px-12 font-mono"
                onClick={handleShowLess}
              >
                See Less
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default SideBar;