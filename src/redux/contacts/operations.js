import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const isExist = (contacts, data, type) => {
  if (type === 'Add') {
    return contacts.some(({ id, number }) => {
      if (id === data.id) {
        return false;
      }
      return number === data.number;
    });
  }
  if (type === 'Edit') {
    return contacts.some(contact => {
      if (contact.id === data.id) {
        return false;
      }
      return contact.number === data.number;
    });
  }
};

const isDataChanged = (contacts, data) => {
  const contact = contacts.find(({ id }) => id === data.id);
  const { name, number } = contact;
  return name === data.name && number === data.number;
};

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

      if (isExist(contacts.items, data, 'Add')) {
        return rejectWithValue({
          message: `A contact with this number already exists`,
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
  async (data, { rejectWithValue, getState }) => {
    const { id, ...contactData } = data;
    try {
      const { contacts } = getState();

      if (isDataChanged(contacts.items, data)) return data;

      if (isExist(contacts.items, data, 'Edit')) {
        return rejectWithValue({
          message: `A contact with this number already exists`,
        });
      }
      const response = await axios.patch(`/contacts/${id}`, contactData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
