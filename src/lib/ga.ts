// src/lib/ga.ts
export const GA_ID = import.meta.env.VITE_GA_ID as string;

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const pageview = (path: string) => {
  if (!window.gtag || !GA_ID) return;
  window.gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
};

export const trackEvent = (action: string, params?: Record<string, any>) => {
  if (!window.gtag || !GA_ID) return;
  window.gtag("event", action, params);
};
