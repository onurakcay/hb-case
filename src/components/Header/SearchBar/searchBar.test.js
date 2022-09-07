import React from 'react';
import { render } from '@testing-library/react';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { SearchBar } from './searchBar';

describe('With React Testing Library', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  it('Check "searchWrapper"', () => {
      store = mockStore(initialState);
      const { container } = render(
          <Provider store={store}>
              <SearchBar />
          </Provider>
      );

      expect(container.getElementsByClassName('searchWrapper').length).toBe(1);
  });

  it('Check "search input"', () => {
    store = mockStore(initialState);
    const { getByPlaceholderText } = render(
        <Provider store={store}>
            <SearchBar />
        </Provider>
    );

    const searchInput = getByPlaceholderText("25 milyon ürün içinde ara")
    expect(searchInput.type).toEqual("search")
});
});