import React from 'react';
import Link from 'next/link';

const SideBar = () => {
  // Obtém a lista de arquivos da pasta 'pages/articles' usando require.context
  const files = require.context('../pages/articles', true, /\.js$/);
  const articles = files.keys().map((key) => {
    // Verifica se o arquivo está diretamente dentro da pasta 'pages/articles' e não em subpastas
    if (!key.startsWith('./')) return null;

    // Importa o módulo do arquivo do artigo
    const module = files(key);
    // Extrai o título do módulo
    const title = module.default.title || "Título não encontrado"; // Caso o título não seja definido
    // Gera o slug a partir do nome do arquivo, removendo a extensão '.js' e a pasta 'pages/articles/'
    const slug = key.replace(/\.js$/, '').replace(/^\.\/+/, '');

    return { title, slug };
  }).filter(Boolean); // Filtra e remove os itens nulos (arquivos em subpastas)

  return (
    <>
      <section className="select-none h-max w-full max-w-5xl mx-auto flex-col justify-between bg-white">
        <div className="flex flex-nowrap items-center justify-left md:justify-center px-4 md:px-0 shadow-xl md:shadow-none pt-10">
          <div className="w-auto pl-5">
            <h2 className="my-4 text-left lg:text-center text-4xl md:text-5xl lg:text-6xl font-bold text-color1">
              Most Viewed and Searched Articles
            </h2>
          </div>
        </div>

        <div className="px-4 py-6">

          <ul className="mt-6 flex flex-col space-y-1 text-lg md:text-xl lg:text-2xl">
            {articles.map((article) => (
              <li key={article.slug} className="flex items-center gap-2 rounded-lg px-4 py-2 text-[#142039] hover:bg-gray-100 hover:text-[#ff6341] underline">
                <Link href={`/articles/${article.slug}`}>
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
          <br />
          <br />
        </div>
      </section>




    </>
  );
};

export default SideBar;





