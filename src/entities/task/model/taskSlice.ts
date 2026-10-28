import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { Task } from "./types"
import { mockTasks } from "./mockTasks"

interface TaskState {
  tasks: Task[]
}

const initialState: TaskState = {
  tasks: mockTasks,
}

const taskSlice = createSlice({
  name: "tasks",
  initialState,

  reducers: {
    addTask(state, action: PayloadAction<Task>) {
      state.tasks.push(action.payload)
    },

    deleteTask(state, action: PayloadAction<string>) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload)
    },

    changeTaskStatus(
      state,
      action: PayloadAction<{
        id: string
        status: "todo" | "in-progress" | "done"
      }>,
    ) {
      const task = state.tasks.find((task) => task.id === action.payload.id)

      if (task) task.status = action.payload.status

      if (task && action.payload.status === "done") {
        const today = new Date()

        const year = today.getFullYear()
        const month = String(today.getMonth() + 1).padStart(2, "0")
        const day = String(today.getDate()).padStart(2, "0")

        task.completedDate = `${day}-${month}-${year}`
      } else if (task && action.payload.status !== "done") {
        task.completedDate = null
      }
    },
  },
})

export const { addTask, deleteTask, changeTaskStatus } = taskSlice.actions

export default taskSlice.reducer
