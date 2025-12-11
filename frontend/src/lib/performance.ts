/**
 * Performance optimization utilities
 */

// Dynamic imports for code splitting
export const dynamicImport = {
  // Lazy load heavy components
  ModernSearchWizard: () => import('../components/ModernSearchWizard'),
  ConsultationForm: () => import('../components/ConsultationForm'),
  ReviewList: () => import('../components/ReviewList'),
  PriceEstimator: () => import('../components/PriceEstimator'),
};

// Preload critical resources
export function preloadCriticalResources() {
  if (typeof window !== 'undefined') {
    // Preload critical fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.as = 'font';
    fontLink.type = 'font/woff2';
    fontLink.crossOrigin = 'anonymous';
    document.head.appendChild(fontLink);
  }
}

// Defer non-critical scripts
export function deferNonCriticalScripts() {
  if (typeof window !== 'undefined') {
    // Defer AdSense loading
    const scripts = document.querySelectorAll('script[data-defer]');
    scripts.forEach((script) => {
      script.setAttribute('defer', '');
    });
  }
}

