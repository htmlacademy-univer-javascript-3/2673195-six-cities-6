import {OfferDTO, OfferReview} from './offerDTO.ts';
import {CityName} from './cityName.ts';

export type State = {
  city: CityName;
  offers: OfferDTO[];
  reviews: OfferReview[];
};

