import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  addedItems: localStorage.getItem('addedItems')
    ? JSON.parse(localStorage.getItem('addedItems'))
    : [],
}

const addToFavSlice = createSlice({
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

      localStorage.setItem('addedItems', JSON.stringify(state.addedItems))
    },
    emptyList: (state) => {
      state.addedItems = []
      localStorage.removeItem('addedItems')
    },
  },
})

export const { addItem, emptyList } = addToFavSlice.actions
export default addToFavSlice.reducer
