import {Map} from '../../components/Map.tsx';
import {Navigation} from '../../components/Navigation.tsx';
import {Tabs} from './Tabs.tsx';
import {useState} from 'react';
import {OffersList} from '../../components/OffersList.tsx';
import {CardType} from '../../types/cardType.ts';
import {useAppSelector} from '../../hooks/use-app-selector.ts';
import {City} from '../../const.ts';
import {citiesMock} from '../../mocks/cities.ts';
import {Header} from './Header.tsx';

export function Main() {
  const city = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);

  const [activeCity, setActiveCity] = useState<City>(city);

  const cityDto = citiesMock[activeCity];
  const cityOffers = offers.filter((offer) => offer.city.name === activeCity);
  const points = cityOffers.map((offer) => offer.location);

  return (
    <div className="page page--gray page--main">
      <Navigation/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs activeCity={activeCity} setActiveCity={setActiveCity} />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <Header
                activeCity={activeCity}
                offersInCityCount={cityOffers.length}
              />
              <OffersList offers={cityOffers} cardType={CardType.City}/>
            </section>
            <div className="cities__right-section">
              <Map city={cityDto!} points={points} className={'cities__map map'} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
