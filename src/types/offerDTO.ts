import {Point} from './point.ts';
import {City} from './city.ts';

export type OfferDTO = {
  id: number;
  name: string;
  type: string;
  mark: string;
  city: City;
  bedroomsCount: number;
  maxAdults: number;
  nightCost: number;
  inside: string[];
  hostId: number;
  description: string[];
  rating: number;
  reviewIds: number[];
  photos: string[];
  location: Point;
}

export type OfferReview = {
  id: number;
  stars: number;
  text: string;
  authorId: number;
  date: Date;
}
