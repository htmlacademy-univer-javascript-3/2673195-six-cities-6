import {Tab} from './Tab.tsx';
import {CITIES_LIST} from '../../const.ts';
import {CityName} from '../../types/cityName.ts';

type TabsProps = {
  activeCity: CityName;
  setActiveCity: (activeCity: CityName) => void;
}

export function Tabs({activeCity, setActiveCity}: TabsProps) {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES_LIST.map((city) => (
            <Tab
              city={city}
              key={city}
              isActive={activeCity === city}
              handleClick={setActiveCity}
            />)
          )}
        </ul>
      </section>
    </div>);
}
