import {CITIES} from '../const.ts';
import {CityDTO} from '../types/cityDTO.ts';
import {CityName} from '../types/cityName.ts';

export const amsterdam: CityDTO = {
  name: CITIES.Amsterdam,
  lat: 52.370216,
  lng: 4.895168,
  zoom: 10
};

export const paris: CityDTO = {
  name: CITIES.Paris,
  lat: 48.864716,
  lng: 2.349014,
  zoom: 10
};

type CityMap = {
  [key in CityName]: CityDTO | undefined;
}

export const citiesMock : CityMap = {
  [CITIES.Paris]: paris,
  [CITIES.Amsterdam]: amsterdam,
  [CITIES.Cologne]: undefined,
  [CITIES.Hamburg]: undefined,
  [CITIES.Brussels]: undefined,
  [CITIES.Dusseldorf]: undefined
};
