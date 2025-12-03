import {Review} from './Review.tsx';

import {CommentDto} from '../../types/responses/comments/commentDto.ts';

export function ReviewsList({reviews}: { reviews: CommentDto[] }) {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <Review key={review.id} review={review}/>
      ))}
    </ul>);
}
