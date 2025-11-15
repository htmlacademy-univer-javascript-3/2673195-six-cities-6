import {Navigation} from '../../components/Navigation.tsx';
import {OfferDTO} from '../../types/offerDTO.ts';
import {AppRoute} from '../../const.ts';
import {CityDTO} from '../../types/cityDTO.ts';
import {useAppSelector} from '../../hooks/use-app-selector.ts';

function FavouriteOffer({offer} : {offer: OfferDTO}) {
  const offerLink = AppRoute.Offer.replace(':id', offer.id.toString());

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href={offerLink}>
          <img className="place-card__image" src={offer.photos[0]} width="150" height="110" alt="Place image"/>
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.nightCost}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href={offerLink}>{offer.name}</a>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>);
}

function CityFavourites({city, cityOffers} : {city: CityDTO; cityOffers: OfferDTO[]}) {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city.name}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {cityOffers.map((offer) => <FavouriteOffer offer={offer} key={offer.id}/>)}
      </div>
    </li>);
}

export function Favourites() {
  const savedOffers = useAppSelector((state) => state.offers);

  const cities = [...new Set(savedOffers.map((offerDTO: OfferDTO) => offerDTO.city))];

  const offersByCity = cities.map((city) => ({
    city: city,
    offers: savedOffers.filter((offer) => offer.city === city),
  }));

  return (
    <div className="page">
      <Navigation/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {offersByCity.map((cityWithOffer) => (
                <CityFavourites key={cityWithOffer.city.name} city={cityWithOffer.city} cityOffers={cityWithOffer.offers}/>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="/public">
          <img className="footer__logo" src="/img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
}
