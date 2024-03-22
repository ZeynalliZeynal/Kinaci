import Navbar from '~/layout/navbar'
import Footer from '~/layout/footer'
import { Outlet } from 'react-router-dom'
import ContactUsSection from './contuctUsSection'

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <ContactUsSection />
      <Footer />
    </>
  )
}
