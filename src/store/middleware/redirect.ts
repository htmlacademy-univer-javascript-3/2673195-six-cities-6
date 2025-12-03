import {PayloadAction} from '@reduxjs/toolkit';
import {Middleware} from 'redux';
import {rootReducer} from '../rootReducer.ts';
import browserHistory from '../../browser-history.ts';
import {REDIRECT_ACTION_TYPE} from '../redirectAction.ts';

type Reducer = ReturnType<typeof rootReducer>;

export const redirect: Middleware<unknown, Reducer> =
  () =>
    (next) =>
      (action: PayloadAction<string>) => {
        if (action.type === REDIRECT_ACTION_TYPE) {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
