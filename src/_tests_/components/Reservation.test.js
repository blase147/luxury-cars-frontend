import React from 'react';
import { render, screen } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Reservation from '../../components/reservation/Reservation';

jest.mock('react-redux');
jest.mock('react-router-dom');

describe('Reservation', () => {
  beforeEach(() => {
    useDispatch.mockReturnValue(jest.fn());
    useSelector.mockReturnValue({
      id: 1,
    });
  });

  test('renders the reservation form', () => {
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);

    render(<Reservation />);

    expect(screen.getByText('Book your choice car')).toBeInTheDocument();
    expect(screen.getByText('Confirm Booking')).toBeInTheDocument();
  });
});
