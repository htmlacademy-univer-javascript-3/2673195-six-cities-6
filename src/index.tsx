import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App.tsx';
import {Provider} from 'react-redux';
import {store} from './store';
import {users} from './mocks/users.ts';
import {loadOffers, loadReviews} from './store/action.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(loadOffers());
store.dispatch(loadReviews());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App users={users}/>
    </Provider>
  </React.StrictMode>
);
