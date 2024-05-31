import { Outlet, useLocation } from 'react-router-dom';
import { useIntersectionObserver } from '~/hooks/useIntersectionObserver.js';
import Navbar from '~/layout/navbar';
import Footer from '~/layout/footer';
import ContactUsSection from './ContactUsSection';
import Breadcrumbs from '~/layout/Breadcrumbs';
import GoToTopButton from '~/components/GoToTopButton';

export default function Layout() {
  const [isVisible, ref] = useIntersectionObserver();
  const location = useLocation();

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
  );
}
