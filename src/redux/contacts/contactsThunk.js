import { createAsyncThunk } from '@reduxjs/toolkit';
// import { privateApi } from 'api/auth';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/'

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
        const {data} = await axios.get('/contacts');
        return data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
  }
);


export const deleteContactsThunk = createAsyncThunk(
  'contacts / deleteContact',
  async (contactId, thunkAPI) => {
    try {
        await axios.delete(`/contacts/${contactId}`);
        return contactId;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }

  }
);




export const addContactsThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);