import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseURL } from '~/data/consts.js';
import { emptyList } from '~/redux/features/addToFav/addToFavSlice.js';

const initialState = {
  activeAccount: localStorage.getItem('activeAccount')
    ? JSON.parse(localStorage.getItem('activeAccount'))
    : null,
  accounts: [],
  status: 'idle',
};

export const httpsStatus = {
  pending: 'pending',
  fulfilled: 'fulfilled',
  rejected: 'rejected',
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    const res = await axios.get(`${baseURL}/data/users`);
    return res.data;
  } catch (err) {
    return err.message;
  }
});

export const postUser = createAsyncThunk('users/postUser', async (userData) => {
  try {
    const res = await axios.post(`${baseURL}/data/users`, userData);
    return res.data;
  } catch (err) {
    return err.message;
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.activeAccount = state.accounts.find(
        (acc) => acc.email === action.payload.email,
      );

      localStorage.setItem(
        'activeAccount',
        JSON.stringify(state.activeAccount),
      );
    },
    logout: (state) => {
      state.activeAccount = null;
      localStorage.removeItem('activeAccount');
      emptyList();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.accounts = action.payload;
      })
      .addCase(postUser.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(postUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.activeAccount = action.payload;

        localStorage.setItem(
          'activeAccount',
          JSON.stringify(state.activeAccount),
        );
      });
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
