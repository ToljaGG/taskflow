import { RouterProvider } from 'react-router-dom'
import { router } from './app/router'
import { Header } from '@/widgets/Header'

export default function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  )
}