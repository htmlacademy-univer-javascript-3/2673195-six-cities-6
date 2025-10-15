import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App.tsx';
import {offers, reviews} from './mocks/offers.ts';
import {users} from './mocks/users.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offers={offers}
      reviews={reviews}
      users={users}
    />
  </React.StrictMode>
);
