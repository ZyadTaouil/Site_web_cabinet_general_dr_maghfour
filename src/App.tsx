import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { translations } from './translations';

// Lazy load non-critical components for better performance
const About = lazy(() => import('./components/About').then(module => ({ default: module.About })));
const Services = lazy(() => import('./components/Services').then(module => ({ default: module.Services })));
const Reviews = lazy(() => import('./components/Reviews').then(module => ({ default: module.Reviews })));
const Contact = lazy(() => import('./components/Contact').then(module => ({ default: module.Contact })));
const Faq = lazy(() => import('./components/Faq').then(module => ({ default: module.Faq }))); // Import FAQ

function AppContent() {
  const { language } = useLanguage();
  const t = translations[language];

  // Base URL using the specified domain
  const baseUrl = process.env.NODE_ENV === 'production'
    ? 'https://cabinet-dr-maghfour.ma'
    : 'http://localhost:5173';

  // Current path - for SPAs with language paths
  const canonicalUrl = `${baseUrl}${language !== 'fr' ? `/${language}` : ''}`;

  return (
    <>
      <Helmet>
        {/* Use language-specific title and meta description */}
        <title>{t.hero.title || 'Dr. Samira Maghfour - Cabinet Médical'}</title>
        <meta name="description" content={t.hero.description || 'Cabinet de médecine générale à Marrakech.'} />
        <html lang={language} />
        {/* Meta keywords */}
        <meta name="keywords" content={t.meta?.keywords || 'médecin, généraliste, cabinet, Marrakech'} />

        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content={t.hero.title || 'Dr. Samira Maghfour - Cabinet Médical'} />
        <meta property="og:description" content={t.hero.description || 'Cabinet de médecine générale à Marrakech.'} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={language === 'fr' ? 'fr_FR' : 'ar_MA'} />
        <meta property="og:image" content="https://res.cloudinary.com/hh9gnin1v/image/upload/c_fit,h_600,w_800/v1585577294/5e7dc5fab91f8c0031d66e7a_photo_1.png" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={t.hero.title || 'Dr. Samira Maghfour - Cabinet Médical'} />
        <meta name="twitter:description" content={t.hero.description || 'Cabinet de médecine générale à Marrakech.'} />
        <meta name="twitter:image" content="https://res.cloudinary.com/hh9gnin1v/image/upload/c_fit,h_600,w_800/v1585577294/5e7dc5fab91f8c0031d66e7a_photo_1.png" />

        {/* JSON-LD Structured Data for Local Business */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Dr. Samira Maghfour - Cabinet Médical",
            "image": "https://res.cloudinary.com/hh9gnin1v/image/upload/c_fit,h_600,w_800/v1585577294/5e7dc5fab91f8c0031d66e7a_photo_1.png",
            "@id": "https://cabinet-dr-maghfour.ma",
            "url": "https://cabinet-dr-maghfour.ma",
            "telephone": "05 24 30 21 30",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "79, Bd Machaar Haram, Sidi Abbad Iii",
              "addressLocality": "Marrakech",
              "postalCode": "40000",
              "addressCountry": "MA"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 31.65971587281742,
              "longitude": -8.014124092684563
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "17:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "09:00",
                "closes": "12:30"
              }
            ]
          })}
        </script>
      </Helmet>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <main className="flex-grow">
          <Hero />
          {/* Lazy load below-the-fold components */}
          <Suspense fallback={<div className="py-16 text-center">Loading...</div>}>
            <Services />
            <About />
            <Faq /> {/* Add FAQ section before Contact */}
            <Contact />
            <Reviews />
          </Suspense>
        </main>
      </div>
    </>
  );
}

export function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}