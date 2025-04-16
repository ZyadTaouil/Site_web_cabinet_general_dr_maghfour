import { Phone, Calendar, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

export function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative bg-gradient-to-r from-primary-50 to-primary-100 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-16 -top-16 w-64 h-64 rounded-full bg-primary-300"></div>
        <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-primary-300"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <p className="inline-block bg-primary-100 text-primary-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
                {language === 'ar' ? 'رعاية صحية موثوقة' : 'Soins médicaux de confiance'}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                {t.hero.title}
                <span className="block text-primary-600 mt-2">{t.hero.subtitle}</span>
              </h1>
              <p className="mt-6 text-xl text-gray-700 max-w-lg leading-relaxed">
                {t.hero.description}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:0524302130" 
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
              >
                <Phone className={`w-5 h-5 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
                {t.hero.cta.appointment}
              </a>
              <a 
                href="#services" 
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 font-medium rounded-lg border border-primary-200 hover:bg-primary-50 transition-colors shadow-sm"
              >
                {t.hero.cta.services}
                <ArrowRight className={`w-4 h-4 ${language === 'ar' ? 'mr-2' : 'ml-2'}`} />
              </a>
            </div>
            
            {/* Health emergency message */}
            <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-lg p-4 border-l-4 border-accent-500 shadow-sm">
              <p className="text-sm text-gray-700">
                <span className="font-medium text-accent-700">
                  {language === 'ar' ? 'في حالة الطوارئ: ' : 'En cas d\'urgence: '}
                </span>
                {language === 'ar' 
                  ? 'اتصل على 150 أو الرقم المباشر 0524302130 للحصول على المساعدة الفورية.'
                  : 'Appelez le 150 ou notre ligne directe au 05 24 30 21 30 pour une assistance immédiate.'}
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 bg-white p-3 rounded-2xl shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <img 
                src="https://i.postimg.cc/13r1DpQL/happy-family.jpg" 
                alt={language === 'ar' ? 'عيادة طبية حديثة ومرحبة' : 'Cabinet médical moderne et accueillant'} 
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
            {/* Floating information cards */}
            <div className="absolute -bottom-5 -left-5 bg-white rounded-lg shadow-lg p-3 max-w-xs transform -rotate-3 z-20">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary-100 rounded-full">
                  <Calendar className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {language === 'ar' ? 'مواعيد مرنة' : 'Horaires flexibles'}
                  </p>
                  <p className="text-xs text-gray-600">Lun-Ven: 9h-15h | Sam: 9h-12h30</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}