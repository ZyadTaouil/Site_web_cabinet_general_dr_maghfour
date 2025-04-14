import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
export function LanguageSwitcher() {
  const {
    language,
    setLanguage
  } = useLanguage();
  return <div className="flex items-center space-x-2">
      <button onClick={() => setLanguage('fr')} className={`px-2 py-1 rounded ${language === 'fr' ? 'bg-primary-500 text-white' : 'text-gray-600 hover:text-primary-500'}`}>
        FR
      </button>
      <button onClick={() => setLanguage('ar')} className={`px-2 py-1 rounded ${language === 'ar' ? 'bg-primary-500 text-white' : 'text-gray-600 hover:text-primary-500'}`}>
        عربي
      </button>
    </div>;
}