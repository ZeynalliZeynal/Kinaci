import { configureStore } from '@reduxjs/toolkit'
import addToFavReducer from './features/addToFav/addToFavSlice.js'
import auth from './features/auth/authSlice'

export const store = configureStore({
  reducer: {
    addToFav: addToFavReducer,
    auth,
  },
})
