import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Task } from './types'
import { mockTasks } from './mockTasks'

interface TaskState {
  tasks: Task[]
}

const initialState: TaskState = {
  tasks: mockTasks,
}

const taskSlice = createSlice({
  name: 'tasks',
  initialState,

  reducers: {
    addTask(state, action: PayloadAction<Task>) {
      state.tasks.push(action.payload)
    },

    deleteTask(state, action: PayloadAction<string>) {
      state.tasks = state.tasks.filter(
        (task) => task.id !== action.payload,
      )
    },

    toggleTaskStatus(state, action: PayloadAction<string>) {
      const task = state.tasks.find(
        (task) => task.id === action.payload,
      )

      if (task) {
        task.status = task.status === 'done' ? 'todo' : 'done'
      }
    },
  },
})

export const { addTask, deleteTask, toggleTaskStatus } = taskSlice.actions

export default taskSlice.reducer