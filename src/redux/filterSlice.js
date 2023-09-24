import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(state, action) {
      state = action.payload;
      return action.payload;
    },
  },
});

export const setFilter = filterSlice.actions.setFilter;
export const filterReducer = filterSlice.reducer;
