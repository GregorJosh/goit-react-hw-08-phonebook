import { createSlice } from '@reduxjs/toolkit';
import { Loading } from 'notiflix';

import { createUser, refreshUser, logoutUser, loginUser } from './operations';
import { isRejected, isPending, onRejected, onPending } from 'redux/helpers';

const onLogin = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;

  Loading.remove();
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder => {
    builder
      .addCase(createUser.fulfilled, onLogin)
      .addCase(loginUser.fulfilled, onLogin)
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.user = action.payload;

        Loading.remove();
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;

        Loading.remove();
      })
      .addCase(logoutUser.fulfilled, state => {
        state.isLoggedIn = false;
        state.token = null;
        state.user = { name: null, email: null };

        Loading.remove();
      })
      .addMatcher(isPending, onPending)
      .addMatcher(isRejected, onRejected);
  },
});

export const authReducer = authSlice.reducer;
