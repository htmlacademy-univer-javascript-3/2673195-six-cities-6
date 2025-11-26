import {State} from '../../../types/state.ts';
import {NameSpace} from '../../../const.ts';
import {OffersList} from '../../../types/responses/offers/offersList.ts';

export const getOffersInCity = (state: Pick<State, NameSpace.Offers | NameSpace.City>): OffersList => {
  const offers = state[NameSpace.Offers].offers;
  const city = state[NameSpace.City].cityName;
  return offers.filter((x) => x.city.name === city);
};

export const getOffersLoadingStatus = (state: Pick<State, NameSpace.Offers>):
   boolean => state[NameSpace.Offers].isOffersDataLoading;

export const getOffersErrorStatus = (state: Pick<State, NameSpace.Offers>):
  boolean => state[NameSpace.Offers].hasError;
