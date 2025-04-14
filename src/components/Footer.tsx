import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

export function Footer() {
  const { language } = useLanguage();
  const t = translations[language];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple two-column layout on desktop, single column on mobile */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left: Logo or name */}
          <div className="mb-6 md:mb-0">
            <div className="text-white font-medium">
              {language === 'ar' ? 'د. سميرة مغفور' : 'Dr. Samira Maghfour'}
            </div>
          </div>

          {/* Right: Essential links */}
          <div className="flex space-x-6">
            {/* Only include essential/legal links, not duplicating main nav */}
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-primary-200 hover:text-white text-sm transition-colors duration-200"
            >
              {language === 'ar' ? 'العودة للأعلى' : 'Retour en haut'}
            </a>
          </div>
        </div>

        {/* Bottom line with copyright */}
        <div className="mt-8 pt-4 border-t border-primary-700 flex flex-col md:flex-row justify-between items-center text-xs text-primary-300">
          <p>© {currentYear} {t.footer.rights}</p>
          
          {/* Optional: Add a link to privacy policy or terms if you have them */}
          {/* <a href="/privacy" className="mt-2 md:mt-0 text-primary-300 hover:text-white transition-colors duration-200">
            {language === 'ar' ? 'سياسة الخصوصية' : 'Confidentialité'}
          </a> */}
        </div>
      </div>
    </footer>
  );
}