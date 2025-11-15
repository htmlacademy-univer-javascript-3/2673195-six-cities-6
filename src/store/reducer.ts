import {createReducer} from '@reduxjs/toolkit';
import {changeCity, loadOffers, loadReviews} from './action.ts';
import {offers} from '../mocks/offers.ts';
import {State} from '../types/state.ts';
import {reviews} from '../mocks/reviews.ts';
import {CITIES} from '../const.ts';

const initialState : State = {
  city: CITIES.Paris,
  offers: [],
  reviews: []
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state) => {
      state.offers = offers;
    })
    .addCase(loadReviews, (state) => {
      state.reviews = reviews;
    });
});
