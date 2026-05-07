import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';
import { notFound } from 'next/navigation';
import ditto from '../messages/index';

export default getRequestConfig(async ({ requestLocale }) => {
   // Typically corresponds to the `[locale]` segment
   const requested = await requestLocale;
   const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

   // Validate that the incoming `locale` parameter is valid, if not, return 404
   if (!routing.locales.includes(locale as any)) {
      return notFound();
   }

   const mapLocale = (): 'base' | 'eng' => {
      switch (locale) {
         case 'de':
            return 'base';
         // case 'en':
         //     return 'eng';
         // case 'es':
         //     return 'esp';
         default:
            return 'base';
      }
   };

   const legacyMessages = await import(`../i18n-legacy/${locale}.json`);
   const dittoWords = (ditto as Record<string, Record<string, string>>)[mapLocale()] ?? {};
   const normalizedDitto = Object.fromEntries(
      Object.entries(dittoWords)
         .filter(([key]) => !key.includes('.'))
         .map(([key, value]) => [key, value.replaceAll('&apos;', `'`)]), // Replace HTML entity with actual apostrophe
   );

   const messages = { ...legacyMessages.default, ...normalizedDitto };

   return {
      locale,
      messages,
   };
});
