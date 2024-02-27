import Main from '~/layout/main'
import Navbar from '~/layout/navbar'
import Footer from '~/layout/footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
