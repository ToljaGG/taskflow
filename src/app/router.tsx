import { createBrowserRouter } from 'react-router-dom'
import { TasksPage } from '../pages/TasksPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <TasksPage />,
  },
])