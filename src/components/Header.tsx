import React, { useState } from 'react';
import { MenuIcon, XIcon, PhoneIcon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];
  
  return <header className="bg-white shadow-sm sticky top-0 z-[999] header">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center py-4">
        <div className="flex items-center">
          <img
            src="https://i.postimg.cc/s2XJYJ0w/Cabinet-Samira-Maghfour.png"
            alt={language === 'ar' ? 'شعار عيادة الطب العام للدكتورة سميرة مغفور' : 'Logo du Cabinet de Médecine générale Dr. Samira Maghfour'}
            className="h-36 md:h-40" 
          />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <LanguageSwitcher />
          <a href="#services" className="text-gray-700 hover:text-primary-500">
            {t.nav.services}
          </a>
          <a href="#about" className="text-gray-700 hover:text-primary-500">
            {t.nav.about}
          </a>
          <a href="#faq" className="text-gray-700 hover:text-primary-500">
            {t.faq?.title || 'FAQ'}
          </a>
          <a href="#contact" className="text-gray-700 hover:text-primary-500">
            {t.nav.contact}
          </a>
          <a href="#reviews" className="text-gray-700 hover:text-primary-500">
            {t.nav.reviews}
          </a>
        </nav>
        
        <a href="tel:0524302130" dir="ltr" className="hidden md:flex items-center px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors">
          <PhoneIcon className="w-4 h-4 mr-2" />
          05 24 30 21 30
        </a>
        
        <button 
          className="md:hidden rounded-md p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <XIcon className="h-6 w-6" aria-hidden="true" /> : <MenuIcon className="h-6 w-6" aria-hidden="true" />}
        </button>
      </div>
    </div>
    
    {/* Mobile Navigation */}
    {isMenuOpen && <div className="md:hidden bg-white border-t border-gray-200">
      <div className="px-2 pt-2 pb-3 space-y-1">
        <LanguageSwitcher />
        <a href="#services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-500 hover:bg-gray-50">
          {t.nav.services}
        </a>
        <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-500 hover:bg-gray-50">
          {t.nav.about}
        </a>
        <a href="#faq" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-500 hover:bg-gray-50">
          {t.faq?.title || 'FAQ'}
        </a>
        <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-500 hover:bg-gray-50">
          {t.nav.contact}
        </a>
        <a href="#reviews" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-500 hover:bg-gray-50">
          {t.nav.reviews}
        </a>
        <a href="tel:0524302130" className="flex items-center px-3 py-2 text-primary-500 font-medium" dir="ltr">
          <PhoneIcon className="w-4 h-4 mr-2" />
          05 24 30 21 30
        </a>
      </div>
    </div>}
  </header>;
}