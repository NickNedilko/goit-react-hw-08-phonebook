import { createAsyncThunk } from "@reduxjs/toolkit";
import { setAuthHeader } from "api/auth";
import axios from "axios";



export const profileThunk = createAsyncThunk('profile', async (_, thunkAPI)=>{
  const {access_token} = thunkAPI.getState().auth;
  if(!access_token){
    return thunkAPI.rejectWithValue('No token log in please') 
  }
  setAuthHeader(access_token)
 try {
  const {data} = await axios.get('/users/current')
  return data;
 } catch (error) {
  return thunkAPI.rejectWithValue(error.massage) 
 }
})