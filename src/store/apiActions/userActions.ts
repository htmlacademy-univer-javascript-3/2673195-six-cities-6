import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {State} from '../../types/state.ts';
import {saveToken, dropToken} from '../../services/token.ts';
import {APIRoute} from '../../const.ts';
import {AuthData} from '../../types/requests/authData.ts';

import {AppDispatch} from '../../types/state.ts';
import {UserDto} from '../../types/responses/userDto.ts';

export const checkAuthAction = createAsyncThunk<UserDto, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_, {extra: api}) => {
    const {data} = await api.get<UserDto>(APIRoute.Login);
    return data;
  },
);

export const loginAction = createAsyncThunk<UserDto, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {extra: api}) => {
    const {data} = await api.post<UserDto>(APIRoute.Login, {email, password});
    saveToken(data.token);
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);
