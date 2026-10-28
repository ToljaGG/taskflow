import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { getCurrentUser } from "./auth"
import type { User } from "./auth"

interface AuthState {
  currentUser: User | null
}

const initialState: AuthState = {
  currentUser: getCurrentUser(),
}

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    setCurrentUser(state, action: PayloadAction<User>) {
      state.currentUser = action.payload
    },
    
    clearCurrentUser(state) {
      state.currentUser = null
    },
  },
})

export const { setCurrentUser, clearCurrentUser } = authSlice.actions
export default authSlice.reducer