import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App.tsx';
import {Provider} from 'react-redux';
import {store} from './store/store.ts';
import {fetchOffersAction} from './store/apiActions/offersActions.ts';
import {ToastContainer} from 'react-toastify';
import {checkAuthAction} from './store/apiActions/userActions.ts';
import {HistoryRouter} from './components/HistoryRouter.tsx';
import browserHistory from './browser-history.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(checkAuthAction());
store.dispatch(fetchOffersAction());
// store.dispatch(fetchFavouriteAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <ToastContainer/>
        <App/>
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);
