import { configureStore } from "@reduxjs/toolkit"
import taskReducer from "@/entities/task/model/taskSlice"
import authReducer from "@/features/auth/model/authSlice"

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    auth: authReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
