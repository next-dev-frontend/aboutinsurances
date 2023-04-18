import { GA_TRACKING_ID } from "./gtag";

// Função que carrega o script do Google Analytics
const loadGA = () => {
  // Verifica se o ID de acompanhamento está definido
  if (GA_TRACKING_ID) {
    // Carrega o script do Google Analytics
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    script.async = true;
    document.head.appendChild(script);

    // Inicializa o Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", GA_TRACKING_ID, {
      page_path: window.location.pathname,
    });
  }
};

// Exporta a função que carrega o script do Google Analytics
export const initGA = () => {
  // Adiciona um listener para carregar o script após a página estar carregada
  window.addEventListener("load", loadGA);
};

