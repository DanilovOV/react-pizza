import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    categoryId: 0,
    sort: {
      name: 'популярности',
      method: 'rating',
    },
  },
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSortMethod(state, action) {
      state.sort = action.payload;
    },
  },
});

export const { setCategoryId, setSortMethod } = filterSlice.actions;

export default filterSlice.reducer;
