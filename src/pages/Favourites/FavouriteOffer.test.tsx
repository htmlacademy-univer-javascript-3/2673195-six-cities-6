import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { FavouriteOffer } from './FavouriteOffer';
import { OffersListItem } from '../../types/responses/offers/offersList';
import { AppRoute } from '../../const';

describe('FavouriteOffer Component', () => {
  const mockOffer: OffersListItem = {
    id: '1',
    title: 'Apartment',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.865610000000004,
      longitude: 2.350499,
      zoom: 16
    },
    isFavourite: true,
    isPremium: true,
    rating: 4.8,
    previewImage: 'img/apartment-01.jpg'
  };

  it('should render offer title', () => {
    render(<FavouriteOffer offer={mockOffer} />);

    const titleLink = screen.getByRole('link', { name: mockOffer.title });
    expect(titleLink).toBeInTheDocument();
    expect(titleLink).toHaveAttribute('href', AppRoute.Offer(mockOffer.id));
  });

  it('should render offer price', () => {
    render(<FavouriteOffer offer={mockOffer} />);

    expect(screen.getByText(`€${mockOffer.price}`)).toBeInTheDocument();
    expect(screen.getByText('/ night')).toBeInTheDocument();
  });

  it('should render offer type', () => {
    render(<FavouriteOffer offer={mockOffer} />);

    expect(screen.getByText(mockOffer.type)).toBeInTheDocument();
  });

  it('should render image with correct attributes', () => {
    render(<FavouriteOffer offer={mockOffer} />);

    const image = screen.getByAltText('Place image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mockOffer.previewImage);
    expect(image).toHaveAttribute('width', '150');
    expect(image).toHaveAttribute('height', '110');
  });

  it('should have correct CSS classes', () => {
    const { container } = render(<FavouriteOffer offer={mockOffer} />);

    const article = container.querySelector('article');
    expect(article).toHaveClass('favorites__card');
    expect(article).toHaveClass('place-card');

    expect(screen.getByText(mockOffer.title).closest('h2')).toHaveClass('place-card__name');
  });
});
