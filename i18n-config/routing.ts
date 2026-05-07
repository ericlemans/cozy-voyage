import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
   // A list of all locales that are supported, if more languages added, simply add "en", or "es" to the array
   // locales: ['de', 'en', 'es'],
   locales: ['de', 'en'],

   // Used when no locale matches
   defaultLocale: 'de'
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
