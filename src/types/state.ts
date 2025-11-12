import {OfferDTO, OfferReview} from './offerDTO.ts';
import {City} from '../const.ts';

export type State = {
  city: City;
  offers: OfferDTO[];
  reviews: OfferReview[];
};

