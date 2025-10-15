import {OfferDTO} from '../../types/offerDTO.ts';
import {AppRoute} from '../../const.ts';
import {useCallback, useState} from 'react';

interface CityCardProps {
  offer: OfferDTO;
  onMouseEnter: (offerId: number) => void;
  onMouseLeave: () => void;
}

export function CityCard({offer, onMouseEnter, onMouseLeave}: CityCardProps) {
  return (
    <article className="cities__card place-card" onMouseEnter={() => onMouseEnter(offer.id)} onMouseLeave={onMouseLeave}>
      <div className="place-card__mark">
        <span>{offer.mark}</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
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

export function CityCardList({offers}: {offers: OfferDTO[]}) {
  const [activeOffer, setActiveOffer] = useState<number | null>(null);

  const handleMouseEnter = useCallback((offerId: number) => {
    setActiveOffer(offerId);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setActiveOffer(null);
  }, []);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <CityCard
          key={offer.id}
          offer={offer}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </div>);
}
