import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { vi, describe, it, expect } from 'vitest';
import { App } from './App';
import {AppRoute} from './const.ts';

vi.mock('./pages/Main/Main', () => ({
  Main: () => <div data-testid="main-page">Main Page</div>
}));

vi.mock('./pages/Login/Login', () => ({
  Login: () => <div data-testid="login-page">Login Page</div>
}));

vi.mock('./pages/Favourites/Favourites', () => ({
  Favourites: () => <div data-testid="favourites-page">Favourites Page</div>
}));

vi.mock('./pages/Offer/Offer', () => ({
  Offer: () => <div data-testid="offer-page">Offer Page</div>
}));

vi.mock('./pages/NotFoundPage/NotFoundPage', () => ({
  NotFoundPage: () => <div data-testid="not-found-page">404 Page</div>
}));

vi.mock('./components/PrivateRoute', () => ({
  PrivateRoute: vi.fn(({ children }: {children: ChildNode}) => children)
}));

vi.mock('./hooks/useAppSelector', () => ({
  useAppSelector: vi.fn(() => 'AUTH')
}));

describe('App Routing', () => {
  const renderWithRouter = (initialRoute: string) => render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <App />
    </MemoryRouter>
  );

  describe('public routes', () => {
    it('should render Main page for root path "/"', () => {
      renderWithRouter(AppRoute.Main);

      expect(screen.getByTestId('main-page')).toBeInTheDocument();
      expect(screen.queryByTestId('login-page')).not.toBeInTheDocument();
      expect(screen.queryByTestId('not-found-page')).not.toBeInTheDocument();
    });

    it('should render Login page for "/login" path', () => {
      renderWithRouter(AppRoute.Login);

      expect(screen.getByTestId('login-page')).toBeInTheDocument();
      expect(screen.queryByTestId('main-page')).not.toBeInTheDocument();
    });

    it('should render Offer page for "/offer/:id" path', () => {
      renderWithRouter(AppRoute.Offer('123'));

      expect(screen.getByTestId('offer-page')).toBeInTheDocument();
    });
  });

  describe('protected routes', () => {
    it('should render Favourites page for "/favorites" when authorized', () => {
      renderWithRouter(AppRoute.Favourites);

      expect(screen.getByTestId('favourites-page')).toBeInTheDocument();
    });
  });

  describe('not found route', () => {
    it('should render NotFoundPage for unknown paths', () => {
      renderWithRouter('/unknown-path');

      expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
      expect(screen.queryByTestId('main-page')).not.toBeInTheDocument();
    });
  });
});
