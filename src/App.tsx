import {Main} from './pages/Main/Main.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from './const.ts';
import {Login} from './pages/Login/Login.tsx';
import {Favourites} from './pages/Favourites/Favourites.tsx';
import {Offer} from './pages/Offer/Offer.tsx';
import {NotFoundPage} from './pages/NotFoundPage/NotFoundPage.tsx';
import {PrivateRoute} from './components/PrivateRoute.tsx';

export function App() {

  return (
    <BrowserRouter>
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
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <Favourites/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<Offer/>}
        />
        <Route
          path="*"
          element={<NotFoundPage/>}
        />
      </Routes>
    </BrowserRouter>
  );
}
