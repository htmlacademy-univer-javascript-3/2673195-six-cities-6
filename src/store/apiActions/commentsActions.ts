import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../../types/state.ts';
import {AxiosInstance} from 'axios';
import {APIRoute} from '../../const.ts';
import {CommentsListDto} from '../../types/responses/comments/commentsListDto.ts';
import {CommentDto} from '../../types/responses/comments/commentDto.ts';
import {PostCommentRequest} from '../../types/requests/postCommentRequest.ts';

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

export const postCommentAction = createAsyncThunk<CommentDto, PostCommentRequest, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/postComment',
  async ({ offerId, comment } : PostCommentRequest, {extra: api}) => {
    const {data} = await api.post<CommentDto>(APIRoute.Offer(offerId), comment);
    return data;
  },
);
