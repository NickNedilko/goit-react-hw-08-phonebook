import { createAsyncThunk } from "@reduxjs/toolkit"
import { clearAuthHeader,  setAuthHeader} from "api/auth";
import axios from "axios";



export const signUpThunk = createAsyncThunk('signUp', async (credentials, thunkAPI) => {
    try {
        const {data} = await axios.post('users/signup', credentials)
        setAuthHeader(data.token)
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.massage)
    }
})

export const loginThunk = createAsyncThunk('login', async (credentials, thunkAPI) => {
    try {
        const {data} = await axios.post('users/login', credentials)
        setAuthHeader(data.token);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.massage)

    }
})


export const logOutThunk = createAsyncThunk('logout', async (_, thunkAPI) => {
    try {
        await axios.post('users/logout')
        clearAuthHeader();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.massage) 
    }
})