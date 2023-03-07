import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  removeContact,
  updateContact,
} from './operations';

const initialState = {
  items: [],
  currentContact: {},
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    //fetch all contacts
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
    //add contact
    builder
      .addCase(addContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
        state.error = null;
        state.isLoading = false;
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
    //remove contact
    builder
      .addCase(removeContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(removeContact.fulfilled, (state, { payload }) => {
        const index = state.items.findIndex(
          contact => contact.id === payload.id
        );
        state.items.splice(index, 1);
        state.error = null;
        state.isLoading = false;
      })
      .addCase(removeContact.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
    //update contact
    builder
      .addCase(updateContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateContact.fulfilled, (state, { payload }) => {
        const index = state.items.findIndex(contact => contact.id === payload);
        state.items.splice(index, 1, payload);
        state.error = null;
        state.isLoading = false;
      })
      .addCase(updateContact.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
