import Navbar from '~/layout/navbar'
import Footer from '~/layout/footer'
import { Outlet, useLocation } from 'react-router-dom'
import ContactUsSection from './contactUsSection'
import Breadcrumbs from '~/layout/breadcrumbs'
import { useIntersectionObserver } from '~/hooks/useIntersectionObserver.js'
import GoToTopButton from '~/components/GoToTopButton.jsx'

export default function Layout() {
  const [isVisible, ref] = useIntersectionObserver()
  const location = useLocation()
  return (
    <>
      <Navbar /> {location.pathname !== '/' && <Breadcrumbs />}
      <main ref={ref}>
        {isVisible && <GoToTopButton />} <Outlet />{' '}
        {location.pathname !== '/contact' && <ContactUsSection />}
        <Footer />
      </main>
      {/*<Cookies />*/}
    </>
  )
}
