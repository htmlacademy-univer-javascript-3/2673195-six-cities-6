export type OfferDTO = {
  id: number;
  name: string;
  type: string;
  mark: string;
  bedroomsCount: number;
  maxAdults: number;
  nightCost: number;
  inside: string[];
  hostId: number;
  description: string[];
  rating: number;
  reviewIds: number[];
  photos: string[];
}

export type OfferReview = {
  id: number;
  stars: number;
  text: string;
  authorId: number;
  date: Date;
}
