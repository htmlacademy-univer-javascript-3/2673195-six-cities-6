import {State} from '../../../types/state.ts';
import {AuthorizationStatus, NameSpace} from '../../../const.ts';

export const getAuthorizationStatus = (state: Pick<State, NameSpace.User>):
  AuthorizationStatus => state[NameSpace.User].authorizationStatus;

export const getAuthCheckedStatus = (state: Pick<State, NameSpace.User>):
  boolean => state[NameSpace.User].authorizationStatus !== AuthorizationStatus.Unknown;
