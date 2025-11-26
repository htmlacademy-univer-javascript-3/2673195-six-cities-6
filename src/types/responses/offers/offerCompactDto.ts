import {CityDto} from '../cityDto.ts';

export type OfferCompactDto = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: CityDto;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}
