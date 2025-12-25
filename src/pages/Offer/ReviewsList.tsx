import {ReviewListData} from '../../types/reviews/reviewListData.ts';
import {Review} from './Review.tsx';

export function ReviewsList({reviews}: { reviews: ReviewListData }) {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <Review key={review.id} review={review}/>
      ))}
    </ul>);
}
