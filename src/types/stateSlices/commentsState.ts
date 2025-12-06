import {ReviewListData} from '../reviews/reviewListData.ts';

export type CommentsState = {
  comments: ReviewListData;
  totalComments: number;
  isCommentsLoading: boolean;
  hasError: boolean;
};
