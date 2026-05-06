import React from 'react';
import { render } from '@testing-library/react';
import LodgifyBookingBar from '@/components/shared/Lodgify/LodgifyBookingBar/LodgifyBookingBar';

describe('LodgifyBookingBar', () => {
  it('renders the #lodgify-book-now-box div', () => {
    render(<LodgifyBookingBar rentalId="4578017" />);
    expect(document.getElementById('lodgify-book-now-box')).toBeInTheDocument();
  });

  it('passes rentalId as data-rental-id attribute', () => {
    render(<LodgifyBookingBar rentalId="4578017" />);
    const el = document.getElementById('lodgify-book-now-box');
    expect(el).toHaveAttribute('data-rental-id', '4578017');
  });

  it('appends a style tag to document.head on mount', () => {
    const before = document.head.querySelectorAll('style').length;
    render(<LodgifyBookingBar rentalId="4578017" />);
    expect(document.head.querySelectorAll('style').length).toBeGreaterThan(before);
  });

  it('removes the style tag from document.head on unmount', () => {
    const before = document.head.querySelectorAll('style').length;
    const { unmount } = render(<LodgifyBookingBar rentalId="4578017" />);
    expect(document.head.querySelectorAll('style').length).toBeGreaterThan(before);
    unmount();
    expect(document.head.querySelectorAll('style').length).toBe(before);
  });
});
