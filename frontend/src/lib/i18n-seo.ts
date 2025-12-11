/**
 * Multi-language SEO configuration
 * Ensures natural, human-written content for each language
 */

export const seoConfig = {
  en: {
    siteName: 'Turkey Clinic Finder',
    defaultTitle: 'Turkey Clinic Finder - Best Medical Clinics in Turkey | Medical Tourism',
    defaultDescription: 'Find the best medical clinics in Turkey. Compare prices, read reviews, and book your medical tourism journey. Hair transplant, dental care, plastic surgery, and more.',
    keywords: 'medical tourism turkey, turkey clinics, hair transplant turkey, dental tourism turkey, plastic surgery turkey, medical tourism, turkey medical tourism, best clinics turkey, verified clinics turkey',
    locale: 'en_US',
    lang: 'en',
  },
  tr: {
    siteName: 'Türkiye Klinik Bulucu',
    defaultTitle: 'Türkiye Klinik Bulucu - Türkiye\'nin En İyi Tıp Klinikleri | Medikal Turizm',
    defaultDescription: 'Türkiye\'deki en iyi tıp kliniklerini bulun. Fiyatları karşılaştırın, yorumları okuyun ve medikal turizm yolculuğunuzu planlayın. Saç ekimi, diş tedavisi, estetik cerrahi ve daha fazlası.',
    keywords: 'türkiye medikal turizm, türkiye klinikleri, saç ekimi türkiye, diş tedavisi türkiye, estetik cerrahi türkiye, medikal turizm, türkiye tıp turizmi, en iyi klinikler türkiye, onaylı klinikler türkiye',
    locale: 'tr_TR',
    lang: 'tr',
  },
  ar: {
    siteName: 'البحث عن عيادات تركيا',
    defaultTitle: 'البحث عن عيادات تركيا - أفضل العيادات الطبية في تركيا | السياحة الطبية',
    defaultDescription: 'ابحث عن أفضل العيادات الطبية في تركيا. قارن الأسعار، اقرأ المراجعات، وخطط لرحلتك الطبية. زراعة الشعر، طب الأسنان، الجراحة التجميلية والمزيد.',
    keywords: 'السياحة الطبية تركيا, عيادات تركيا, زراعة الشعر تركيا, طب الأسنان تركيا, الجراحة التجميلية تركيا, السياحة الطبية, أفضل العيادات تركيا, عيادات معتمدة تركيا',
    locale: 'ar_SA',
    lang: 'ar',
  },
};

export function getSEOConfig(lang: 'en' | 'tr' | 'ar' = 'en') {
  return seoConfig[lang];
}

export function generateHreflangTags(path: string) {
  const baseUrl = 'https://turkeyclinicfinder.com';
  return [
    { hreflang: 'en', href: `${baseUrl}${path}` },
    { hreflang: 'tr', href: `${baseUrl}/tr${path}` },
    { hreflang: 'ar', href: `${baseUrl}/ar${path}` },
    { hreflang: 'x-default', href: `${baseUrl}${path}` },
  ];
}

