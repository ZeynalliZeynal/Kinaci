import { createBrowserRouter } from 'react-router-dom'
import Layout from '~/layout'
import Home from '~/pages/home/index.jsx'
import Estate from '~/pages/estate/index.jsx'
import EstateItem from '~/pages/estate/estateItem/index.jsx'
import About from '~/pages/about/index.jsx'
import Services from '~/pages/services/index.jsx'
import Contact from '~/pages/contact/index.jsx'
import Comments from '~/pages/comments/index.jsx'
import Blog from '~/pages/blog/index.jsx'
import NotFound from '~/pages/notFound/index.jsx'
import ServiceItem from '~/pages/services/serviceItem/index.jsx'
import BlogItem from '~/pages/blog/blogItem/index.jsx'

const routes = createBrowserRouter([
  {
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
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])

export default routes
