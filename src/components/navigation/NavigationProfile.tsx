import {useAppSelector} from '../../hooks/useAppSelector.ts';
import {getUser} from '../../store/slices/user/userSelectors.ts';
import {getFavourites} from '../../store/slices/favourites/favouritesSelectors.ts';
import {useAppDispatch} from '../../hooks/useAppDispatch.ts';
import {logoutAction} from '../../store/apiActions/userActions.ts';
import {AppRoute} from '../../const.ts';
import {Link} from 'react-router-dom';

export function NavigationProfile() {
  const user = useAppSelector(getUser)!;
  const favouritesCount = useAppSelector(getFavourites).length;
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(logoutAction());
  };

  return (
    <>
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favourites}>
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__user-name user__name">{user.email}</span>
          <span className="header__favorite-count">{favouritesCount}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <a className="header__nav-link" onClick={logout}>
          <span className="header__signout">Sign out</span>
        </a>
      </li>
    </>
  );
}
