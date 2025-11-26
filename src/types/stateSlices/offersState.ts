import {OffersList} from '../responses/offers/offersList.ts';

export type OffersState = {
  offers: OffersList;
  isOffersDataLoading: boolean;
  hasError: boolean;
};
