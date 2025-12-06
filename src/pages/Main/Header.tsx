import {CityName} from '../../types/cityName.ts';
import {SortOptionsMemo} from './SortOptions.tsx';

type HeaderProps = {
  activeCity: CityName;
  offersInCityCount: number;
}

export function Header({activeCity, offersInCityCount}: HeaderProps) {
  return (
    <>
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offersInCityCount.toString()} places to stay in {activeCity}</b>
      <SortOptionsMemo/>
    </>
  );
}
