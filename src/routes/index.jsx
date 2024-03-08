import { createBrowserRouter } from 'react-router-dom'
import Layout from '~/layout'
import routesChildren from '~/data/routesChildren.jsx'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: routesChildren,
  },
])

export default routes
