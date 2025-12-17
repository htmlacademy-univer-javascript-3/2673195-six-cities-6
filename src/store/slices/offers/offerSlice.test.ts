import { offersData } from './offersSlice';
import { fetchOffersAction } from '../../apiActions/offersActions';

describe('Offers Slice', () => {
  const mockOffers = [
    {
      id: '1',
      title: 'Test Offer 1',
      city: { name: 'Paris' },
    },
    {
      id: '2',
      title: 'Test Offer 2',
      city: { name: 'Amsterdam' },
    }
  ];

  const initialState = {
    offers: [],
    hasError: false,
    isOffersDataLoading: false,
  };

  const loadingState = {
    offers: [],
    hasError: false,
    isOffersDataLoading: true,
  };

  describe('initial state', () => {
    it('should return initial state', () => {
      const result = offersData.reducer(undefined, { type: '' });
      expect(result).toEqual(initialState);
    });
  });

  describe('extraReducers', () => {
    it('should handle fetchOffersAction.pending', () => {
      const action = { type: fetchOffersAction.pending.type };
      const result = offersData.reducer(initialState, action);

      expect(result.isOffersDataLoading).toBe(true);
      expect(result.hasError).toBe(false);
    });

    it('should handle fetchOffersAction.fulfilled', () => {
      const action = {
        type: fetchOffersAction.fulfilled.type,
        payload: mockOffers
      };
      const result = offersData.reducer(loadingState, action);

      expect(result.offers).toEqual(mockOffers);
      expect(result.isOffersDataLoading).toBe(false);
      expect(result.hasError).toBe(false);
    });

    it('should handle fetchOffersAction.rejected', () => {
      const action = { type: fetchOffersAction.rejected.type };
      const result = offersData.reducer(loadingState, action);

      expect(result.isOffersDataLoading).toBe(false);
      expect(result.hasError).toBe(true);
    });
  });

  describe('state immutability', () => {
    it('should maintain state immutability', () => {
      const state1 = offersData.reducer(undefined, { type: '' });
      const action = {
        type: fetchOffersAction.fulfilled.type,
        payload: mockOffers
      };
      const result = offersData.reducer(state1, action);

      expect(state1).not.toBe(result);
      expect(state1.offers).not.toBe(result.offers);
      expect(state1.offers).toEqual([]);
      expect(result.offers).toEqual(mockOffers);
    });
  });
});
