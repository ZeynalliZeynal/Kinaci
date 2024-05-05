import { RouterProvider } from 'react-router-dom';
import routes from '~/routes/index.jsx';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useActiveAccount } from '~/redux/selectors.js';
import {
  emptyList,
  fetchFavorites,
} from '~/redux/features/addToFav/addToFavSlice.js';
import { fetchUsers } from '~/redux/features/auth/authSlice.js';

export default function App() {
  const dispatch = useDispatch();
  const activeAccount = useActiveAccount();

  useEffect(() => {
    dispatch(fetchUsers());
    if (activeAccount) dispatch(fetchFavorites(activeAccount.id));
    else dispatch(emptyList());
  }, [activeAccount]);
  return <RouterProvider router={routes} />;
}
