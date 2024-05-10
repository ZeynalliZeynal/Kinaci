import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseURL } from '~/data/consts.js';

const initialState = {
  addedItems: [],
  status: 'idle',
};

export const fetchFavorites = createAsyncThunk(
  'favorites/fetchFavorites',
  async (userId) => {
    try {
      const res = await axios.get(`${baseURL}/data/users/${userId}/favorites`);
      return res.data;
    } catch (err) {
      console.error(err.message);
    }
  },
);

export const deleteFavorites = createAsyncThunk(
  'favorites/deleteFavorites',
  async (userId) => {
    try {
      const res = await axios.delete(
        `${baseURL}/data/users/${userId}/favorites`,
      );
      return res.data;
    } catch (err) {
      console.error(err.message);
    }
  },
);

export const postFavorites = createAsyncThunk(
  'favorites/postFavorites',
  async ({ userId, favObj }) => {
    try {
      const res = await axios.post(
        `${baseURL}/data/users/${userId}/favorites`,
        favObj,
      );
      return res.data;
    } catch (err) {
      console.error(err.message);
    }
  },
);

const addToFavSlice = createSlice({
  name: 'addToFav',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.addedItems.find(
        (item) => item.id === action.payload.id,
      );
      if (!existingItem) state.addedItems.push(action.payload);
      else if (existingItem)
        state.addedItems = state.addedItems.filter(
          (item) => item.id !== action.payload.id,
        );
    },
    emptyList: (state) => {
      state.addedItems = [];
      localStorage.removeItem('addedItems');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavorites.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.addedItems = action.payload;
      })
      .addCase(postFavorites.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(postFavorites.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const existingItem = state.addedItems.find(
          (item) => item.id === action.payload.id,
        );
        if (!existingItem) state.addedItems.push(action.payload);
        else if (existingItem)
          state.addedItems = state.addedItems.filter(
            (item) => item.id !== action.payload.id,
          );
      })
      .addCase(deleteFavorites.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(deleteFavorites.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.addedItems = [];
      });
  },
});

export const { addItem, emptyList } = addToFavSlice.actions;
export default addToFavSlice.reducer;
