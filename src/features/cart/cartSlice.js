import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: JSON.parse(localStorage.getItem('cart')) ?? []
  },
  reducers: {
    addCart: (state, action) => {
      const product = action.payload.product;
      state.value.push(product);
      localStorage.setItem('cart', JSON.stringify(state.value));
    },
    removeCart: (state, action) => {
      const product = action.payload.product;
      if (product) {
        const index = state.value.findIndex(_product => _product.id === product.id);
        state.value.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(state.value));
      }
    }
  }
});

// Action creators are generated for each case reducer function
export const { addCart, removeCart } = cartSlice.actions;

export default cartSlice.reducer;
