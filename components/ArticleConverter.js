import { useState } from 'react';

const ArticleConverter = () => {
  const [articleText, setArticleText] = useState('');
  const [htmlArticle, setHtmlArticle] = useState('');
  const [useBrTag, setUseBrTag] = useState(true);
  const [brTagOption, setBrTagOption] = useState('<br />');
  const [copied, setCopied] = useState(false);
  const [cleared, setCleared] = useState(false);
  const [useTailwindCSS, setUseTailwindCSS] = useState(true);
  const [tailwindCSSOption, setTailwindCSSOption] = useState('className');
  const [cssSyntaxOption, setCssSyntaxOption] = useState('padrão');
  const [h2Style, setH2Style] = useState('');
  const [h3Style, setH3Style] = useState('');
  const [pStyle, setPStyle] = useState('');
  const [h2Length1, setH2Length1] = useState(40);
  const [h2Length2, setH2Length2] = useState(70);
  const [h3Length, setH3Length] = useState(39);

  const convertToHtml = () => {
    const lines = articleText.split('\n');

    let formattedLines = lines.map((line) => {
      const formattedLine = line.trim();
      const shouldAddH2 = formattedLine.length >= h2Length1 && formattedLine.length <= h2Length2;
      const shouldAddH3 = formattedLine.length <= h3Length;

      if (formattedLine === '') {
        // Linha em branco, adicione <br /> ou <br>
        return useBrTag ? brTagOption : '';
      }

      let paragraphElement = '';

      if (useTailwindCSS) {
        if (shouldAddH2) {
          if (h2Style !== '') {
            paragraphElement += `<h2 ${tailwindCSSOption}="${h2Style}">${formattedLine}</h2>`;
          } else {
            paragraphElement += `<h2>${formattedLine}</h2>`;
          }
        } else if (shouldAddH3) {
          if (h3Style !== '') {
            paragraphElement += `<h3 ${tailwindCSSOption}="${h3Style}">${formattedLine}</h3>`;
          } else {
            paragraphElement += `<h3>${formattedLine}</h3>`;
          }
        } else {
          if (pStyle !== '') {
            paragraphElement += `<p ${tailwindCSSOption}="${pStyle}">${formattedLine}</p>`;
          } else {
            paragraphElement += `<p>${formattedLine}</p>`;
          }
        }
      } else {
        if (shouldAddH2) {
          let cssStyle = '';

          if (cssSyntaxOption === 'padrão') {
            if (h2Style !== '') {
              cssStyle = ` style="${h2Style}"`;
            } else {
              cssStyle = ``;
            }
          } else if (cssSyntaxOption === 'nextjs') {
            if (h2Style !== '') {
              cssStyle = ` style={{${h2Style}}}`;
            } else {
              cssStyle = ``;
            }
          }

          paragraphElement += `<h2${cssStyle}>${formattedLine}</h2>`;
        } else if (shouldAddH3) {
          let cssStyle = '';

          if (cssSyntaxOption === 'padrão') {
            if (h3Style !== '') {
              cssStyle = ` style="${h3Style}"`;
            } else {
              cssStyle = ``;
            }
          } else if (cssSyntaxOption === 'nextjs') {
            if (h3Style !== '') {
              cssStyle = ` style={{${h3Style}}}`;
            } else {
              cssStyle = ``;
            }
          }

          paragraphElement += `<h3${cssStyle}>${formattedLine}</h3>`;
        } else {
          let cssStyle = '';

          if (cssSyntaxOption === 'padrão') {
            if (pStyle !== '') {
              cssStyle = ` style="${pStyle}"`;
            } else {
              cssStyle = ``;
            }
          } else if (cssSyntaxOption === 'nextjs') {
            if (pStyle !== '') {
              cssStyle = ` style={{${pStyle}}}`;
            } else {
              cssStyle = ``;
            }
          }

          paragraphElement += `<p${cssStyle}>${formattedLine}</p>`;
        }
      }

      return paragraphElement;
    }).join('\n');

    setHtmlArticle(formattedLines);
    setCleared(false);
    setCopied(false);
  };

  const copyHtmlToClipboard = () => {
    navigator.clipboard.writeText(htmlArticle);
    setCopied(true);
  };

  const clearHtml = () => {
    setHtmlArticle('');
    setArticleText('');
    setCleared(true);
    setCopied(false);
    setH2Style('');
    setH3Style('');
    setPStyle('');
    setH2Length1(40);
    setH2Length2(70);
    setH3Length(39);
  };

  const isHtmlGenerated = htmlArticle !== '';

  return (
    <div className="flex flex-col w-screen space-y-4">
      <textarea
        className="p-2 border border-gray-300 rounded"
        placeholder="Digite o texto do artigo"
        value={articleText}
        onChange={(e) => setArticleText(e.target.value)}
      />

      <label htmlFor="brChoice" className="flex items-center">
        <input
          type="checkbox"
          id="brChoice"
          checked={useBrTag}
          onChange={() => setUseBrTag(!useBrTag)}
          className="mr-2"
        />
        Utilizar a tag &lt;br&gt; ?
      </label>

      {useBrTag && (
        <div className="flex items-center">
          <input
            type="radio"
            id="brChoiceSelfClosing"
            value="<br />"
            checked={brTagOption === '<br />'}
            onChange={(e) => setBrTagOption(e.target.value)}
            className="mr-2"
          />
          <label htmlFor="brChoiceSelfClosing" className="mr-4">Utilizar a tag &lt;br /&gt;</label>

          <input
            type="radio"
            id="brChoice"
            value="<br>"
            checked={brTagOption === '<br>'}
            onChange={(e) => setBrTagOption(e.target.value)}
            className="mr-2"
          />
          <label htmlFor="brChoice">Utilizar a tag &lt;br&gt;</label>
        </div>
      )}

      <div className="flex items-center">
        <input
          type="radio"
          id="tailwindCSSChoice"
          value="tailwind"
          checked={useTailwindCSS}
          onChange={() => {
            setUseTailwindCSS(true);
            clearHtml();
          }}
          className="mr-2"
        />
        <label htmlFor="tailwindCSSChoice" className="mr-4">Utilizar Tailwind CSS</label>
        <input
          type="radio"
          id="customCSSChoice"
          value="custom"
          checked={!useTailwindCSS}
          onChange={() => {
            setUseTailwindCSS(false);
            clearHtml();
          }}
          className="mr-2"
        />
        <label htmlFor="customCSSChoice">Utilizar CSS personalizado</label>
      </div>

      {useTailwindCSS ? (
        <div>
          <label htmlFor="h2Style">Estilo do h2:</label>
          <input
            type="text"
            id="h2Style"
            value={h2Style}
            placeholder="font-bold text-gray-700"
            onChange={(e) => setH2Style(e.target.value)}
            className="p-1 border border-gray-300 rounded"
          />

          <label htmlFor="h3Style">Estilo do h3:</label>
          <input
            type="text"
            id="h3Style"
            value={h3Style}
            placeholder="font-bold text-gray-700"
            onChange={(e) => setH3Style(e.target.value)}
            className="p-1 border border-gray-300 rounded"
          />

          <label htmlFor="pStyle">Estilo do parágrafo:</label>
          <input
            type="text"
            id="pStyle"
            value={pStyle}
            placeholder="text-gray-700"
            onChange={(e) => setPStyle(e.target.value)}
            className="p-1 border border-gray-300 rounded"
          />

          <div>
            <label htmlFor="tailwindCSSOption">Opção de Tailwind CSS:</label>
            <select
              id="tailwindCSSOption"
              value={tailwindCSSOption}
              onChange={(e) => setTailwindCSSOption(e.target.value)}
              className="ml-2"
            >
              <option value="class">class</option>
              <option value="className">className</option>
            </select>
          </div>
        </div>
      ) : (
        <div>
          <label htmlFor="h2Style">Estilo do h2:</label>
          <input
            type="text"
            id="h2Style"
            value={h2Style}
            placeholder="color:blue, background-color:powderblue"
            onChange={(e) => setH2Style(e.target.value)}
            className="p-1 border border-gray-300 rounded"
          />

          <label htmlFor="h3Style">Estilo do h3:</label>
          <input
            type="text"
            id="h3Style"
            value={h3Style}
            placeholder="color:blue, background-color:powderblue"
            onChange={(e) => setH3Style(e.target.value)}
            className="p-1 border border-gray-300 rounded"
          />

          <label htmlFor="pStyle">Estilo do parágrafo:</label>
          <input
            type="text"
            id="pStyle"
            value={pStyle}
            placeholder="color:blue, background-color:powderblue"
            onChange={(e) => setPStyle(e.target.value)}
            className="p-1 border border-gray-300 rounded"
          />

          <div>
            <label htmlFor="cssSyntaxOption">Opção de sintaxe CSS:</label>
            <select
              id="cssSyntaxOption"
              value={cssSyntaxOption}
              onChange={(e) => setCssSyntaxOption(e.target.value)}
              className="ml-2"
            >
              <option value="padrão">Padrão</option>
              <option value="nextjs">Next.js</option>
            </select>
          </div>
        </div>
      )}

      <div>
        <label htmlFor="h2Length1">Comprimento mínimo para h2:</label>
        <input
          type="number"
          id="h2Length1"
          value={h2Length1}
          onChange={(e) => setH2Length1(Number(e.target.value))}
          className="p-1 border border-gray-300 rounded"
        />

        <label htmlFor="h2Length2">Comprimento máximo para h2:</label>
        <input
          type="number"
          id="h2Length2"
          value={h2Length2}
          onChange={(e) => setH2Length2(Number(e.target.value))}
          className="p-1 border border-gray-300 rounded"
        />
      </div>

      <div>
        <label htmlFor="h3Length">Comprimento máximo para h3:</label>
        <input
          type="number"
          id="h3Length"
          value={h3Length}
          onChange={(e) => setH3Length(Number(e.target.value))}
          className="p-1 border border-gray-300 rounded"
        />
      </div>

      <button
        className="px-4 py-2 text-white rounded bg-blue-500 hover:bg-blue-700"
        onClick={convertToHtml}
      >
        Converter para HTML
      </button>

      {isHtmlGenerated && (
        <>
          <button
            className="px-4 py-2 text-white rounded bg-green-500 hover:bg-green-700"
            onClick={copyHtmlToClipboard}
          >
            {copied ? 'HTML copiado' : 'Copiar HTML'}
          </button>

          <button
            className="px-4 py-2 text-white rounded bg-red-500 hover:bg-red-700"
            onClick={clearHtml}
          >
            Limpar
          </button>
        </>
      )}

      {cleared}

      {isHtmlGenerated && (
        <pre className="p-2 border border-gray-300 rounded">{htmlArticle}</pre>
      )}
    </div>
  );
};

export default ArticleConverter;