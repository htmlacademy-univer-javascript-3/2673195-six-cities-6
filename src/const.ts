import {CityName} from './types/cityName.ts';

export const BACKEND_URL = 'https://14.design.htmlacademy.pro/six-cities';

export const REQUEST_TIMEOUT = 5000;

export const AppRoute = {
  Main: '/',
  Login: '/login',
  Favourites: '/favourites',
  Offer: (id: string) => `/offer/${id}`,
};

export const APIRoute = {
  Login: '/login',
  Logout: '/logout',
  Offers: '/offers',
  Offer: (id: string) => `/offers/${id}`,
  OffersNearby: (id: string) => `/offers/${id}/nearby`,
  Comments: (offerId: string) => `/comments/${offerId}/`,
  Favourite: '/favorite',
  ChangeFavouriteStatus: (offerId: string, status: number) => `/favorite/${offerId}/${status}`,
};

export enum NameSpace {
  Offers = 'OFFERS',
  User = 'USER',
  Favourites = 'Favourites',
  City = 'CITY',
}

export enum AuthorizationStatus {
  Unknown,
  Auth,
  NotAuth
}

export enum OfferCardStyle {
  City,
  NearPlace
}

export const CITIES = Object.freeze({
  Paris: 'Paris',
  Cologne: 'Cologne',
  Brussels: 'Brussels',
  Amsterdam: 'Amsterdam',
  Hamburg: 'Hamburg',
  Dusseldorf: 'Dusseldorf'
});

export const CITIES_LIST: ReadonlyArray<CityName> = Object.keys(CITIES) as ReadonlyArray<CityName>;

export const URL_MARKER_DEFAULT = '/img/pin.svg';

export const URL_MARKER_SELECTED = '/img/pin-active.svg';
