import React from 'react';
import { render } from '@testing-library/react';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Header } from './header';

describe('With React Testing Library', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  it('Check "headerWrapper"', () => {
      store = mockStore(initialState);
      const { container } = render(
          <Provider store={store}>
              <Header />
          </Provider>
      );

      expect(container.getElementsByClassName('headerWrapper').length).toBe(1);
  });
});