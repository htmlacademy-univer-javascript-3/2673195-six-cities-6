import { render, screen } from '@testing-library/react';
import { vi, describe, it, expect } from 'vitest';
import { NearPlaces } from './NearPlaces';

vi.mock('../../components/OffersListComponent.tsx', () => ({
  OffersListComponent: vi.fn(() => <div>Offers List</div>)
}));

describe('NearPlaces Component (minimal)', () => {
  const mockOffers = [
    { id: '1', title: 'Offer 1' },
    { id: '2', title: 'Offer 2' },
    { id: '3', title: 'Offer 3' },
    { id: '4', title: 'Offer 4' },
  ] as never;

  it('should render title', () => {
    render(<NearPlaces offers={mockOffers} />);
    expect(screen.getByText('Other places in the neighbourhood')).toBeInTheDocument();
  });

  it('should render OffersListComponent', () => {
    render(<NearPlaces offers={mockOffers} />);
    expect(screen.getByText('Offers List')).toBeInTheDocument();
  });

  it('should have correct section classes', () => {
    render(<NearPlaces offers={mockOffers} />);

    const section = screen.getByText('Other places in the neighbourhood').parentElement;
    expect(section).toHaveClass('near-places');
    expect(section).toHaveClass('places');
  });
});
