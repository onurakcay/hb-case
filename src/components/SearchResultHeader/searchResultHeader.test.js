import React from 'react';
import { render } from '@testing-library/react';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { SearchResultHeader } from './searchResultHeader';

describe('With React Testing Library', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  it('Shows "Sıralama"', () => {
      store = mockStore(initialState);
      const { getByText } = render(
          <Provider store={store}>
              <SearchResultHeader />
          </Provider>
      );

      expect(getByText('Sıralama')).not.toBeNull();
  });
});