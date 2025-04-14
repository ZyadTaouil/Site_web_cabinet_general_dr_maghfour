import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

// Update your translations file to include these FAQs
// This component assumes you've added a faq section to your translations

export function Faq() {
  const { language } = useLanguage();
  const t = translations[language];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">{t.faq.title}</h2>
          <p className="mt-4 text-lg text-gray-600">{t.faq.subtitle}</p>
        </div>

        <div className="max-w-3xl mx-auto divide-y divide-gray-200">
          {t.faq.questions.map((item, index) => (
            <div key={index} className="py-4">
              <button
                className="flex justify-between items-center w-full text-left focus:outline-none"
                onClick={() => toggleQuestion(index)}
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-medium text-gray-900">{item.question}</h3>
                <span className="ml-6 flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUpIcon className="h-5 w-5 text-primary-500" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 text-primary-500" />
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div className="mt-2 pr-12">
                  <p className="text-base text-gray-700">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}