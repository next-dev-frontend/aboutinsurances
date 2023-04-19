import ReactGA from 'react-ga';

export const initGA = (): void => {
  ReactGA.initialize('G-FFC6EB1GNB');
};

export const logPageView = (): void => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export const logEvent = (
  category: string,
  action: string,
  label: string = '',
): void => {
  ReactGA.event({
    category,
    action,
    label,
  });
};