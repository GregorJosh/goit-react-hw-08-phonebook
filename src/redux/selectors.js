import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (!filter) {
      return contacts;
    }

    return contacts.filter(contact => {
      const filterLC = filter.toLowerCase();
      const contactNameLC = contact.name.toLowerCase();

      return contactNameLC.includes(filterLC);
    });
  }
);
