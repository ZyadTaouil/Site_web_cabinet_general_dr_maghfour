import React from 'react';
import { StethoscopeIcon, HeartPulseIcon, ActivityIcon, EyeIcon, BoxIcon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
export function Services() {
  const {
    language
  } = useLanguage();
  const t = translations[language];
  const services = [{
    title: t.services.list.general.title,
    description: t.services.list.general.description,
    icon: StethoscopeIcon
  }, {
    title: t.services.list.ultrasound.title,
    description: t.services.list.ultrasound.description,
    icon: HeartPulseIcon
  }, {
    title: t.services.list.diabetes.title,
    description: t.services.list.diabetes.description,
    icon: ActivityIcon
  }, {
    title: t.services.list.nutrition.title,
    description: t.services.list.nutrition.description,
    icon: BoxIcon
  }, {
    title: t.services.list.vision.title,
    description: t.services.list.vision.description,
    icon: EyeIcon
  }];
  return <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            {t.services.title}
          </h2>
          <p className="mt-4 text-lg text-gray-600">{t.services.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <div key={index} className="bg-primary-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center p-3 bg-primary-100 rounded-md text-primary-600 mb-4">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
}