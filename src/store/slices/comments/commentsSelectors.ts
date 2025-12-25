import {State} from '../../../types/state.ts';
import {NameSpace} from '../../../const.ts';
import {createSelector} from '@reduxjs/toolkit';
import {ReviewData} from '../../../types/reviews/reviewData.ts';

const getComments = (state: Pick<State, NameSpace.Comments>) =>
  state[NameSpace.Comments].comments;

export const getCommentsFiltered = createSelector(
  [getComments],
  (reviews) =>
    reviews.length > 0 ? reviews.toSorted((a: ReviewData, b: ReviewData) => new Date(b.date) > new Date(a.date) ? 1 : -1).slice(0, 10) : []
);

export const getTotalComments = (state: Pick<State, NameSpace.Comments>) =>
  state[NameSpace.Comments].comments.length;

export const getCommentsLoadingStatus = (state: Pick<State, NameSpace.Comments>): boolean =>
  state[NameSpace.Comments].isCommentsLoading;

export const getCommentsErrorStatus = (state: Pick<State, NameSpace.Comments>): boolean =>
  state[NameSpace.Comments].hasError;
