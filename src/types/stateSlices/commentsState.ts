import {CommentsListDto} from '../responses/comments/commentsListDto.ts';

export type CommentsState = {
  comments: CommentsListDto;
  totalComments: number;
  isCommentsLoading: boolean;
  hasError: boolean;
};
