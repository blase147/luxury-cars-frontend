/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';
import DeleteCar from '../../components/deleteCars/DeleteCar';

// Create a mock Redux store
const mockStore = configureStore([thunk]);

jest.mock('../../Redux/Reducers/addCarSlice', () => ({
  deleteCar: jest.fn(),
}));

describe('DeleteCar', () => {
  it('should render and delete a car', async () => {
    // Create initial state for the mock store
    const initialState = {
      cars: {
        cars: [
          { id: 1, name: 'Car 1' },
        ],
        status: 'succeeded',
      },
    };

    // Create a mock store with the initial state
    const store = mockStore(initialState);

    // Render the DeleteHouse component with the mock store
    const { getByText, getByRole } = render(
      <Provider store={store}>
        <MemoryRouter>
          <DeleteCar />
        </MemoryRouter>
      </Provider>,
    );

    // Check if the houses are rendered
    expect(getByText('Cra 1')).toBeInTheDocument();
    expect(getByRole('button', { name: 'Delete' })).toBeInTheDocument();
  });
});
