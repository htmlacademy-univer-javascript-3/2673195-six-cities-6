import {Navigation} from '../../components/navigation/Navigation.tsx';
import {CityFavourites} from './CityFavourites.tsx';
import {useAppSelector} from '../../hooks/useAppSelector.ts';
import {
  getFavouritesErrorStatus,
  getFavouritesLoadingStatus
} from '../../store/slices/favourites/favouritesSelectors.ts';
import {AppRoute, CITIES_LIST} from '../../const.ts';
import {Link} from 'react-router-dom';
import {useEffect} from 'react';
import {useAppDispatch} from '../../hooks/useAppDispatch.ts';
import {fetchFavouriteAction} from '../../store/apiActions/favouriteActions.ts';

export function Favourites() {
  const isFavouritesLoading = useAppSelector(getFavouritesLoadingStatus);
  const hasError = useAppSelector(getFavouritesErrorStatus);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isFavouritesLoading && hasError){
      dispatch(fetchFavouriteAction());
    }
  }, [dispatch, isFavouritesLoading, hasError]);

  if (!isFavouritesLoading) {
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
        <Link className="footer__logo-link" to={AppRoute.Main}>
          <img className="footer__logo" src="/img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
}
