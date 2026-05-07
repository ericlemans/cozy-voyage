import React from 'react';
import { render, screen } from '@testing-library/react';
import HomeBanner from '@/components/home/Banner/HomeBanner';
import { IntlWrapper } from '../utils/intl-wrapper';

describe('HomeBanner', () => {
  it('renders the hero heading with Cozy and Voyage', () => {
    render(<IntlWrapper><HomeBanner /></IntlWrapper>);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Cozy');
    expect(heading).toHaveTextContent('Voyage');
  });

  it('renders the Alle Objekte CTA link with correct href', () => {
    render(<IntlWrapper><HomeBanner /></IntlWrapper>);
    const ctaLink = screen.getByRole('link', { name: /alle objekte/i });
    expect(ctaLink).toHaveAttribute(
      'href',
      'https://cozy-voyage.lodgify.com/de/4578016/alle-objekte'
    );
  });

  it('renders destination links for Berlin and Dresden', () => {
    render(<IntlWrapper><HomeBanner /></IntlWrapper>);
    const berlinLinks = screen.getAllByRole('link', { name: /berlin/i });
    const dresdenLinks = screen.getAllByRole('link', { name: /dresden/i });
    expect(berlinLinks.length).toBeGreaterThan(0);
    expect(dresdenLinks.length).toBeGreaterThan(0);
  });
});
