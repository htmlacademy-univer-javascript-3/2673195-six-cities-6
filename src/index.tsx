import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App.tsx';
import {Provider} from 'react-redux';
import {store} from './store/store.ts';
import {fetchOffersAction} from './store/apiActions/offersActions.ts';
import {ToastContainer} from 'react-toastify';
import {saveToken} from './services/token.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

saveToken('123123');
store.dispatch(fetchOffersAction());
// store.dispatch(fetchFavouriteAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer/>
      <App/>
    </Provider>
  </React.StrictMode>
);
