import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '@/components/shared/Header/Header';
import { IntlWrapper } from '../utils/intl-wrapper';

jest.mock('next-intl', () => ({
  useLocale: () => 'de',
  NextIntlClientProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

jest.mock('@/navigation', () => ({
  useRouter: () => ({ replace: jest.fn() }),
  usePathname: () => '/',
  locales: ['de', 'en'],
}));

describe('Header', () => {
  it('renders DE and EN language toggles', () => {
    render(<IntlWrapper><Header /></IntlWrapper>);
    expect(screen.getByText('DE')).toBeInTheDocument();
    expect(screen.getByText('EN')).toBeInTheDocument();
  });

  it('renders the logo image', () => {
    render(<IntlWrapper><Header /></IntlWrapper>);
    expect(screen.getByAltText('Cozy Voyage')).toBeInTheDocument();
  });
});
