import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://657cf745853beeefdb9a259f.mockapi.io/api/contacts';

const getContacts = async (_, thunkAPI) => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
};

const postContact = async (newContact, thunkAPI) => {
  try {
    const response = await axios.post(URL, newContact);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
};

const delContact = async (contactId, thunkAPI) => {
  try {
    const response = await axios.delete(`${URL}/${contactId}`);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
};

export const getContactsThunk = createAsyncThunk(
  'phoneBook/getContacts',
  getContacts
);

export const postContactThunk = createAsyncThunk(
  'phoneBook/postContact',
  postContact
);

export const delContactThunk = createAsyncThunk(
  'phoneBook/delContact',
  delContact
);
