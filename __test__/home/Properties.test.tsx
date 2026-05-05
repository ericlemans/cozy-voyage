import React from 'react';
import { render, screen } from '@testing-library/react';
import Properties from '@/components/home/Properties/Properties';

describe('Properties', () => {
  it('renders all 4 property titles', () => {
    render(<Properties />);
    expect(screen.getByText("Stylish 135m² am Ku'damm")).toBeInTheDocument();
    expect(screen.getByText('Frauenkirche — Für 2–4 Personen')).toBeInTheDocument();
    expect(screen.getByText('Frauenkirche — Für 4–6 Personen')).toBeInTheDocument();
    expect(screen.getByText('Altstadt Zentrum — Für 8 Personen')).toBeInTheDocument();
  });

  it("renders the featured property (Berlin Ku'damm)", () => {
    render(<Properties />);
    expect(screen.getByText("Stylish 135m² am Ku'damm")).toBeInTheDocument();
  });

  it('renders the Alle Objekte ansehen link with correct href', () => {
    render(<Properties />);
    const link = screen.getByRole('link', { name: /alle objekte ansehen/i });
    expect(link).toHaveAttribute(
      'href',
      'https://cozy-voyage.lodgify.com/de/4578016/alle-objekte'
    );
  });
});
