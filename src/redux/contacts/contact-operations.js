import { createAsyncThunk } from '@reduxjs/toolkit';

import { instance } from 'redux/auth/auth-operations';

// GET @ /contacts
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// POST @ /contacts
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const { data } = await instance.post('/contacts', contact);
      console.log('added contact', data);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// DELETE @ /contacts/:id
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const { data } = await instance.delete(`/contacts/${contactId}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// Edit @ /contacts/:id

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async ({ id, name, email, number }, thunkAPI) => {
    try {
      const {data} = await instance.patch(`/contacts/${id}`, {
        name,
        email,
        number,
      });
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
