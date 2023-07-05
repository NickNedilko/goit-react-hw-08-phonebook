import { createSlice } from "@reduxjs/toolkit";
import { logOutThunk, loginThunk, signUpThunk } from "./authThunk";
import  { authInitialState } from "./initialState";

const handleFulfield = (state, { payload }) => {
    state.access_token = payload.token;
    state.isloading = false;
    state.user = payload.user;


};
const handleLoginFulfield = (state, { payload }) => {
    state.access_token = payload.token;
    state.isloading = false;
    state.user = payload.user;
    state.error = ''
    

};

const handleLogOutFulfield = (state)=>{
    state.access_token = null;
    state.isloading = false;
    state.user = {name: null, email: null};

} 
const handlePending = (state) => { 
    state.isloading = true;
    state.error = '';
   
}

const handleRejected = (state, {payload}) => {
    state.isloading = false;
    state.error = payload;
}




const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState ,
    extraReducers: builder => {
        builder
            .addCase(signUpThunk.fulfilled(), handleFulfield)
            .addCase(loginThunk.fulfilled(), handleLoginFulfield)
            .addCase(logOutThunk.fulfilled(), handleLogOutFulfield)
            .addMatcher((action) => action.type.endsWith('/pending'), handlePending)
            .addMatcher((action) => action.type.endsWith('/rejected'), handleRejected)
        
    }
    
})


export const authReducer  = authSlice.reducer;