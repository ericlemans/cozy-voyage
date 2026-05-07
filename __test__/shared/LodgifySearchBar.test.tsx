import React from 'react';
import { render } from '@testing-library/react';
import LodgifySearchBar from '@/components/shared/Lodgify/LodgifySearchBar/LodgifySearchBar';

describe('LodgifySearchBar', () => {
  it('renders the #lodgify-search-bar div', () => {
    render(<LodgifySearchBar />);
    expect(document.getElementById('lodgify-search-bar')).toBeInTheDocument();
  });

  it('has the correct data-website-id', () => {
    render(<LodgifySearchBar />);
    const el = document.getElementById('lodgify-search-bar');
    expect(el).toHaveAttribute('data-website-id', '568678');
  });

  it('appends a style tag to document.head on mount', () => {
    const before = document.head.querySelectorAll('style').length;
    render(<LodgifySearchBar />);
    expect(document.head.querySelectorAll('style').length).toBeGreaterThan(before);
  });

  it('removes the style tag from document.head on unmount', () => {
    const before = document.head.querySelectorAll('style').length;
    const { unmount } = render(<LodgifySearchBar />);
    expect(document.head.querySelectorAll('style').length).toBeGreaterThan(before);
    unmount();
    expect(document.head.querySelectorAll('style').length).toBe(before);
  });
});
