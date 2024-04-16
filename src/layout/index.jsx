import Navbar from '~/layout/navbar'
import Footer from '~/layout/footer'
import { Outlet, useLocation } from 'react-router-dom'
import ContactUsSection from './contuctUsSection'
import Breadcrumbs from '~/layout/breadcrumbs'

export default function Layout() {
  const location = useLocation()
  return (
    <>
      <Navbar /> {location.pathname !== '/' && <Breadcrumbs />} <Outlet />{' '}
      {location.pathname !== '/contact' && <ContactUsSection />} <Footer />{' '}
      {/*<Cookies />*/}
    </>
  )
}
