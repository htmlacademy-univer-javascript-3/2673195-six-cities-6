import {CityDto} from '../cityDto.ts';
import {Location} from '../../location.ts';

export type OffersList = OffersListItem[];

export type OffersListItem = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: CityDto;
  location: Location;
  isFavourite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}
