import { City } from './city';
import {OfferDTO} from './offerDTO.ts';

export type State = {
  city: City;
  offers: OfferDTO[];
};

