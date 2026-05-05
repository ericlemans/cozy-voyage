import React from 'react';
import { render } from '@testing-library/react';
import Header from '@/components/shared/Header/Header';

describe('Header', () => {
  it('renders without crashing', () => {
    const { container } = render(<Header />);
    expect(container).toBeInTheDocument();
  });

  it('renders no visible content', () => {
    const { container } = render(<Header />);
    expect(container.innerHTML).toBe('');
  });
});
