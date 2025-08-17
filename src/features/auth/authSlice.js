import { createSlice } from '@reduxjs/toolkit'

const initial = { user: null }

const authSlice = createSlice({
  name: 'auth',
  initialState: initial,
  reducers: {
    setUser: (s, a) => { s.user = a.payload },
    logout: (s) => { s.user = null },
  }
})

export const { setUser, logout } = authSlice.actions
export default authSlice.reducer
