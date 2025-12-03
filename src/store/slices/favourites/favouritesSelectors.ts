import {State} from '../../../types/state.ts';
import {NameSpace} from '../../../const.ts';
import {OffersList} from '../../../types/responses/offers/offersList.ts';
import {createSelector} from '@reduxjs/toolkit';
import {getCityName} from '../city/citySelectors.ts';

const getFavourites = (state: Pick<State, NameSpace.Favourites>): OffersList =>
  state[NameSpace.Favourites].favourites;

export const getFavouritesInCity = createSelector(
  [getFavourites, getCityName],
  (favourites, cityName) =>
    favourites.filter((x) => x.city.name === cityName)
);

export const getFavouritesLoadingStatus = (state: Pick<State, NameSpace.Favourites>):
   boolean => state[NameSpace.Favourites].isFavouritesDataLoading;

export const getFavouritesErrorStatus = (state: Pick<State, NameSpace.Favourites>):
  boolean => state[NameSpace.Favourites].hasError;
