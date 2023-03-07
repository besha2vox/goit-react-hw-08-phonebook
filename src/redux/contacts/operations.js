import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, { rejectWithValue, getState }) => {
    try {
      const { contacts } = getState();
      const isExist = contacts.items.some(
        ({ name }) => name.toLowerCase() === data.name.toLowerCase()
      );
      if (isExist) {
        return rejectWithValue({
          message: `A contact ${data.name} already exists`,
        });
      }
      const response = await axios.post('/contacts', data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async (data, { rejectWithValue }) => {
    const { id, ...contactData } = data;
    try {
      const response = await axios.patch(`/contacts/${id}`, contactData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
