import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeAccount: null,
  accounts: [
    {
      id: 1,
      userName: 'zzeyn04',
      fullName: 'Zeynalli Zeynal',
      password: 'zzeyn_04',
    },
  ],
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signUp: (state, action) => {
      state.activeAccount = action.payload
      state.accounts.push(action.payload)
    },
    login: (state, action) => {
      state.activeAccount = action.payload
    },
  },
})

export const { signUp, login } = authSlice.actions
export default authSlice.reducer
