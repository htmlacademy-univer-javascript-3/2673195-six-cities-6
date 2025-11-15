import {OfferCardStyle} from '../const.ts';

export function getStylePrefix(cardType: OfferCardStyle): string {
  switch (cardType) {
    case OfferCardStyle.City:
      return 'cities';
    case OfferCardStyle.NearPlace:
      return 'near-places';
  }
}
