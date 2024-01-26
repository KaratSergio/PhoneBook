import { createSelector } from '@reduxjs/toolkit';

export const selectLoading = state => state.contacts.isLoading;
export const selectContacts = state => state.contacts.items;
export const selectError = state => state.contacts.error;
export const selectFilters = state => state.filters;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilters],
  (contacts, filters) => {
    return contacts.filter(
      ({ name }) =>
        typeof name === 'string' &&
        name.toLowerCase().includes(filters.toLowerCase())
    );
  }
);
