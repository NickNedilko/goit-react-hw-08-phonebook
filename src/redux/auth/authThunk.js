import { createAsyncThunk } from "@reduxjs/toolkit"
// import { login} from "api/auth"
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/'

export const signUpThunk = createAsyncThunk('signUp', async credentials => {
    try {
        const {data} = await axios.post('users/signup', credentials)
        return data;
    } catch (error) {
        return error
    }
})

export const loginThunk = createAsyncThunk('login', async credentials => {
    try {
        const {data} = await axios.post('users/login', credentials)
        return data;
    } catch (error) {
        return error
    }
})