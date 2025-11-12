import {createAction} from '@reduxjs/toolkit';
import {City} from '../types/city.ts';

export const Action = {
  CHANGE_CITY: 'CHANGE_CITY',
  FILL_OFFERS_LIST: 'FILL_OFFERS_LIST',
};

export const changeCity = createAction(Action.CHANGE_CITY, (city: City) => ({
  payload: city
}));

export const fillOffersList = createAction(Action.FILL_OFFERS_LIST);
