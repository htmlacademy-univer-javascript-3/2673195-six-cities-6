import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../../types/state.ts';
import {AxiosInstance} from 'axios';
import {APIRoute} from '../../const.ts';
import {CommentsListDto} from '../../types/responses/comments/commentsListDto.ts';
import {CommentDto} from '../../types/responses/comments/commentDto.ts';

export const fetchCommentsAction = createAsyncThunk<CommentsListDto, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchComments',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<CommentsListDto>(APIRoute.Comments(offerId));
    return data;
  },
);

export const postCommentAction = createAsyncThunk<CommentDto, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/postComment',
  async (id, {extra: api}) => {
    const {data} = await api.post<CommentDto>(APIRoute.Offer(id));
    return data;
  },
);
