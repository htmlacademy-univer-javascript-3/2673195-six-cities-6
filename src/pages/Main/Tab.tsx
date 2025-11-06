import {City} from '../../types/city.ts';

type TabProps = {
  city: City;
  isActive: boolean;
  handleClick: (city: City) => void;
}

export function Tab({city, isActive, handleClick}: TabProps) {
  return (
    <li className="locations__item" onClick={() => handleClick(city)}>
      <a className={`locations__item-link tabs__item "${isActive ? 'tabs__item--active' : ''}`} href="#">
        <span>{city.title}</span>
      </a>
    </li>);
}
