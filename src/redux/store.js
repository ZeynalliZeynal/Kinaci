import { configureStore } from '@reduxjs/toolkit'
import addToFavReducer from './features/addToFav/addToFavSlice.js'

export const store = configureStore({
  reducer: {
    addToFav: addToFavReducer,
  },
})
