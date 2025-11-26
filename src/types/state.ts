import {store} from '../store/store.ts';
import {AuthorizationStatus} from '../const.ts';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
