import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AddCar from '../../components/addCars/addCar';
import store from '../../Redux/store';

describe('It renders', () => {
  it('Adds car correctly', () => {
    const tree = render(
      <Provider store={store}>
        <MemoryRouter>
          <AddCar />
        </MemoryRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
