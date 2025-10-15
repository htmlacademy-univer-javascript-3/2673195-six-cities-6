import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App.tsx';
import {offers} from './mocks/offers.ts';
import {users} from './mocks/users.ts';
import {reviews} from './mocks/reviews.ts';

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
