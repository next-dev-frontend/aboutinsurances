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
        <div className="px-4 py-6">
          <div className='px-4'>
            <label htmlFor="searchInput" className="block text-lg font-medium mb-2">
              Search Articles
            </label>
            <input
              type="text"
              id="searchInput"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="border border-color2 p-2 mb-4 rounded-md"
            />
          </div>
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