import React from 'react';
import { render } from '@testing-library/react';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { ListItem } from './listItem';

describe('With React Testing Library', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  it('Check "listWrapper"', () => {
      store = mockStore(initialState);
      const { getByText } = render(
          <Provider store={store}>
              <ListItem />
          </Provider>
      );
      const removeBtn = getByText("Kaldır");
      
  });
});