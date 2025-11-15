import {useCallback, useState} from 'react';
import {OfferDTO} from '../types/offerDTO.ts';
import {OfferCard} from './OfferCard.tsx';
import {OfferCardStyle} from '../const.ts';

interface OffersListProps {
  offers: OfferDTO[];
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

export function OffersList({offers, cardStyle}: OffersListProps) {
  const className = getClassName(cardStyle);

  const [, setActiveOffer] = useState<number | null>(null);

  const handleMouseEnter = useCallback((offerId: number) => {
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
