import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { TbHeartPlus } from 'react-icons/tb';
import { ImHeart } from 'react-icons/im';
import { useWishlist } from '~/features/wishlist/useWishlist.js';
import SpinnerMini from '~/components/SpinnerMini.jsx';
import { useEmptyWishlist } from '~/features/wishlist/useEmptyWishlist.js';
import HeartBtn from '~/features/wishlist/HeartBtn.jsx';
import { useUser } from '~/features/auth/useUser.js';
import { toCamelCase } from '~/functions/convertToCamelCase.js';

export default function AddToFav() {
  const { wishlist, isPending } = useWishlist();
  const { emptyWishlist, isDeleting } = useEmptyWishlist();
  const { isAuthenticated } = useUser();

  if (!isAuthenticated) return null;

  return (
    <Popover className="relative">
      <Popover.Button className="primary-button bg-red-600 text-white outline-none">
        <span className="hidden sm:inline-block">Bəyəndiklərim</span>{' '}
        {isPending ? (
          <SpinnerMini />
        ) : (
          <span className="relative size-5">
            <ImHeart />
            <span className="text-xxs absolute bg-white -top-1.5 -right-2.5 rounded-full text-red-600 font-bold size-5 border-2 border-red-500 inline-flex justify-center items-center">
              {wishlist?.length}
            </span>
          </span>
        )}
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute top-[135%] right-0 z-[80] w-[250px] max-h-[300px] overflow-y-auto small-scrollbar">
          <ul className="p-3 text-sm bg-blue-900 text-white rounded-xl flex-col gap-3">
            {wishlist?.length ? (
              <>
                <button
                  className="font-semibold gap-2.5 text-white bg-red-600 hover:text-red-600 px-2 py-1 rounded-lg hover:bg-white"
                  onClick={emptyWishlist}
                >
                  {isDeleting ? <SpinnerMini /> : 'Hamısını sil'}
                </button>
                {wishlist?.map(({ id, estates: estate }) => (
                  <li key={id} className="w-full gap-2.5">
                    <div>
                      <span className="size-5">
                        <HeartBtn estate={estate} />
                      </span>
                    </div>
                    <Link
                      to={`/estate/${toCamelCase(estate.status)}/${estate.id}`}
                      className="hover:text-red-600 hover:underline font-medium flex-grow justify-start"
                    >
                      <span>{estate.title}</span>
                    </Link>
                  </li>
                ))}
              </>
            ) : (
              <div className="flex flex-col text-center gap-4">
                <h4 className="text-xl font-semibold w-full">Boşdur</h4>
                <Link
                  to="/estate"
                  className="font-semibold gap-2.5 text-white bg-red-600 hover:text-red-600 px-2 py-1 rounded-lg hover:bg-white"
                >
                  <span className="hidden sm:inline-block">
                    Birini əlavə edin
                  </span>
                  <span className="size-5">
                    <TbHeartPlus />
                  </span>
                </Link>
              </div>
            )}
          </ul>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
