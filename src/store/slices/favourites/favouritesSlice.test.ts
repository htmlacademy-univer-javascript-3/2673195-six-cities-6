import { favouritesData } from './favouritesScice.ts';
import { fetchFavouriteAction } from '../../apiActions/favouriteActions.ts';
import { OffersList } from '../../../types/responses/offers/offersList';
import { CityDto } from '../../../types/responses/cityDto';
import { Location } from '../../../types/location';

describe('Favourites Slice', () => {
  const createMockLocation = (overrides?: Partial<Location>): Location => ({
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13,
    ...overrides
  });

  const createMockCityDto = (overrides?: Partial<CityDto>): CityDto => ({
    name: 'Paris',
    location: createMockLocation(),
    ...overrides
  });

  const mockFavourites: OffersList = [
    {
      id: '1',
      title: 'Beautiful & luxurious apartment at great location',
      type: 'apartment',
      price: 120,
      city: createMockCityDto({ name: 'Paris' }),
      location: createMockLocation({
        latitude: 48.865610000000004,
        longitude: 2.350499,
        zoom: 16
      }),
      isFavourite: true,
      isPremium: true,
      rating: 4.8,
      previewImage: 'img/apartment-01.jpg'
    },
    {
      id: '2',
      title: 'Wood and stone place',
      type: 'room',
      price: 80,
      city: createMockCityDto({ name: 'Cologne' }),
      location: createMockLocation({
        latitude: 50.949361,
        longitude: 6.976974,
        zoom: 16
      }),
      isFavourite: true,
      isPremium: false,
      rating: 4.3,
      previewImage: 'img/room.jpg'
    }
  ];

  describe('initial state', () => {
    it('should return initial state with hasError: true', () => {
      const result = favouritesData.reducer(undefined, { type: '' });
      expect(result).toEqual({
        favourites: [],
        hasError: true,
        isFavouritesDataLoading: false,
      });
    });
  });

  describe('extraReducers', () => {
    describe('fetchFavouriteAction', () => {
      it('should handle fetchFavouriteAction.pending', () => {
        const initialState = {
          favourites: [],
          hasError: true,
          isFavouritesDataLoading: false,
        };

        const action = { type: fetchFavouriteAction.pending.type };
        const result = favouritesData.reducer(initialState, action);

        expect(result.isFavouritesDataLoading).toBe(true);
        expect(result.hasError).toBe(false);
      });

      it('should handle fetchFavouriteAction.fulfilled', () => {
        const loadingState = {
          favourites: [],
          hasError: false,
          isFavouritesDataLoading: true,
        };

        const action = {
          type: fetchFavouriteAction.fulfilled.type,
          payload: mockFavourites
        };
        const result = favouritesData.reducer(loadingState, action);

        expect(result.favourites).toEqual(mockFavourites);
        expect(result.hasError).toBe(false);
        expect(result.isFavouritesDataLoading).toBe(true);
      });

      it('should handle fetchFavouriteAction.rejected', () => {
        const loadingState = {
          favourites: [],
          hasError: false,
          isFavouritesDataLoading: true,
        };

        const action = { type: fetchFavouriteAction.rejected.type };
        const result = favouritesData.reducer(loadingState, action);

        expect(result.isFavouritesDataLoading).toBe(false);
        expect(result.hasError).toBe(true);
      });
    });
  });

  describe('state immutability', () => {
    it('should maintain state immutability', () => {
      const state1 = favouritesData.reducer(undefined, { type: '' });
      const action = {
        type: fetchFavouriteAction.fulfilled.type,
        payload: mockFavourites
      };
      const result = favouritesData.reducer(state1, action);

      expect(state1).not.toBe(result);
      expect(state1.favourites).not.toBe(result.favourites);
      expect(state1.favourites).toEqual([]);
      expect(result.favourites).toEqual(mockFavourites);
    });
  });
});
