import React from 'react';
import { render } from '@testing-library/react';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { List } from './list';

describe('With React Testing Library', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  it('Check "listWrapper"', () => {
      store = mockStore(initialState);
      const { container } = render(
          <Provider store={store}>
              <List />
          </Provider>
      );
      expect(container.getElementsByClassName('listWrapper').length);
      
  });
});