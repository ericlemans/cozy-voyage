import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CozyButton from '@/components/shared/Button/CozyButton';

const mockPush = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: mockPush, replace: jest.fn() }),
}));

describe('CozyButton', () => {
  beforeEach(() => {
    mockPush.mockClear();
  });

  it('renders children', () => {
    render(<CozyButton href="/test">Click me</CozyButton>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('applies className prop', () => {
    render(<CozyButton href="/test" className="custom-class">Button</CozyButton>);
    expect(screen.getByRole('button')).toHaveClass('custom-class');
  });

  it('calls router.push with href on click', () => {
    render(<CozyButton href="/booking">Book</CozyButton>);
    fireEvent.click(screen.getByRole('button'));
    expect(mockPush).toHaveBeenCalledWith('/booking');
  });
});
