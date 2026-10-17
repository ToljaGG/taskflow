import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from '@/app/AppLayout'

import { TasksPage } from '@/pages/TasksPage'
import { ProfilePage } from '@/pages/ProfilePage'
import { LoginPage } from '@/pages/LoginPage'

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <TasksPage />,
      },
      {
        path: '/profile',
        element: <ProfilePage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
    ],
  },
])