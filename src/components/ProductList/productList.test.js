import React from 'react';
import { render } from '@testing-library/react';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { ProductList } from './productList';

describe('With React Testing Library', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  it('Check "productListWrapper"', () => {
      store = mockStore(initialState);
      const { container } = render(
          <Provider store={store}>
              <ProductList />
          </Provider>
      );

      expect(container.getElementsByClassName('productListWrapper').length).toBe(1);

  });
});