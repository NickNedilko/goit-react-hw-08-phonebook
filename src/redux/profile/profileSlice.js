import { profileInitialState } from "./initialState";
import { profileThunk } from "./profileThunk";

const { createSlice } = require("@reduxjs/toolkit");


const handleFulfield = (state, {payload}) =>{
    state.user = payload;
    state.isloading = false;
}
const handlePending = (state) => { 
    state.isloading = true;
    state.error = ''
}

const handleRejected = (state) => {
    state.error = true;
    state.isloading = false;
}


const profileSlice = createSlice({
    name: 'profile',
    initialState: profileInitialState,
    extraReducers: builder=>{
        builder.addCase(profileThunk.fulfilled(), handleFulfield)
        .addMatcher((action) => action.type.endsWith('/pending'), handlePending)
        .addMatcher((action) => action.type.endsWith('/rejected'), handleRejected)
    }
  
    }
)

export const profileReduser = profileSlice.reducer;