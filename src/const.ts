import {CityName} from './types/cityName.ts';

export const BACKEND_URL = 'https://14.design.htmlacademy.pro/six-cities';

export const REQUEST_TIMEOUT = 5000;

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favourites = '/favourites',
  Offer = '/offer/:id',
}

export const APIRoute = {
  Login: '/login',
  Logout: '/logout',
  Offers: '/offers',
  Offer: (id: string) => `/offers/${id}`,
  OffersNearby: (id: string) => `/offers/${id}/nearby`,
  Comments: (offerId: string) => `/comments/${offerId}/`,
  Favourite: '/favourite',
  ChangeFavouriteStatus: (offerId: string, status: number) => `/changeFavouriteStatus/${offerId}/${status}`,
};

export enum AuthorizationStatus {
  Auth,
  NotAuth
}

export const CITIES = Object.freeze({
  Paris: 'Paris',
  Cologne: 'Cologne',
  Brussels: 'Brussels',
  Amsterdam: 'Amsterdam',
  Hamburg: 'Hamburg',
  Dusseldorf: 'Dusseldorf'
});

export enum OfferCardStyle {
  City,
  NearPlace
}

export const CITIES_LIST: ReadonlyArray<CityName> = Object.keys(CITIES) as ReadonlyArray<CityName>;

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';
