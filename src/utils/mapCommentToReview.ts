import {CommentDto} from '../types/responses/comments/commentsDto.ts';
import {ReviewData} from '../types/reviews/reviewData.ts';

export const mapCommentToReview = (dto: CommentDto): ReviewData => ({
  ...dto,
  date: new Date(dto.date)
});
