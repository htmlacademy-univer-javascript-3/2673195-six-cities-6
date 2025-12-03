import {AppRoute, AuthorizationStatus} from '../../const.ts';
import {useAppSelector} from '../../hooks/useAppSelector.ts';
import {getAuthorizationStatus} from '../../store/slices/user/userSelectors.ts';
import {NavigationProfile} from './NavigationProfile.tsx';
import {NavigationLogIn} from './NavigationLogIn.tsx';

export function Navigation() {
  const authStatus = useAppSelector(getAuthorizationStatus);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link" href={AppRoute.Main}>
              <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {authStatus === AuthorizationStatus.Auth ? <NavigationProfile/> : <NavigationLogIn/>}
            </ul>
          </nav>
        </div>
      </div>
    </header>);
}

