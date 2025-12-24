import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ReviewForm } from './ReviewForm';

describe('ReviewForm Component', () => {
  it('should render form with all required elements', () => {
    render(<ReviewForm />);

    expect(screen.getByLabelText('Your review')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Tell how was your stay, what you like and what can be improved')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  it('should render rating stars', () => {
    render(<ReviewForm />);

    const radioInputs = screen.getAllByRole('radio');
    expect(radioInputs).toHaveLength(5);

    expect(screen.getByTitle('perfect')).toBeInTheDocument();
    expect(screen.getByTitle('good')).toBeInTheDocument();
    expect(screen.getByTitle('not bad')).toBeInTheDocument();
    expect(screen.getByTitle('badly')).toBeInTheDocument();
    expect(screen.getByTitle('terribly')).toBeInTheDocument();
  });

  it('should render help text with requirements', () => {
    render(<ReviewForm />);

    expect(screen.getByText(/To submit review please make sure to set/i)).toBeInTheDocument();
    expect(screen.getByText(/describe your stay with at least/i)).toBeInTheDocument();
    expect(screen.getByText(/50 characters/i)).toBeInTheDocument();
  });

  it('should render textarea with min and max length', () => {
    render(<ReviewForm />);

    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('minLength', '50');
    expect(textarea).toHaveAttribute('maxLength', '300');
  });

  it('should have correct CSS classes', () => {
    const { container } = render(<ReviewForm />);

    expect(container.querySelector('.reviews__form')).toBeInTheDocument();
    expect(container.querySelector('.reviews__rating-form')).toBeInTheDocument();
    expect(container.querySelector('.reviews__textarea')).toBeInTheDocument();
    expect(container.querySelector('.reviews__button-wrapper')).toBeInTheDocument();
  });
});
