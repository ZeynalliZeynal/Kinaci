import { useSelector } from 'react-redux'

const useUserFavorites = () => useSelector((state) => state.addToFav.addedItems)
const useActiveAccount = () => useSelector((state) => state.auth.activeAccount)
const useAccounts = () => useSelector((state) => state.auth.accounts)
const useStatus = () => useSelector((state) => state.auth.status)
const useFavStatus = () => useSelector((state) => state.addToFav.status)

export {
  useAccounts,
  useStatus,
  useActiveAccount,
  useUserFavorites,
  useFavStatus,
}
