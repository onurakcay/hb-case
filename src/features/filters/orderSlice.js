import { createSlice } from '@reduxjs/toolkit';

export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    value: ''
  },
  reducers: {
    setOrder: (state, action) => {
      state.value = action.payload.query.toLowerCase();
    }
  }
});

// Action creators are generated for each case reducer function
export const { setOrder } = orderSlice.actions;

export default orderSlice.reducer;
