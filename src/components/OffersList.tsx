import {OfferDTO} from '../types/offerDTO.ts';
import {useCallback, useState} from 'react';
import {OfferCard} from './OfferCard.tsx';
import {CardType} from '../types/cardType.ts';

interface OffersListProps {
  offers: OfferDTO[];
  cardType: CardType;
}

function getClassName(cardType: CardType): string {
  switch (cardType) {
    case CardType.City:
      return 'cities__places-list places__list tabs__content';
    case CardType.NearPlace:
      return 'near-places__list places__list';
  }
}

export function OffersList({offers, cardType}: OffersListProps) {
  const className = getClassName(cardType);

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
          cardType={cardType}
          offer={offer}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </div>);
}
