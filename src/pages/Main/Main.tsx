import {Map} from '../../components/Map.tsx';
import {Navigation} from '../../components/Navigation.tsx';
import {Tabs} from './Tabs.tsx';
import {OffersListComponent} from '../../components/OffersListComponent.tsx';
import {useAppSelector} from '../../hooks/useAppSelector.ts';
import {Header} from './Header.tsx';
import {CityName} from '../../types/cityName.ts';
import {OfferCardStyle} from '../../const.ts';
import {
  getOffersErrorStatus,
  getOffersInCity,
  getOffersLoadingStatus
} from '../../store/slices/offers/offersSelectors.ts';
import {getCityName} from '../../store/slices/city/citySelectors.ts';
import {Navigate} from 'react-router-dom';
import {Spinner} from '../../components/Spinner.tsx';

export function Main() {
  const isLoading = useAppSelector(getOffersLoadingStatus);
  const hasError = useAppSelector(getOffersErrorStatus);
  const city: CityName = useAppSelector(getCityName);
  const offers = useAppSelector(getOffersInCity);

  const points = offers.map((offer) => offer.location);

  return (
    <div className="page page--gray page--main">
      <Navigation/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs activeCity={city}/>
        <div className="cities">
          {
            isLoading && <Spinner/>
          }
          {
            (hasError) && <Navigate to="/*"/>
          }
          {
            !isLoading && !hasError && offers.length > 0 &&
            <div className="cities__places-container container">
              <section className="cities__places places">
                <Header
                  activeCity={city}
                  offersInCityCount={offers.length}
                />
                <OffersListComponent offers={offers} cardStyle={OfferCardStyle.City}/>
              </section>
              <div className="cities__right-section">
                <Map city={offers[0].city} points={points} className={'cities__map map'}/>
              </div>
            </div>
          }
        </div>
      </main>
    </div>
  );
}
