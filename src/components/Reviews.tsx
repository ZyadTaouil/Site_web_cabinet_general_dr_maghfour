import GoogleReviewsWidget from 'google-reviews-widget';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

export function Reviews() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="reviews" className="py-5 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            {t.reviews.title}
          </h2>
          <p className="mt-4 text-lg text-gray-600">{t.reviews.subtitle}</p>
        </div>
      </div>
      <GoogleReviewsWidget instanceId='MxIhF2O3Jf8HXgmPLlsR' />
    </section>
  );
}