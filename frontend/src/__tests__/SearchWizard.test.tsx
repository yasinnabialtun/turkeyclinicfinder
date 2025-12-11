import { render, screen, fireEvent } from '@testing-library/react';
import SearchWizard from '../components/SearchWizard';

describe('SearchWizard', () => {
  it('renders search form', () => {
    const mockOnSearch = jest.fn();
    render(<SearchWizard onSearch={mockOnSearch} />);

    expect(screen.getByLabelText(/treatment/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/city/i)).toBeInTheDocument();
  });

  it('calls onSearch with form data on submit', () => {
    const mockOnSearch = jest.fn();
    render(<SearchWizard onSearch={mockOnSearch} />);

    const treatmentInput = screen.getByLabelText(/treatment/i);
    const submitButton = screen.getByRole('button', { name: /search/i });

    fireEvent.change(treatmentInput, { target: { value: 'Hair Transplant' } });
    fireEvent.click(submitButton);

    expect(mockOnSearch).toHaveBeenCalledWith({
      treatment: 'Hair Transplant',
      city: undefined,
      minPrice: undefined,
      maxPrice: undefined,
    });
  });
});

