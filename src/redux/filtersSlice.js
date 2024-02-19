import { createSlice } from '@reduxjs/toolkit';

const initialState = { filter: "" };

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    filterContacts: (state, action) => {
      return action.payload;
    },
  },
});

const { filterContacts } = filtersSlice.actions;
export default { filtersReducer: filtersSlice.reducer, filterContacts };