import React, { useEffect, useRef } from 'react';
import { MapPinIcon, PhoneIcon, ClockIcon } from 'lucide-react';
import L from 'leaflet';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import 'leaflet/dist/leaflet.css';
export function Contact() {
  const {
    language
  } = useLanguage();
  const t = translations[language];
  const mapRef = useRef(null);
  useEffect(() => {
    if (mapRef.current) {
      const marrakechCoordinates: L.LatLngTuple = [31.65971587281742, -8.014124092684563];
      const map = L.map(mapRef.current, {
        zoomControl: false,
        attributionControl: false
      }).setView(marrakechCoordinates, 15);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: ''
      }).addTo(map);
      const marker = L.marker(marrakechCoordinates).addTo(map);
      marker.bindPopup(t.contact.address.text).openPopup();
      return () => {
        map.remove();
      };
    }
  }, [language]);
  return <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-lg text-gray-600">{t.contact.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="bg-primary-50 p-6 rounded-lg shadow-sm mb-8">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 mt-1">
                  <MapPinIcon className="h-6 w-6 text-primary-500" />
                </div>
                <div className={`${language === 'ar' ? 'mr-3' : 'ml-3'}`}>
                  <h3 className="text-lg font-medium text-gray-900">
                    {t.contact.address.title}
                  </h3>
                  <p className="text-gray-600">{t.contact.address.text}</p>
                </div>
              </div>
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 mt-1">
                  <PhoneIcon className="h-6 w-6 text-primary-500" />
                </div>
                <div className={`${language === 'ar' ? 'mr-3' : 'ml-3'}`}>
                  <h3 className="text-lg font-medium text-gray-900">
                    {t.contact.phone.title}
                  </h3>
                  <p className="text-gray-600">
                    <a href="tel:0524302130" className="text-primary-500 hover:underline" dir="ltr">
                      {t.contact.phone.number}
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <ClockIcon className="h-6 w-6 text-primary-500" />
                </div>
                <div className={`${language === 'ar' ? 'mr-3' : 'ml-3'} flex-grow`}>
                  <h3 className="text-lg font-medium text-gray-900">
                    {t.contact.hours.title}
                  </h3>
                  <div className="text-gray-600 space-y-1 mt-2">
                    <div className="flex justify-between">
                      <span>{t.contact.hours.weekdays}:</span>
                      <span>9h - 15h</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t.contact.hours.saturday}:</span>
                      <span>9h - 12h30</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t.contact.hours.sunday}:</span>
                      <span>{t.contact.hours.closed}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-primary-500 text-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-4">
                {t.contact.appointment.title}
              </h3>
              <p className="mb-4">{t.contact.appointment.description}</p>
              <a href="tel:0524302130" className="inline-flex items-center px-5 py-3 bg-white text-primary-500 rounded-md hover:bg-primary-50 transition-colors" dir="ltr">
                <PhoneIcon className={`w-5 h-5 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
                {t.contact.phone.number}
              </a>
            </div>
          </div>
          <div className="h-96 rounded-lg overflow-hidden shadow-md">
            <div ref={mapRef} className="w-full h-full"></div>
          </div>
        </div>
      </div>
    </section>;
}