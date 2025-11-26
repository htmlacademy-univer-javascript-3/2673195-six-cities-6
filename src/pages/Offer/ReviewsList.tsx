import {UserDto} from '../../types/responses/userDto.ts';
import {Review} from './Review.tsx';

import {CommentDto} from '../../types/responses/comments/commentDto.ts';

export function ReviewsList({reviews, users}: { reviews: CommentDto[]; users: UserDto[] }) {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => {
        const user = users.find((x) => x.id === review.authorId)!;
        return (
          <Review key={review.id} review={review} user={user}/>
        );
      })}
    </ul>);
}
