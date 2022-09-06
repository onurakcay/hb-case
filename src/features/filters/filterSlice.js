import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    value: ''
  },
  reducers: {
    setFilter: (state, action) => {
      state.value = action.payload.query.toLowerCase();
    }
  }
});

// Action creators are generated for each case reducer function
export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
