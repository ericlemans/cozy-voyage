import React from 'react';

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12 20.25h.008v.008H12v-.008z" />
      </svg>
    ),
    title: 'Schneller Wi-Fi-Zugang',
    description: 'Ideal für Streaming, Videoanrufe und mehrere Verbindungen gleichzeitig.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
    title: 'Self Check-In zu jeder Stunde',
    description: 'Ein einzigartiger Code für deinen Aufenthalt — flexible Ankunft, kein Warten.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.008H9.375V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.008h-.008V9.75z" />
      </svg>
    ),
    title: 'Barrierefreier Eingang',
    description: 'Dresden: ebenerdig direkt von der Straße. Berlin: nur zwei kleine Stufen.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: 'Mit Liebe gestaltete Wohnungen',
    description: 'Cozy ist in unserer DNA — schön, funktional und unvergesslich.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 19.5h19.5M2.25 19.5V9a.75.75 0 01.75-.75h18a.75.75 0 01.75.75v10.5M2.25 19.5H.75M21.75 19.5h1.5M6 9.75V19.5m12-9.75V19.5M6.75 6h10.5a.75.75 0 00.75-.75V4.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v.75a.75.75 0 00.75.75z" />
      </svg>
    ),
    title: 'Bettwäsche & Handtücher',
    description: 'Bettwäsche, Handtücher, Duschtücher und Küchenhandtücher inklusive.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
    title: 'Tiefenreinigung — jedes Mal',
    description: 'Makellose Sauberkeit bei jedem Aufenthalt. Unsere Bewertungen sprechen für uns.',
  },
];

const CompanyStandards = () => {
  return (
    <section id="our-company" className="py-24 md:py-32">
      {/* Section header */}
      <div className="mb-16 md:mb-20">
        <p
          className="text-rose-500 text-xs font-medium uppercase mb-4"
          style={{ letterSpacing: '0.25em' }}
        >
          Unser Versprechen
        </p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2
            className="font-bold leading-none"
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 4rem)',
              letterSpacing: '-0.02em',
              color: '#111',
              lineHeight: 1.05,
            }}
          >
            Was du<br />erwarten kannst
          </h2>
          <p className="text-gray-500 text-base md:text-lg font-light max-w-sm md:text-right leading-relaxed">
            Jeder Aufenthalt entspricht unseren hohen Standards — damit du einfach ankommst und genießt.
          </p>
        </div>
      </div>

      {/* Feature grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100">
        {features.map((feature, i) => (
          <div
            key={i}
            className="group bg-white p-8 md:p-10 flex flex-col gap-5 hover:bg-gray-50 transition-colors duration-300"
          >
            {/* Icon + number */}
            <div className="flex items-start justify-between">
              <div className="text-rose-500 transition-transform duration-300 group-hover:-translate-y-0.5">
                {feature.icon}
              </div>
              <span
                className="text-gray-100 font-bold select-none"
                style={{ fontSize: '3rem', lineHeight: 1, letterSpacing: '-0.04em' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>

            {/* Text */}
            <div className="flex flex-col gap-2">
              <h3
                className="font-semibold text-gray-900 leading-snug"
                style={{ fontSize: '1.25rem', color: '#111' }}
              >
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed" style={{ fontSize: '1rem', color: '#6b7280' }}>
                {feature.description}
              </p>
            </div>

            {/* Bottom accent line */}
            <div className="mt-auto pt-4">
              <div className="h-px w-8 bg-rose-500 transition-all duration-500 group-hover:w-full" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyStandards;