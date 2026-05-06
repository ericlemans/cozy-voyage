import React from 'react';
import { render, screen } from '@testing-library/react';
import TestimonialCarousel from '@/components/home/TestimonialCarousel/TestimonialCarousel';

describe('TestimonialCarousel', () => {
  it('renders the #testimonials wrapper', () => {
    render(<TestimonialCarousel />);
    expect(document.getElementById('testimonials')).toBeInTheDocument();
  });

  it('renders the heading', () => {
    render(<TestimonialCarousel />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent('Was unsere Gäste über uns sagen');
  });

  it('renders 8 swiper slides', () => {
    render(<TestimonialCarousel />);
    const slides = screen.getAllByTestId('swiper-slide');
    expect(slides).toHaveLength(8);
  });

  it('renders 3 award images with alt "Airbnb Guest Favourite"', () => {
    render(<TestimonialCarousel />);
    const awardImages = screen.getAllByAltText('Airbnb Guest Favourite');
    expect(awardImages).toHaveLength(3);
  });
});
