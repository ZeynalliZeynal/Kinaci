import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';

const Layout = lazy(() => import('~/layout'));
const Home = lazy(() => import('~/pages/home'));
const Estate = lazy(() => import('~/pages/estate'));
const EstateItem = lazy(() => import('~/pages/estate/estateItem'));
const About = lazy(() => import('~/pages/about'));
const Services = lazy(() => import('~/pages/services'));
const Contact = lazy(() => import('~/pages/contact'));
const Comments = lazy(() => import('~/pages/comments'));
const Blog = lazy(() => import('~/pages/blog'));
const NotFound = lazy(() => import('~/pages/notFound'));
const ServiceItem = lazy(() => import('~/pages/services/serviceItem'));
const BlogItem = lazy(() => import('~/pages/blog/blogItem'));

const routes = createBrowserRouter([
  {
    name: 'Main Layout',
    path: '/',
    element: <Layout />,
    children: [
      {
        index: 'home',
        element: <Home />,
      },
      {
        path: 'estate',
        element: <Estate />,
      },
      {
        path: 'estate/:sellingType',
        element: <Estate />,
      },
      {
        path: 'estate/:sellingType/:id',
        element: <EstateItem />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'services',
        element: <Services />,
      },
      {
        path: 'services/:service',
        element: <ServiceItem />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'comments',
        element: <Comments />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'blog/:id',
        element: <BlogItem />,
      },
    ],
  },

  {
    name: 'Error Layout',
    path: '*',
    element: <NotFound />,
  },
]);

export default routes;
