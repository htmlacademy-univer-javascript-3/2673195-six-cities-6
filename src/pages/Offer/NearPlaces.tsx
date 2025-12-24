import {OfferCardStyle} from '../../const.ts';
import {OffersNearbyDto} from '../../types/responses/offers/offersNearbyDto.ts';
import {OffersListComponent} from '../../components/OffersListComponent.tsx';

export function NearPlaces({offers}: { offers: OffersNearbyDto }) {
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <OffersListComponent
          offers={offers.slice(0, 3)}
          cardStyle={OfferCardStyle.NearPlace}
          onActivePointChange={() => {}}
        />
      </section>
    </div>
  );
}
