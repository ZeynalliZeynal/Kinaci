import { RouterProvider } from 'react-router-dom';
import routes from '~/routes/index.jsx';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  emptyList,
  fetchFavorites,
} from '~/redux/features/addToFav/addToFavSlice.js';
import { fetchUsers } from '~/redux/features/auth/authSlice.js';
import { useActiveAccount } from './redux/selectors';

export default function App() {
  const dispatch = useDispatch();
  const activeAccount = useActiveAccount();

  useEffect(() => {
    dispatch(fetchUsers());
    if (activeAccount) dispatch(fetchFavorites(activeAccount.id));
    else dispatch(emptyList());
  }, [activeAccount, dispatch]);
  return <RouterProvider router={routes} />;
}
