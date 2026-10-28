import type { Task } from "./types"

export const mockTasks: Task[] = [
  {
    id: "1",
    title: "Learn React",
    description: "Study components and props",
    status: "todo",
    priority: "low",
    createdDate: "13-10-2026",
    completedDate: null,
  },
  {
    id: "2",
    title: "Learn Redux Toolkit",
    description: "Understand slices and store",
    status: "in-progress",
    priority: "medium",
    createdDate: "13-10-2026",
    completedDate: null,
  },
  {
    id: "3",
    title: "Create TaskFlow",
    description: "Build the first working version",
    status: "done",
    priority: "high",
    createdDate: "12-10-2026",
    completedDate: "15-10-2026",
  },
]
