import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const GOOGLE_REVIEW_URL =
  'https://www.google.com/search?sa=X&sca_esv=6f6894112929c399&hl=en-FR&gl=fr&sxsrf=ANbL-n6ic3SpBfaVYix7tQ7d8L3-VFncJw:1771762449599&q=Docteur+Samira+Maghfour+-+Medecin+G%C3%A9n%C3%A9raliste+Reviews&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDAxMLSwsLQ0MLYwNzY2NzExNt_AyPiK0dwlP7kktbRIITgxN7MoUcE3MT0jLR_I11XwTU1JTc7MU3A_vDLv8MqixJzM4pJUhaDUsszU8uJFrOTqBADm3eMnjwAAAA&rldimm=10401889903873374437&tbm=lcl&ved=2ahUKEwjh87y7ie2SAxU3KvsDHXg_JiIQ9fQKegQIRxAG&biw=1552&bih=750&dpr=1.65#lkt=LocalPoiReviews';

type Review = {
  name: string;
  rating: number;
  date?: string;
  comment?: string;
};

const reviews: Review[] = [
  {
    name: 'Zyad Taouil',
    rating: 5,
    comment:
      'Très bon médecin expérimentée, avec d’excellents diagnostics à la hauteur de sa réputation. Je recommande fortement.'
  },
  {
    name: 'Josh Mave',
    rating: 5,
    date: '4 months ago',
    comment: 'excellent doctor, very understanding and empathetic.'
  },
  {
    name: 'outmani abdelhamid',
    rating: 5,
    date: 'a year ago',
    comment: 'It gives time to the patients. Good listener. 👍'
  },
  {
    name: 'Noura Benessafi',
    rating: 5,
    date: 'a year ago',
    comment:
      "Excellente médecin, très courtoise, à l'écoute, donnée au patient le temps qu'il faut, je recommande vivement le Dr Samira Maghfour."
  },
  {
    name: 'Amine LAHRIM',
    rating: 5,
    date: '3 years ago',
    comment: 'Très bon médecin très compétente très humaine,je la recommande.'
  },
  {
    name: 'Ryme El Ghazal Boualam',
    rating: 5,
    date: '4 years ago'
  },
  {
    name: 'C. T',
    rating: 5,
    date: '6 years ago'
  },
  {
    name: 'Mbengue Alioune badara',
    rating: 5,
    date: '4 years ago',
    comment:
      'Très bonne interaction avec le patient.Excellent diagnostic et un traitement éfficace.Je recommandé fortement.'
  },
  {
    name: 'souad maghfour',
    rating: 5,
    date: '5 years ago',
    comment: 'Très bon médecin très compétente très humaine,je la recommande.'
  },
  {
    name: 'Nanna Wakanati',
    rating: 5,
    date: '5 years ago',
    comment: 'Très bon médecin sérieuse je la recommande'
  },
  {
    name: 'ghizlane ouriamchi',
    rating: 5,
    date: '4 years ago',
    comment: 'Médecin très compétente, très à l écoute'
  },
  {
    name: 'Clarissa Ruoppoli',
    rating: 5,
    date: 'a year ago'
  }
];

export function Reviews() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="reviews" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900">{t.reviews.title}</h2>
          <p className="mt-4 text-lg text-gray-600">{t.reviews.subtitle}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={`${review.name}-${review.date ?? 'no-date'}`}
              className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-semibold text-gray-900">{review.name}</h3>
                  <p className="text-sm text-gray-500">Review from Google</p>
                </div>
                {review.date ? <span className="text-xs text-gray-400">{review.date}</span> : null}
              </div>

              <p className="mb-4 text-amber-500" aria-label={`${review.rating} out of 5 stars`}>
                {'★'.repeat(review.rating)}
                <span className="text-gray-300">{'★'.repeat(5 - review.rating)}</span>
              </p>

              {review.comment ? (
                <p className="text-sm leading-relaxed text-gray-700">{review.comment}</p>
              ) : (
                <p className="text-sm italic text-gray-500">No comment provided.</p>
              )}
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            Leave a review on Google
          </a>
        </div>
      </div>
    </section>
  );
}