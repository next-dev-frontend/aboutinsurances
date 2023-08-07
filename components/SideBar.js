import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { shuffle } from 'lodash';

const SideBar = () => {
  const files = require.context('../pages/articles', true, /\.js$/);
  const allArticles = files.keys().map((key) => {
    if (!key.startsWith('./')) return null;
    const module = files(key);
    const title = module.default.title || 'Título não encontrado';
    const slug = key.replace(/\.js$/, '').replace(/^\.\/+/, '');
    return { title, slug };
  }).filter(Boolean);

  // Inicializa os artigos embaralhados como uma lista vazia
  const [shuffledArticles, setShuffledArticles] = useState([]);

  const [displayedArticles, setDisplayedArticles] = useState(20);

  const handleShowMore = () => {
    setDisplayedArticles((prevDisplayedArticles) => prevDisplayedArticles + 20);
  };

  const handleShowLess = () => {
    setDisplayedArticles(20);
  };

  useEffect(() => {
    // Embaralha os artigos apenas no lado do cliente após o componente ser montado
    setShuffledArticles(shuffle(allArticles));
  }, []); // O array de dependências vazio garante que o efeito ocorra somente uma vez

  return (
    <>
      <section id="articles" className="select-none h-max w-full max-w-5xl mx-auto flex-col justify-between bg-white">
        {/* Restante do código permanece igual */}
        <div className="px-4 py-6">
          <ul className="mt-6 flex flex-col space-y-1 text-lg md:text-xl lg:text-2xl">
            {shuffledArticles.slice(0, displayedArticles).map((article) => (
              <li key={article.slug} className="flex items-center gap-2 rounded-lg px-4 py-2 text-[#142039] hover:bg-gray-100 hover:text-[#ff6341] underline decoration-color2 hover:no-underline">
                <Link href={`/articles/${article.slug}`}>
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
          <br />
          <div className='flex mx-auto items-center justify-center py-8 text-md md:text-lg lg:text-xl'>
            {displayedArticles < shuffledArticles.length ? (
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