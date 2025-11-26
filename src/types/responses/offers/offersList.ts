import {Location} from '../../location.ts';
import {CityDto} from '../cityDto.ts';

export type OffersList = OffersList[];

export type OffersListItem = {
  id: number;
  title: string;
  type: string;
  isPremium: boolean;
  city: CityDto;
  location: Location;
  bedroomsCount: number;
  maxAdults: number;
  nightCost: number;
  inside: string[];
  hostId: number;
  description: string[];
  rating: number;
  reviewIds: number[];
  photos: string[];
}
