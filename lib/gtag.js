export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// Função para reportar uma visualização de página
export const pageview = (url) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// Função para reportar um evento
export const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};