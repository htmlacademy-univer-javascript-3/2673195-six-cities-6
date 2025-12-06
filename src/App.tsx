import {Main} from './pages/Main/Main.tsx';
import {Route, Routes} from 'react-router-dom';
import {AppRoute} from './const.ts';
import {Login} from './pages/Login/Login.tsx';
import {Favourites} from './pages/Favourites/Favourites.tsx';
import {Offer} from './pages/Offer/Offer.tsx';
import {NotFoundPage} from './pages/NotFoundPage/NotFoundPage.tsx';
import {PrivateRoute} from './components/PrivateRoute.tsx';
import {useAppSelector} from './hooks/useAppSelector.ts';
import {getAuthorizationStatus} from './store/slices/user/userSelectors.ts';

export function App() {
  const authStatus = useAppSelector(getAuthorizationStatus);

  return (
    <Routes>
      <Route
        path={AppRoute.Main}
        element={<Main/>}
      />
      <Route
        path={AppRoute.Login}
        element={<Login/>}
      />
      <Route
        path={AppRoute.Favourites}
        element={
          <PrivateRoute authorizationStatus={authStatus}>
            <Favourites/>
          </PrivateRoute>
        }
      />
      <Route
        path={AppRoute.Offer(':id')}
        element={<Offer/>}
      />
      <Route
        path="*"
        element={<NotFoundPage/>}
      />
    </Routes>
  );
}
