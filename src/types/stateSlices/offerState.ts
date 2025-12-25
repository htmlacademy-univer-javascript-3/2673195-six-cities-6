import {OfferDto} from '../responses/offers/offerDto.ts';
import {OffersNearbyDto} from '../responses/offers/offersNearbyDto.ts';

export interface OfferState {
  offer: OfferDto | null;
  nearby: OffersNearbyDto;
  isLoading: boolean;
  hasError: boolean;
  nearbyLoading: boolean;
  nearbyHasError: boolean;
  lastFetchedId: string | null;
}
