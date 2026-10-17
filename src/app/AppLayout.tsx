import { Outlet } from 'react-router-dom'
import { Header } from '@/widgets/Header'

export function AppLayout() {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>
    </>
  )
}