import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  addedItems: [],
}

export const addToFavSlice = createSlice({
  name: 'addToFav',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.addedItems.find(
        (item) => item.id === action.payload.id,
      )
      if (!existingItem) state.addedItems.push(action.payload)
      else if (existingItem)
        state.addedItems = state.addedItems.filter(
          (item) => item.id !== action.payload.id,
        )
    },
    emptyList: (state) => {
      state.addedItems = []
    },
  },
})

export const { addItem, emptyList } = addToFavSlice.actions
export default addToFavSlice.reducer
