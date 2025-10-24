import {OfferDTO} from '../../types/offerDTO.ts';
import {AppRoute} from '../../const.ts';

export function NearPlace({offer}: { offer: OfferDTO }) {
  return (
    <article className="near-places__card place-card">
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <a href={`${AppRoute.Offer.replace(':id', offer.id.toString())}`}>
          <img className="place-card__image" src={offer.photos[0]} width="260" height="200"
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.nightCost}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{offer.name}</a>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export function NearPlaces({offers}: { offers: OfferDTO[] }) {
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {offers.slice(0, 3).map((offer: OfferDTO) => (
            <NearPlace offer={offer} key={offer.name}/>
          ))}
        </div>
      </section>
    </div>
  );
}
