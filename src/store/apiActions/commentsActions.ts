import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../../types/state.ts';
import {AxiosInstance} from 'axios';
import {APIRoute} from '../../const.ts';
import {PostCommentRequest} from '../../types/requests/postCommentRequest.ts';
import {mapCommentToReview} from '../../utils/mapCommentToReview.ts';
import {CommentList} from '../../types/responses/comments/commentList.ts';
import {ReviewListData} from '../../types/reviews/reviewListData.ts';
import {ReviewData} from '../../types/reviews/reviewData.ts';

export const fetchCommentsAction = createAsyncThunk<ReviewListData, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchComments',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<CommentList>(APIRoute.Comments(offerId));
    return data.map((comment) => mapCommentToReview(comment));
  },
);

export const postCommentAction = createAsyncThunk<ReviewData, PostCommentRequest, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/postComment',
  async ({ offerId, comment } : PostCommentRequest, {extra: api}) => {
    const {data} = await api.post<ReviewData>(APIRoute.Offer(offerId), comment);
    return data;
  },
);
