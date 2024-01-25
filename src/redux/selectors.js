import { createSelector } from '@reduxjs/toolkit';

export const selectLoading = state => state.contacts.isLoading;
export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(
      ({ name }) =>
        typeof name === 'string' &&
        name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
