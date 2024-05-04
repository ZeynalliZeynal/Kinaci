import { Menu, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { logout } from '~/redux/features/auth/authSlice.js'
import { FiLogOut } from 'react-icons/fi'
import LoginForm from '~/components/loginForm/index.jsx'
import { useDispatch } from 'react-redux'
import { useActiveAccount, useStatus } from '~/redux/selectors.js'

export default function Registration({ data }) {
  const [isOpen, setIsOpen] = useState(false)
  const activeAccount = useActiveAccount()
  const status = useStatus()
  const dispatch = useDispatch()
  return (
    <>
      {activeAccount ? (
        <Menu as="div" className="relative text-white">
          <Menu.Button className="font-semibold px-3 py-1 rounded-3xl bg-gradient-to-r from-red-600 to-yellow-500 via-orange-500 outline-none hover:rounded-lg duration-300">
            {status === 'pending' ? 'Loading...' : `@${activeAccount.userName}`}
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Menu.Items className="absolute top-[135%] left-0 z-[80] w-[250px] max-h-[300px] font-semibold">
              <div className="flex flex-col bg-blue-900 rounded-xl p-3">
                <button
                  className="w-full gap-2 hover:bg-white/10 p-2 rounded-lg justify-start"
                  onClick={() => dispatch(logout())}
                >
                  <span>
                    <FiLogOut />
                  </span>
                  Çıxış
                </button>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      ) : (
        <button className={data.styles} onClick={() => setIsOpen(true)}>
          <span>{data.icon}</span>
          <span className="hidden sm:inline-block">{data.text}</span>
        </button>
      )}{' '}
      <LoginForm isOpen={isOpen} closeModal={() => setIsOpen(false)} />
    </>
  )
}
