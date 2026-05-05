import React from 'react';
import { render, screen } from '@testing-library/react';
import HomeBanner from '@/components/home/Banner/HomeBanner';

describe('HomeBanner', () => {
  it('renders the hero heading with Cozy and Voyage', () => {
    render(<HomeBanner />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Cozy');
    expect(heading).toHaveTextContent('Voyage');
  });

  it('renders the Alle Objekte CTA link with correct href', () => {
    render(<HomeBanner />);
    const ctaLink = screen.getByRole('link', { name: /alle objekte/i });
    expect(ctaLink).toHaveAttribute(
      'href',
      'https://cozy-voyage.lodgify.com/de/4578016/alle-objekte'
    );
  });

  it('renders destination links for Berlin and Dresden', () => {
    render(<HomeBanner />);
    const berlinLinks = screen.getAllByRole('link', { name: /berlin/i });
    const dresdenLinks = screen.getAllByRole('link', { name: /dresden/i });
    expect(berlinLinks.length).toBeGreaterThan(0);
    expect(dresdenLinks.length).toBeGreaterThan(0);
  });
});
