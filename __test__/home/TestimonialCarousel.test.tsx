import React from 'react';
import { render, screen } from '@testing-library/react';
import TestimonialCarousel from '@/components/home/TestimonialCarousel/TestimonialCarousel';
import { IntlWrapper } from '../utils/intl-wrapper';

describe('TestimonialCarousel', () => {
  it('renders the #testimonials wrapper', () => {
    render(<IntlWrapper><TestimonialCarousel /></IntlWrapper>);
    expect(document.getElementById('testimonials')).toBeInTheDocument();
  });

  it('renders the heading with DE translations', () => {
    render(<IntlWrapper><TestimonialCarousel /></IntlWrapper>);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent('Was Gäste');
    expect(heading).toHaveTextContent('über uns sagen');
  });

  it('renders testimonial card content', () => {
    render(<IntlWrapper><TestimonialCarousel /></IntlWrapper>);
    expect(screen.getByText(/Diese Wohnung ist die perfekte Bleibe/)).toBeInTheDocument();
    expect(screen.getByText(/Very good location/)).toBeInTheDocument();
  });

  it('renders the Airbnb Guest Favourite badge', () => {
    render(<IntlWrapper><TestimonialCarousel /></IntlWrapper>);
    expect(screen.getByAltText('Airbnb Guest Favourite')).toBeInTheDocument();
  });
});
