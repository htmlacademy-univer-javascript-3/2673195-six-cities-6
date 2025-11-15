import {CityName} from './cityName.ts';

export type CityDTO = {
  name: CityName;
  lat: number;
  lng: number;
  zoom: number;
};
