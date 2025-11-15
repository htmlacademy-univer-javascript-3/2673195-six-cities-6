import {createAction} from '@reduxjs/toolkit';
import {CityName} from '../types/cityName.ts';

export const Action = {
  CHANGE_CITY: 'CHANGE_CITY',
  LOAD_OFFERS: 'LOAD_OFFERS',
  LOAD_REVIEWS: 'LOAD_REVIEWS',
};

export const changeCity = createAction(Action.CHANGE_CITY, (city: CityName) => ({
  payload: city
}));

export const loadOffers = createAction(Action.LOAD_OFFERS);

export const loadReviews = createAction(Action.LOAD_REVIEWS);
