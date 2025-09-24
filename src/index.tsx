import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App.tsx';

const Settings = {
  CityCardsAmount: 5,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App cityCardsAmount={Settings.CityCardsAmount}/>
  </React.StrictMode>
);
