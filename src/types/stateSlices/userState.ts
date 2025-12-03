import {AuthorizationStatus} from '../../const.ts';
import {UserDto} from '../responses/userDto.ts';

export type UserState = {
  authorizationStatus: AuthorizationStatus;
  user: UserDto | null;
};
