import {State} from '../../../types/state.ts';
import {NameSpace} from '../../../const.ts';
import {OffersList} from '../../../types/responses/offers/offersList.ts';

export const getOffers = (state: Pick<State, NameSpace.Offers>):
  OffersList => state[NameSpace.Offers].offers;

export const getOffersLoadingStatus = (state: Pick<State, NameSpace.Offers>):
   boolean => state[NameSpace.Offers].isOffersDataLoading;

export const getErrorStatus = (state: Pick<State, NameSpace.Offers>):
  boolean => state[NameSpace.Offers].hasError;
