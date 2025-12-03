import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../../const.ts';
import {fetchFavouriteAction} from '../../apiActions/favouriteActions.ts';
import {FavouritesState} from '../../../types/stateSlices/favouritesState.ts';


const initialState: FavouritesState = {
  favourites: [],
  hasError: false,
  isFavouritesDataLoading: false,
};

export const favouritesData = createSlice({
  name: NameSpace.Favourites,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavouriteAction.pending, (state) => {
        state.isFavouritesDataLoading = true;
        state.hasError = false;
      })
      .addCase(fetchFavouriteAction.fulfilled, (state, action) => {
        state.favourites = action.payload;
        state.hasError = false;
      })
      .addCase(fetchFavouriteAction.rejected, (state) => {
        state.isFavouritesDataLoading = false;
        state.hasError = true;
      });
  }
});
