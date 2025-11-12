import {Tab} from './Tab.tsx';
import {cities, City} from '../../const.ts';

type TabsProps = {
  activeCity: City;
  setActiveCity: (activeCity: City) => void;
}

export function Tabs({activeCity, setActiveCity}: TabsProps) {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
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
