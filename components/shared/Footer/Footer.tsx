'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';

const Footer = () => {
  const t = useTranslations('footer');
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-10">

        {/* Logo / Brand */}
        <div className="flex flex-col items-start">
          <h2 className="text-white text-xl font-semibold">Cozy Voyage</h2>
          <p className="text-gray-400 mt-2 text-sm">
            {t('tagline')}
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-8">
          <div>
            <h3 className="text-white font-semibold mb-3">{t('companyHeading')}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white">{t('aboutUs')}</Link></li>
              <li><Link href="/impressum" className="hover:text-white">Impressum</Link></li>
              <li><Link href="/agb" className="hover:text-white">AGB</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">{t('supportHeading')}</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:info@cozy-voyage.com" className="hover:text-white">{t('contact')}</a></li>
              <li><a href="mailto:info@cozy-voyage.com?subject=Corporate%20Inquiry" className="hover:text-white">{t('corporateInquiry')}</a></li>
              <li><Link href="/privacy-policy" className="hover:text-white">{t('privacyPolicy')}</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-center text-gray-500">
        {t('copyright', { year: new Date().getFullYear() })}
      </div>
    </footer>
  );
};

export default Footer;
