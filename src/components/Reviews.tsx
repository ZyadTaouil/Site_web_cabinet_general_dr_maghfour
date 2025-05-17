import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

export function Reviews() {
  const { language } = useLanguage();
  const t = translations[language];
  const reviewsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Use Intersection Observer to load script only when section is approaching viewport
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (!document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]')) {
            const script = document.createElement('script');
            script.src = 'https://static.elfsight.com/platform/platform.js';
            script.async = true;
            script.defer = true;
            window.__eappsWidgetId = '23461fff-4e12-419e-9f24-9af0fc65d9d2';
            window.__eappsConfigureWidget = function (widget) {
              widget.style.display = 'none';
            };
            document.body.appendChild(script);
          }
          // Disconnect once loaded
          observer.disconnect();
        }
      },
      { rootMargin: '200px' } // Start loading when 200px from viewport
    );

    if (reviewsRef.current) {
      observer.observe(reviewsRef.current);
    }

    return () => observer.disconnect();
  }, []);


  return (
    <section id="reviews" className="py-16 bg-gray-50" ref={reviewsRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            {t.reviews.title}
          </h2>
          <p className="mt-4 text-lg text-gray-600">{t.reviews.subtitle}</p>
        </div>
        <div className="elfsight-app-23461fff-4e12-419e-9f24-9af0fc65d9d2" data-elfsight-app-lazy></div>
      </div>

    </section>
  );
}