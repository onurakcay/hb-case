import React from 'react';
import { render } from '@testing-library/react';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Filter } from './filter';

describe('With React Testing Library', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  it('Shows "Renk"', () => {
      store = mockStore(initialState);
      const { getByText } = render(
          <Provider store={store}>
              <Filter />
          </Provider>
      );

      expect(getByText('Renk')).not.toBeNull();
  });
});