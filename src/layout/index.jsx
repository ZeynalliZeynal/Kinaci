import Navbar from '~/layout/navbar/index.jsx';
import Footer from '~/layout/footer/index.jsx';
import { Outlet, useLocation } from 'react-router-dom';
import ContactUsSection from './ContactUsSection.jsx';
import Breadcrumbs from '~/layout/Breadcrumbs.jsx';
import { useIntersectionObserver } from '~/hooks/useIntersectionObserver.js';
import GoToTopButton from '~/components/GoToTopButton.jsx';

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
