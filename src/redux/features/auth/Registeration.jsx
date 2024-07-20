import { Menu, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { FiLogIn, FiLogOut } from 'react-icons/fi';
import LoginForm from '~/components/loginForm/index.jsx';
import { useDispatch } from 'react-redux';
import { useUser } from './useUser';
import SpinnerMini from '~/components/SpinnerMini';
import { useSignOut } from './useSignOut';

export default function Registration() {
  const { user, isPending, isAuthenticated } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const { signOut, isSigningOut } = useSignOut();
  const dispatch = useDispatch();
  if (isPending) return <SpinnerMini />;
  return (
    <>
      {isAuthenticated ? (
        <Menu as="div" className="relative text-white">
          <Menu.Button className="font-semibold px-3 py-1 rounded-3xl bg-gradient-to-r from-red-600 to-yellow-500 via-orange-500 outline-none hover:rounded-lg duration-300">
            @{user.user_metadata.fullName.replaceAll(' ', '')}
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
                  onClick={() => signOut()}
                >
                  {isSigningOut ? (
                    <SpinnerMini />
                  ) : (
                    <span>
                      <FiLogOut />
                    </span>
                  )}
                  Çıxış
                </button>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      ) : (
        <button
          className="primary-button group text-orange-500 bg-white border-orange-500 border hover:bg-orange-500 hover:text-white"
          onClick={() => setIsOpen(true)}
        >
          <span>
            <FiLogIn />
          </span>
          <span className="hidden sm:inline-block">Daxil ol</span>
        </button>
      )}
      <LoginForm isOpen={isOpen} closeModal={() => setIsOpen(false)} />
    </>
  );
}
