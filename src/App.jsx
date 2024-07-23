import { RouterProvider } from 'react-router-dom';
import routes from '~/routes.jsx';
import { Suspense } from 'react';
import FullPageLoading from '~/components/FullPageLoading.jsx';

export default function App() {
  return (
    <Suspense fallback={<FullPageLoading />}>
      <RouterProvider router={routes} />;
    </Suspense>
  );
}
