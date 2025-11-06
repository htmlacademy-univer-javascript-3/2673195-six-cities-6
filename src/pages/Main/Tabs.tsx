import {City} from '../../types/city.ts';
import {Tab} from './Tab.tsx';

type TabsProps = {
  cities: City[];
  activeCity: City;
  setActiveCity: (activeCity: City) => void;
}

export function Tabs({cities, activeCity, setActiveCity}: TabsProps) {

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <Tab
              city={city}
              key={city.title}
              isActive={activeCity === city}
              handleClick={setActiveCity}
            />)
          )}
        </ul>
      </section>
    </div>);
}
