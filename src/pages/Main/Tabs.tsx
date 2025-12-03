import {Tab} from './Tab.tsx';
import {CITIES_LIST} from '../../const.ts';
import {CityName} from '../../types/cityName.ts';
import {useAppDispatch} from '../../hooks/useAppDispatch.ts';
import {setCity} from '../../store/slices/city/citySlice.ts';

type TabsProps = {
  activeCity: CityName;
}

export function Tabs({activeCity}: TabsProps) {
  const dispatch = useAppDispatch();

  const handleCityClick = (city: CityName) => {
    dispatch(setCity(city));
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES_LIST.map((city) => (
            <Tab
              city={city}
              key={city}
              isActive={activeCity === city}
              handleClick={handleCityClick}
            />)
          )}
        </ul>
      </section>
    </div>);
}
