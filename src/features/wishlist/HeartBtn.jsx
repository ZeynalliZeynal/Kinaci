import { useState } from 'react';
import { ImHeart, ImHeartBroken } from 'react-icons/im';
import Lottie from 'lottie-react';
import animationData from '~/assets/img/red-loading.json';
import LoginForm from '~/components/loginForm/index.jsx';
import { useUser } from '~/features/auth/useUser.js';
import { useAddToWishlist } from '~/features/wishlist/useAddToWishlist.js';
import { useRemoveFromWishlist } from '~/features/wishlist/useRemoveFromWishlist.js';
import { useWishlist } from '~/features/wishlist/useWishlist.js';

export default function HeartBtn({ estate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const { user, isAuthenticated } = useUser();
  const { addItemToWishlist, isAdding } = useAddToWishlist();
  const { isRemoving, removeItemFromWishlist } = useRemoveFromWishlist();
  const { alreadyAdded } = useWishlist(estate?.id);

  const handleAddItem = () => {
    if (isAuthenticated) {
      if (!alreadyAdded)
        addItemToWishlist({ estate_id: estate?.id, user_id: user?.id });
      else removeItemFromWishlist(estate?.id);
    } else setIsOpen(true);
  };

  return (
    <>
      {isOpen && (
        <LoginForm isOpen={isOpen} closeModal={() => setIsOpen(false)} />
      )}
      <button
        className={`w-full ${alreadyAdded ? 'text-red-600' : 'text-white'}`}
        onClick={handleAddItem}
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
        onBlur={() => setIsActive(false)}
      >
        {isAdding || isRemoving ? (
          <Lottie animationData={animationData} />
        ) : !isActive && alreadyAdded ? (
          <ImHeart />
        ) : isActive && alreadyAdded ? (
          <ImHeartBroken />
        ) : (
          <ImHeart />
        )}
      </button>
    </>
  );
}
