import type { Task } from './types'

export const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Learn React',
    description: 'Study components and props',
    status: 'in-progress',
    priority: 'high',
    endDate: '2026-10-20',
    createdDate: '2026-10-13',
  },
  {
    id: '2',
    title: 'Learn Redux Toolkit',
    description: 'Understand slices and store',
    status: 'todo',
    priority: 'medium',
    endDate: null,
    createdDate: '2026-10-13',
  },
  {
    id: '3',
    title: 'Create TaskFlow',
    description: 'Build the first working version',
    status: 'done',
    priority: 'low',
    endDate: null,
    createdDate: '2026-10-12',
  },
]