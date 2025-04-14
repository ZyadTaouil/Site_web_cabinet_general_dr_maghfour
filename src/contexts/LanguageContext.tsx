import React, { useState, createContext, useContext } from 'react';
type Language = 'fr' | 'ar';
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
export function LanguageProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguage] = useState<Language>('fr');
  return <LanguageContext.Provider value={{
    language,
    setLanguage
  }}>
      <div dir={language === 'ar' ? 'rtl' : 'ltr'}>{children}</div>
    </LanguageContext.Provider>;
}
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}