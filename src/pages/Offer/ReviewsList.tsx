import {OfferReview} from '../../types/offerDTO.ts';
import {User} from '../../types/user.ts';
import {Review} from './Review.tsx';

export function ReviewsList({reviews, users}: { reviews: OfferReview[]; users: User[] }) {
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
