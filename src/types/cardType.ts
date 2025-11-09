export enum CardType {
  City,
  NearPlace
}

export function getStylePrefix(cardType: CardType): string {
  switch (cardType) {
    case CardType.City:
      return 'cities';
    case CardType.NearPlace:
      return 'near-places';
  }
}
