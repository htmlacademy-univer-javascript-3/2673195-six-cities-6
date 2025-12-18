import { userData } from './userSlice';
import { AuthorizationStatus } from '../../../const';
import { checkAuthAction, loginAction, logoutAction } from '../../apiActions/userActions';
import { UserDto } from '../../../types/responses/userDto';

describe('User Slice', () => {
  const mockUser: UserDto = {
    name: 'Test User',
    isPro: false,
    email: 'test@example.com',
    token: 'token',
  };

  const initialState = {
    authorizationStatus: AuthorizationStatus.Unknown,
    user: null,
  };

  const authorizedState = {
    authorizationStatus: AuthorizationStatus.Auth,
    user: mockUser,
  };
  describe('initial state', () => {
    it('should return initial state', () => {
      const result = userData.reducer(undefined, { type: '' });
      expect(result).toEqual(initialState);
    });
  });

  describe('reducers', () => {
    it('should handle setUserData', () => {
      const action = {
        type: userData.actions.setUserData,
        payload: mockUser
      };
      const result = userData.reducer(initialState, action);

      expect(result.user).toEqual(mockUser);
      expect(result.authorizationStatus).toBe(AuthorizationStatus.Auth);
    });

    it('should handle clearUserData', () => {
      const action = { type: userData.actions.clearUserData };
      const result = userData.reducer(authorizedState, action);

      expect(result.user).toBeNull();
      expect(result.authorizationStatus).toBe(AuthorizationStatus.NotAuth);
    });
  });

  describe('extraReducers', () => {
    describe('checkAuthAction', () => {
      it('should handle checkAuthAction.fulfilled', () => {
        const action = {
          type: checkAuthAction.fulfilled.type,
          payload: mockUser
        };
        const result = userData.reducer(initialState, action);

        expect(result.authorizationStatus).toBe(AuthorizationStatus.Auth);
        expect(result.user).toEqual(mockUser);
      });

      it('should handle checkAuthAction.rejected', () => {
        const action = { type: checkAuthAction.rejected.type };
        const result = userData.reducer(authorizedState, action);

        expect(result.authorizationStatus).toBe(AuthorizationStatus.NotAuth);
        expect(result.user).toBe(mockUser);
      });
    });

    describe('loginAction', () => {
      it('should handle loginAction.fulfilled', () => {
        const action = {
          type: loginAction.fulfilled.type,
          payload: mockUser
        };
        const result = userData.reducer(initialState, action);

        expect(result.authorizationStatus).toBe(AuthorizationStatus.Auth);
        expect(result.user).toEqual(mockUser);
      });

      it('should handle loginAction.rejected', () => {
        const action = { type: loginAction.rejected.type };
        const result = userData.reducer(initialState, action);

        expect(result.authorizationStatus).toBe(AuthorizationStatus.NotAuth);
        expect(result.user).toBeNull();
      });
    });

    describe('logoutAction', () => {
      it('should handle logoutAction.fulfilled', () => {
        const action = { type: logoutAction.fulfilled.type };
        const result = userData.reducer(authorizedState, action);

        expect(result.authorizationStatus).toBe(AuthorizationStatus.NotAuth);
        expect(result.user).toBeNull();
      });
    });
  });
});
