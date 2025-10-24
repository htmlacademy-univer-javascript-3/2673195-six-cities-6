import {useState} from 'react';

interface ReviewFormState {
  rating: number | null;
  content: string;
}

function ReviewFormRating({handleRatingChange} : { handleRatingChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <div className="reviews__rating-form form__rating">
      <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars"
        type="radio"
        onChange={handleRatingChange}
      />
      <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>

      <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars"
        type="radio"
        onChange={handleRatingChange}
      />
      <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>

      <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars"
        type="radio"
        onChange={handleRatingChange}
      />
      <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>

      <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars"
        type="radio"
        onChange={handleRatingChange}
      />
      <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>

      <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star"
        type="radio"
        onChange={handleRatingChange}
      />
      <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </div>
  );
}

export function ReviewForm() {
  const [formData, setFormData] = useState<ReviewFormState>({
    rating: null,
    content: '',
  });

  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      rating: Number(e.target.value),
    });
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      content: e.target.value,
    });
  };

  const isFormValid = formData.rating !== null && formData.content.length >= 50 && formData.content.length <= 300;

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <ReviewFormRating handleRatingChange={handleRatingChange} />
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="reviewText"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.content}
        onChange={handleTextChange}
        minLength={50}
        maxLength={300}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isFormValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
