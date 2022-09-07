import React from 'react';
import { render } from '@testing-library/react';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Brand } from './brand';

describe('With React Testing Library', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  it('Check "headerWrapper"', () => {
      store = mockStore(initialState);
      const { getByText } = render(
          <Provider store={store}>
              <Brand />
          </Provider>
      );
      getByText("hepsiburada")
  });
});