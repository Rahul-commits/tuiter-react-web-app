import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, registerThunk,logoutThunk,profileThunk,updateUserThunk } from "../services/auth-thunks"; // Import the registerThunk

const authSlice = createSlice({
  name: "auth",
  initialState: { currentUser: null },
  reducers: {},
  extraReducers: {
    [loginThunk.fulfilled]: (state, { payload }) => {
      state.currentUser = payload;
    },
    [logoutThunk.fulfilled]: (state) => {
        state.currentUser = null;
      },
      [profileThunk.fulfilled]: (state, { payload }) => {
        state.currentUser = payload;
      },
      [profileThunk.rejected]: (state, { payload }) => {
        state.currentUser = null;
      },
      [profileThunk.pending]: (state, action) => {
        state.currentUser = null;
      },
      [updateUserThunk.fulfilled]: (state, { payload }) => {
        state.currentUser = payload;
      },
   
    [registerThunk.fulfilled]: (state, { payload }) => {
      // Handle user registration here
      state.currentUser = payload; // Update currentUser if needed
    },
  },
});

export default authSlice.reducer;