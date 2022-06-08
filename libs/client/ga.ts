declare global {
  interface Window {
    gtag: (param1: string, param2: string, param3: object) => void;
  }
}

export const pageview = (url: string) => {
  window.gtag('config', 'G-4X9J001FZC', {
    page_path: url,
  });
};
