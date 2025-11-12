import {City} from '../const.ts';
import {CityDTO} from '../types/cityDTO.ts';

export const amsterdam: CityDTO = {
  name: City.Amsterdam,
  lat: 52.370216,
  lng: 4.895168,
  zoom: 10
};

export const paris: CityDTO = {
  name: City.Paris,
  lat: 48.864716,
  lng: 2.349014,
  zoom: 10
};

type CityMap = {
  [key in City]: CityDTO | undefined;
}

export const citiesMock : CityMap = {
  [City.Paris]: paris,
  [City.Amsterdam]: amsterdam,
  [City.Cologne]: undefined,
  [City.Hamburg]: undefined,
  [City.Brussels]: undefined,
  [City.Dusseldorf]: undefined
};
