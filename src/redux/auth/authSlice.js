import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, signUpThunk } from "./authThunk";

const handleFulfield = (state, { payload }) => {
    console.log(payload.token)
    state.access_token = payload.token;
    state.user = payload.user;
    state.isloading = false;
};
const handlePending = (state) => { 
    state.isloading = true;
    state.error = ''
}

const handleRejected = (state, {payload}) => {
    state.error = payload
    state.isloading = false;
}

const initialState = {
    access_token: '',
    user: {name: null, email: null},
    isLoading: false,
    error: '',
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(signUpThunk.fulfilled(), handleFulfield)
            .addCase(loginThunk.fulfilled(), handleFulfield)
            .addMatcher((action) => action.type.endsWith('/pending'), handlePending)
            .addMatcher((action) => action.type.endsWith('/rejected'), handleRejected)
        
    }
    
})

console.log(authSlice)
export const authReducer  = authSlice.reducer;