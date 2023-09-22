import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialContactsState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    removeContact(state, { payload }) {
      return state.filter(({ name }) => name !== payload);
    },
    setContacts(state, { payload }) {
      return payload;
    },
  },
});

export const { addContact, removeContact, setContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
