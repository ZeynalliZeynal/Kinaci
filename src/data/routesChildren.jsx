import Home from '~/pages/home'
import Estate from '~/pages/estate'
import About from '~/pages/about'
import Services from '~/pages/services'
import Contact from '~/pages/contact'
import Comments from '~/pages/comments'
import Blog from '~/pages/blog'
import NotFound from '~/pages/notFound'
import ForSale from '~/pages/estate/forSale/index.jsx'

const routesChildren = [
  {
    index: 'home',
    element: <Home />,
  },
  {
    path: 'estate',
    element: <Estate />,
    children: [
      {
        path: 'forSale',
        element: <ForSale />,
      },
      {
        path: 'forRent',
        element: <ForSale />,
      },
    ],
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
    path: '*',
    element: <NotFound />,
  },
]

export default routesChildren
