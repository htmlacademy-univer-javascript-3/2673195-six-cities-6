import { State } from '../../../types/state.ts';
import { NameSpace } from '../../../const.ts';
import { CityName } from '../../../types/cityName.ts';

export const getCityName = (state: Pick<State, NameSpace.City>):
  CityName => state[NameSpace.City].cityName;
