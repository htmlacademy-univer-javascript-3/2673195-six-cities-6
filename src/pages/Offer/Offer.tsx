import {OfferDTO, OfferReview} from '../../types/offerDTO.ts';
import {Navigate, useParams} from 'react-router-dom';
import {User} from '../../types/user.ts';
import {Navigation} from '../../components/Navigation.tsx';
import {ReviewForm} from './ReviewForm.tsx';
import {OfferImages} from './OfferImage.tsx';
import {OfferInside} from './OfferInside.tsx';
import {HostInfo} from './HostInfo.tsx';
import {ReviewsList} from './Review.tsx';
import {OfferDescription} from './OfferDescription.tsx';
import {NearPlaces} from './NearPlaces.tsx';

interface OfferProps {
  offers: OfferDTO[];
  reviews: OfferReview[];
  users: User[];
}

export function Offer({offers, reviews, users}: OfferProps) {
  const {id} = useParams();
  const idNumber = Number(id);
  const offer = offers.find((x) => x.id === idNumber);

  if (!offer) {
    return <Navigate to="/*"/>;
  }

  const offerReviews = reviews.filter((x) => offer.reviewIds.includes(x.id));

  const host = users.find((x) => x.id === offer.hostId)!;

  return (
    <div className="page">
      <Navigation/>
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferImages imageUrls={offer.photos}/>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <div className="offer__mark">
                <span>Premium</span>
              </div>
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offer.name}
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: `${(offer.rating * 20)}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offer.bedroomsCount} {offer.bedroomsCount > 1 ? 'Bedrooms' : 'Bedroom'}
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offer.maxAdults} {offer.maxAdults > 1 ? 'adults' : 'adult'}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer.nightCost}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>

              <OfferInside inside={offer.inside}/>

              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <HostInfo host={host}/>
                <OfferDescription description={offer.description}/>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
                </h2>
                <ReviewsList reviews={offerReviews} users={users}/>
                <ReviewForm/>
              </section>
            </div>
          </div>
          <section className="offer__map map"/>
        </section>
        <NearPlaces offers={offers}/>
      </main>
    </div>
  );
}
