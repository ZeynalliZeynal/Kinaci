import { useSelector } from 'react-redux'

const useActiveAccount = () => useSelector((state) => state.auth.activeAccount)
const useAccounts = () => useSelector((state) => state.auth.accounts)
const useStatus = () => useSelector((state) => state.auth.status)

export { useAccounts, useStatus, useActiveAccount }
