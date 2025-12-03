import {OffersList} from '../responses/offers/offersList.ts';

export type FavouritesState = {
  favourites: OffersList;
  isFavouritesDataLoading: boolean;
  hasError: boolean;
};
