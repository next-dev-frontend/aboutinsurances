import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-FFC6EB1GNB');
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};