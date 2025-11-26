import {OffersList} from '../../types/responses/offers/offersList.ts';
import {OffersList} from '../../components/OffersList.tsx';
import {OfferCardStyle} from '../../const.ts';

export function NearPlaces({offers}: { offers: OffersList[] }) {
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <OffersList offers={offers.slice(0, 3)} cardStyle={OfferCardStyle.NearPlace}/>
      </section>
    </div>
  );
}
