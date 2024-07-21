import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
  findBy: 'name',
} ;

// Create slice for filter
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(state, action) {
      return action.payload;
    },

    prepare: filterValue => {
      return {
        payload: filterValue,
      };
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
