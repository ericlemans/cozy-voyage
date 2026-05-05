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

  it('renders all 3 images with descriptive alt text', () => {
    render(<Gallery />);
    expect(screen.getByAltText('Berlin Stylish 135m²')).toBeInTheDocument();
    expect(screen.getByAltText('Dresden Frauenkirche')).toBeInTheDocument();
    expect(screen.getByAltText('Berlin Wohnzimmer')).toBeInTheDocument();
  });

  it('renders location labels for all 3 images', () => {
    render(<Gallery />);
    expect(screen.getByText('Stylish 135m²')).toBeInTheDocument();
    expect(screen.getByText('Frauenkirche')).toBeInTheDocument();
    expect(screen.getByText('Wohnzimmer')).toBeInTheDocument();
  });
});
