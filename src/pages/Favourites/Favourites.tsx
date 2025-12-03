import {Navigation} from '../../components/Navigation.tsx';
import {CityFavourites} from './CityFavourites.tsx';
import {useAppSelector} from '../../hooks/useAppSelector.ts';
import {
  getFavouritesErrorStatus,
  getFavouritesLoadingStatus
} from '../../store/slices/favourites/favouritesSelectors.ts';
import {CITIES_LIST} from '../../const.ts';

export function Favourites() {
  const favouritesLoaded = useAppSelector(getFavouritesLoadingStatus);
  const hasError = useAppSelector(getFavouritesErrorStatus);

  if (!favouritesLoaded) {
    return <>Загрузка</>;
  }

  if (hasError) {
    return <>Ошибка</>;
  }

  return (
    <div className="page">
      <Navigation/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {CITIES_LIST.map((cityWithOffer) => (
                <CityFavourites cityName={cityWithOffer} key={cityWithOffer}/>
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
