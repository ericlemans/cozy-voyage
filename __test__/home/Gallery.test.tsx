import React from 'react';
import { render, screen } from '@testing-library/react';
import Gallery from '@/components/home/Gallery/Gallery';

describe('Gallery', () => {
  it('renders the #gallery section wrapper', () => {
    render(<Gallery />);
    expect(document.getElementById('gallery')).toBeInTheDocument();
  });

  it('renders the "In Bildern" heading', () => {
    render(<Gallery />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent('In');
    expect(heading).toHaveTextContent('Bildern');
  });

  it('renders property section headings for Berlin and Dresden', () => {
    render(<Gallery />);
    expect(screen.getByRole('heading', { level: 3, name: 'Berlin' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: 'Dresden' })).toBeInTheDocument();
  });

  it('renders scroll buttons for each property row', () => {
    render(<Gallery />);
    const backButtons = screen.getAllByRole('button', { name: 'Zurück' });
    const forwardButtons = screen.getAllByRole('button', { name: 'Weiter' });
    expect(backButtons).toHaveLength(2);
    expect(forwardButtons).toHaveLength(2);
  });
});
