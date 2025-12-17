import { render, screen } from '@testing-library/react';
import { Header } from './Header.tsx';
import {CITIES} from '../../const.ts';

describe('Header Component', () => {
  const defaultProps = {
    activeCity: CITIES.Paris,
    offersInCityCount: 5,
  };

  it('should render correctly with given props', () => {
    render(<Header {...defaultProps} />);

    expect(screen.getByText('5 places to stay in Paris')).toBeInTheDocument();
    expect(screen.getByText('Places')).toBeInTheDocument();
    expect(screen.getByText('Places')).toHaveClass('visually-hidden');
  });

  it('should render different city and count', () => {
    const props = {
      activeCity: CITIES.Amsterdam,
      offersInCityCount: 12,
    };

    render(<Header {...props} />);

    expect(screen.getByText('12 places to stay in Amsterdam')).toBeInTheDocument();
  });
});
