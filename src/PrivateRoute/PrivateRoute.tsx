import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../const.ts';

type PrivateRouteProps={
  authorizationStatus: AuthorizationStatus;
  children: Element;
}

export function PrivateRoute(props: PrivateRouteProps) {
  const { authorizationStatus, children } = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}
