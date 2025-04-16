import { Award, GraduationCap, HeartHandshake, Star, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

export function About() {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t.about.title}
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
        </div>
        
        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Left column with photo and credentials */}
          <div className="md:col-span-5">
            <div className="flex flex-col items-center">
              <div className="rounded-xl overflow-hidden border-4 border-white shadow-xl mb-6 w-72 h-80 relative group">
                <img
                  src="https://res.cloudinary.com/hh9gnin1v/image/upload/c_fit,h_600,w_800/v1585577294/5e7dc5fab91f8c0031d66e7a_photo_1.png"
                  alt={`Dr. ${t.about.title}, médecin généraliste à Marrakech`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Credentials section with improved styling */}
              <div className="bg-white rounded-lg shadow-md p-6 w-full">
                <div className="flex justify-center mb-4">
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="text-center text-sm text-gray-600">
                  <p className="font-medium">{t.about.experience.description}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column with biography and qualifications */}
          <div className="md:col-span-7">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              {language === 'ar' ? 'نبذة مهنية' : 'Biographie professionnelle'}
            </h3>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">{t.about.description}</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border-l-4 border-primary-500">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-primary-100 rounded-md">
                    <GraduationCap className="h-6 w-6 text-primary-600" />
                  </div>
                  <h4 className="text-lg font-medium text-gray-900 ml-3">
                    {t.about.education.title}
                  </h4>
                </div>
                <p className="text-gray-600">
                  {t.about.education.description}
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border-l-4 border-primary-500">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-primary-100 rounded-md">
                    <Award className="h-6 w-6 text-primary-600" />
                  </div>
                  <h4 className="text-lg font-medium text-gray-900 ml-3">
                    {t.about.experience.title}
                  </h4>
                </div>
                <p className="text-gray-600">
                  {t.about.experience.description}
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border-l-4 border-primary-500">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-primary-100 rounded-md">
                    <HeartHandshake className="h-6 w-6 text-primary-600" />
                  </div>
                  <h4 className="text-lg font-medium text-gray-900 ml-3">
                    {t.about.approach.title}
                  </h4>
                </div>
                <p className="text-gray-600">
                  {t.about.approach.description}
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border-l-4 border-primary-500">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-primary-100 rounded-md">
                    <Clock className="h-6 w-6 text-primary-600" />
                  </div>
                  <h4 className="text-lg font-medium text-gray-900 ml-3">
                    {language === 'ar' ? 'مواعيد العمل' : 'Disponibilité'}
                  </h4>
                </div>
                <p className="text-gray-600">
                  {language === 'ar' 
                    ? 'من الإثنين إلى الجمعة من 9 صباحًا حتى 3 مساءً والسبت من 9 صباحًا حتى 12:30 ظهرًا' 
                    : 'Du lundi au vendredi de 9h à 15h et le samedi de 9h à 12h30'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}