import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    value: JSON.parse(localStorage.getItem('productData'))
  },
  reducers: {
    search: (state, action) => {
      const searchQuery = action.payload.query.toLowerCase();
      const data = JSON.parse(localStorage.getItem('productData'));
      if (searchQuery.length > 2) {
        const searchResult = data.products.filter(_product => _product.name.toLowerCase().includes(searchQuery));
        state.value.products = searchResult;
      } else {
        state.value.products = data.products;
      }
    },
    searchByOrder: (state, action) => {
      const searchQuery = action.payload.query.toLowerCase();
      const data = JSON.parse(localStorage.getItem('productData'));
      const searchResult =
        searchQuery === ''
          ? data.products
          : data.products.sort(function (a, b) {
              let keyA, keyB;
              if (searchQuery === 'lower_price') {
                keyA = a.price;
                keyB = b.price;
                if (keyA < keyB) return -1;
                if (keyA > keyB) return 1;
              } else if (searchQuery === 'higher_price') {
                keyA = a.price;
                keyB = b.price;
                if (keyA > keyB) return -1;
                if (keyA < keyB) return 1;
              } else if (searchQuery === 'asc') {
                keyA = a.name;
                keyB = b.name;
                if (keyA < keyB) return -1;
                if (keyA > keyB) return 1;
              } else if (searchQuery === 'dsc') {
                keyA = a.name;
                keyB = b.name;
                if (keyA > keyB) return -1;
                if (keyA < keyB) return 1;
              }
              // Compare the 2 dates

              return 0;
            });
      state.value.products = searchResult;
    },
    searchByBrand: (state, action) => {
      const searchQuery = action.payload.query.toLowerCase();
      const data = JSON.parse(localStorage.getItem('productData'));
      const searchResult =
        searchQuery === ''
          ? data.products
          : data.products.filter(_product => {
              return _product.attributes.find(
                _attribute => _attribute.key === 'Marka' && _attribute.value.toLowerCase() === searchQuery
              )
                ? true
                : false;
            });
      state.value.products = searchResult;
    },
    searchByColor: (state, action) => {
      const searchQuery = action.payload.query.toLowerCase();
      const data = JSON.parse(localStorage.getItem('productData'));
      if (searchQuery.length > 2) {
        const searchResult = data.products.filter(_product => {
          return _product.attributes.find(
            _attribute => _attribute.key === 'Renk' && _attribute.value.toLowerCase() === searchQuery
          )
            ? true
            : false;
        });
        state.value.products = searchResult;
      } else {
        state.value.products = data.products;
      }
    }
  }
});

// Action creators are generated for each case reducer function
export const { search, searchByBrand, searchByColor, searchByOrder } = productsSlice.actions;

export default productsSlice.reducer;
