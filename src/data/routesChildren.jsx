import Home from '~/pages/home'
import Estate from '~/pages/estate'
import About from '~/pages/about'
import Services from '~/pages/services'
import Contact from '~/pages/contact'
import Comments from '~/pages/comments'
import Blog from '~/pages/blog'
import NotFound from '~/pages/notFound'

const routesChildren = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: 'estate',
    element: <Estate />,
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