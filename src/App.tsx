import {Main} from './Main/Main.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from './const.ts';
import {Login} from './Login/Login.tsx';
import {Favourites} from './Favourites/Favourites.tsx';
import {Offer} from './Offer/Offer.tsx';
import {NotFoundPage} from './NotFoundPage/NotFoundPage.tsx';
import {PrivateRoute} from './PrivateRoute/PrivateRoute.tsx';

type AppProps = {
  cityCardsAmount: number;
}


export function App({ cityCardsAmount } : AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main cityCardsAmount={cityCardsAmount}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<Login/>}
        />
        <Route
          path={AppRoute.Favourites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NotAuth}>
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
