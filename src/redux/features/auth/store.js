import { configureStore } from '@reduxjs/toolkit';
import addToFavReducer from '../addToFav/addToFavSlice.js';
import auth from './authSlice.js';

export const store = configureStore({
  reducer: {
    addToFav: addToFavReducer,
    auth,
  },
});
