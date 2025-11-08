import {OfferDTO} from '../types/offerDTO.ts';
import {amsterdam} from './cities.ts';

export const offers: OfferDTO[] = [
  {
    id: 0,
    name: 'Beautiful & luxurious studio at great location',
    type: 'Apartment',
    mark: 'Premium',
    city: amsterdam,
    bedroomsCount: 3,
    maxAdults: 3,
    nightCost: 120,
    inside: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine', 'Coffee machine', 'Dishwasher', 'Towels', 'Baby seat', 'Cabel TV'],
    hostId: 0,
    description: ['A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.'],
    rating: 4.8,
    reviewIds: [0],
    photos: ['/img/apartment-01.jpg', '/img/room.jpg', '/img/apartment-02.jpg',
      '/img/apartment-03.jpg', '/img/studio-01.jpg', '/img/apartment-01.jpg'],
    location: {
      lat: 52.3909553943508,
      lng: 4.85309666406198
    }
  },
  {
    id: 1,
    name: 'Wood and stone place',
    type: 'Room',
    mark: 'Premium',
    city: amsterdam,
    bedroomsCount: 2,
    maxAdults: 2,
    nightCost: 80,
    inside: ['Fridge', 'Washing machine', 'Coffee machine', 'Dishwasher', 'Towels', 'Baby seat', 'Cabel TV'],
    hostId: 1,
    description: ['A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.'],
    rating: 5,
    reviewIds: [0],
    photos: ['/img/room.jpg', '/img/apartment-01.jpg', '/img/apartment-02.jpg'],
    location: {
      lat: 52.3609553943508,
      lng: 4.85309666406198
    }
  },
  {
    id: 2,
    name: 'Canal View Prinsengracht',
    type: 'Apartment',
    mark: 'Premium',
    city: amsterdam,
    bedroomsCount: 4,
    maxAdults: 5,
    nightCost: 132,
    inside: ['Fridge', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    hostId: 1,
    description: ['A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.'],
    rating: 4.1,
    reviewIds: [0],
    photos: ['/img/apartment-02.jpg', '/img/room.jpg', '/img/apartment-01.jpg'],
    location: {
      lat: 52.39095539435088,
      lng: 4.929309666406198
    }
  },
  {
    id: 3,
    name: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    mark: 'Premium',
    city: amsterdam,
    bedroomsCount: 1,
    maxAdults: 1,
    nightCost: 180,
    inside: ['Wi-Fi'],
    hostId: 0,
    description: ['A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.'],
    rating: 5,
    reviewIds: [0],
    photos: ['/img/apartment-03.jpg', '/img/apartment-01.jpg', '/img/apartment-02.jpg'],
    location: {
      lat: 52.3809553943508,
      lng: 4.939309666406198
    }
  },
];

export function GetNearPlaces(offer: OfferDTO): OfferDTO[] {
  return offers.filter((x) => x.city === offer.city).slice(0, 3);
}
