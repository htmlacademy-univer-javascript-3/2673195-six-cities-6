import {State} from '../../../types/state.ts';
import {NameSpace} from '../../../const.ts';
import {OffersList} from '../../../types/responses/offers/offersList.ts';

export const getFavouritesInCity = (state: Pick<State, NameSpace.Favourites | NameSpace.City>): OffersList => {
  const favourites = state[NameSpace.Favourites].favourites;
  const city = state[NameSpace.City].cityName;
  return favourites.filter((x) => x.city.name === city);
};

export const getFavouritesLoadingStatus = (state: Pick<State, NameSpace.Favourites>):
   boolean => state[NameSpace.Favourites].isFavouritesDataLoading;

export const getFavouritesErrorStatus = (state: Pick<State, NameSpace.Favourites>):
  boolean => state[NameSpace.Favourites].hasError;
