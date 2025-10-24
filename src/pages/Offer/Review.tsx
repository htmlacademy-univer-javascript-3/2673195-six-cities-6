import {OfferReview} from '../../types/offerDTO.ts';
import {User} from '../../types/user.ts';

export function Review({review, user}: { review: OfferReview; user: User }) {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.text}
        </p>
        <time className="reviews__time" dateTime={review.date.toISOString().slice(0, 10)}>
          {review.date.toLocaleDateString('en-US', {year: 'numeric', month: 'long'})}
        </time>
      </div>
    </li>);
}

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
