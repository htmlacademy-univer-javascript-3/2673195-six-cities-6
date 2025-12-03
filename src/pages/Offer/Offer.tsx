import {useParams} from 'react-router-dom';
import {Navigation} from '../../components/Navigation.tsx';
import {Map} from '../../components/Map.tsx';
import {ReviewForm} from './ReviewForm.tsx';
import {OfferImages} from './OfferImage.tsx';
import {OfferInside} from './OfferInside.tsx';
import {HostInfo} from './HostInfo.tsx';
import {OfferDescription} from './OfferDescription.tsx';
import {NearPlaces} from './NearPlaces.tsx';
import {ReviewsList} from './ReviewsList.tsx';
import {fetchOfferAction} from '../../store/apiActions/offersActions.ts';
import {useAppDispatch} from '../../hooks/useAppDispatch.ts';
import {useEffect, useState} from 'react';
import {OfferDto} from '../../types/responses/offers/offerDto.ts';
import {AxiosError} from 'axios';
import {CommentsListDto} from '../../types/responses/comments/commentsListDto.ts';
import {OffersNearbyDto} from '../../types/responses/offers/offersNearbyDto.ts';

export function Offer() {
  const {id} = useParams();
  const dispatch = useAppDispatch();

  const [offer, setOffer] = useState<OfferDto | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      setLoading(true);
      dispatch(fetchOfferAction(id))
        .unwrap()
        .then((offerData) => {
          setOffer(offerData);
          setError(null);
        })
        .catch((err: AxiosError) => {
          setError(err.message || 'Failed to load offer');
          setOffer(null);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [dispatch, id]);

  const offerReviews: CommentsListDto = [];

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !offer) {
    return <div>Error: {error}</div>;
  }

  const nearPlaces : OffersNearbyDto = [];
  const host = offer.host;

  return (
    <div className="page">
      <Navigation/>
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferImages imageUrls={offer.images}/>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <div className="offer__mark">
                <span>Premium</span>
              </div>
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offer.title}
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
                  {offer.bedrooms} {offer.bedrooms > 1 ? 'Bedrooms' : 'Bedroom'}
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offer.maxAdults} {offer.maxAdults > 1 ? 'adults' : 'adult'}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>

              <OfferInside inside={offer.goods}/>

              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <HostInfo host={host}/>
                <OfferDescription description={offer.description}/>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot; <span className="reviews__amount">{offerReviews.length}</span>
                </h2>
                <ReviewsList reviews={offerReviews}/>
                <ReviewForm/>
              </section>
            </div>
          </div>
          <div className="offer__map map">
            <Map city={offer.city} points={nearPlaces.map((x) => x.location)} className={'offer__map map'}/>
          </div>
        </section>
        <NearPlaces offers={nearPlaces}/>
      </main>
    </div>
  );
}
