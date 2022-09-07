import React from 'react';
import { render } from '@testing-library/react';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Modal } from './modal';

describe('With React Testing Library', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  it('Shows "Ürünü silmek istediğinize emin misiniz?"', () => {
      store = mockStore(initialState);
      const { getByText } = render(
          <Provider store={store}>
              <Modal />
          </Provider>
      );

      expect(getByText('Ürünü silmek istediğinize emin misiniz?')).not.toBeNull();
  });
});