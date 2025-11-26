import {useCallback, useState} from 'react';
import {OffersList} from '../types/responses/offers/offersList.ts';
import {OfferCard} from './OfferCard.tsx';
import {OfferCardStyle} from '../const.ts';
import {OfferCompactDto} from '../types/responses/offers/offerCompactDto.ts';

interface OffersListProps {
  offers: OffersList | OfferCompactDto[];
  cardStyle: OfferCardStyle;
}

function getClassName(cardType: OfferCardStyle): string {
  switch (cardType) {
    case OfferCardStyle.City:
      return 'cities__places-list places__list tabs__content';
    case OfferCardStyle.NearPlace:
      return 'near-places__list places__list';
  }
}

export function OffersListComponent({offers, cardStyle}: OffersListProps) {
  const className = getClassName(cardStyle);

  const [, setActiveOffer] = useState<string | null>(null);

  const handleMouseEnter = useCallback((offerId: string) => {
    setActiveOffer(offerId);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setActiveOffer(null);
  }, []);

  return (
    <div className={className}>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          cardType={cardStyle}
          offer={offer}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </div>);
}
