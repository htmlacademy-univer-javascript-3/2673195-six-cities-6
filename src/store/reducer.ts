import {createReducer} from '@reduxjs/toolkit';
import {paris} from '../mocks/cities.ts';
import {changeCity, fillOffersList} from './action.ts';
import {offers} from '../mocks/offers.ts';
import {State} from '../types/state.ts';

const initialState : State = {
  city: paris,
  offers: []
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffersList, (state) => {
      state.offers = offers.filter((offer) => offer.city === state.city);
    });
});
