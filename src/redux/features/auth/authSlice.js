import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeAccount: localStorage.getItem('activeAccount')
    ? JSON.parse(localStorage.getItem('activeAccount'))
    : null,
  accounts: localStorage.getItem('accounts')
    ? JSON.parse(localStorage.getItem('accounts'))
    : [],
}
console.log(initialState)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signUp: (state, action) => {
      state.activeAccount = action.payload
      state.accounts.push(action.payload)
      localStorage.setItem('activeAccount', JSON.stringify(action.payload))
      localStorage.setItem('accounts', JSON.stringify(state.accounts))
    },
    login: (state, action) => {
      state.activeAccount = state.accounts.find(
        (acc) => acc.email === action.payload.email,
      )
      localStorage.setItem('activeAccount', JSON.stringify(state.activeAccount))
    },
    logout: (state) => {
      state.activeAccount = null
      localStorage.removeItem('activeAccount')
    },
  },
})

export const { signUp, login, logout } = authSlice.actions
export default authSlice.reducer
