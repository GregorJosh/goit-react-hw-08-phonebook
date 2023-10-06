import { createSlice } from '@reduxjs/toolkit';
import { Loading } from 'notiflix';

import { addContact, deleteContact, fetchContacts } from './operations';
import { isRejected, isPending, onRejected, onPending } from 'redux/helpers';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);

        Loading.remove();
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(({ id }) => id !== action.payload);

        Loading.remove();
      })
      .addMatcher(isPending, onPending)
      .addMatcher(isRejected, onRejected);
  },
});

export const setError = contactsSlice.actions.setError;
export const contactsReducer = contactsSlice.reducer;
