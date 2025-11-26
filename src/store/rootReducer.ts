import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const.ts';
import {userData} from './slices/user/userSlice.ts';
import {offersData} from './slices/offers/offersSlice.ts';

export const rootReducer = combineReducers({
  [NameSpace.User]: userData.reducer,
  [NameSpace.Offers]: offersData.reducer,
});
