import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import deMessages from '../../messages/de.json';

export function IntlWrapper({ children }: { children: React.ReactNode }) {
  return (
    <NextIntlClientProvider locale="de" messages={deMessages}>
      {children}
    </NextIntlClientProvider>
  );
}
