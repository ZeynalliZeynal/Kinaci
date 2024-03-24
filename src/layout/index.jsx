import Navbar from '~/layout/navbar'
import Footer from '~/layout/footer'
import { Outlet, useLocation } from 'react-router-dom'
import ContactUsSection from './contuctUsSection'
import NavigateLinks from '~/layout/navigateLinks'

export default function Layout() {
  const location = useLocation()
  return (
    <>
      <Navbar />
      {location.pathname !== '/' && <NavigateLinks />}
      <Outlet />
      {location.pathname !== '/contact' && <ContactUsSection />}
      <Footer />
    </>
  )
}
