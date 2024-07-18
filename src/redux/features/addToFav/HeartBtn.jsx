import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postFavorites } from '~/redux/features/addToFav/addToFavSlice.js';
import { ImHeart, ImHeartBroken } from 'react-icons/im';
import { useActiveAccount, useFavStatus } from '~/redux/selectors.js';
import Lottie from 'lottie-react';
import animationData from '~/assets/img/red-loading.json';
import LoginForm from '~/components/loginForm/index.jsx';

export default function HeartBtn({ estate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const addedItems = useSelector((state) => state.addToFav.addedItems);
  const activeAccount = useActiveAccount();

  let addedItem, isAdded;
  if (addedItems) {
    addedItem = addedItems?.find((item) => item.id === estate?.id);
    isAdded = estate && addedItem && estate.id === addedItem.id;
  }

  const status = useFavStatus();

  const dispatch = useDispatch();

  const handleAddItem = () => {
    console.log(activeAccount, estate);
    console.log(addedItems, isAdded);
    if (activeAccount)
      dispatch(postFavorites({ userId: activeAccount.id, favObj: estate }));
    else setIsOpen(true);
  };

  return (
    <>
      {isOpen && (
        <LoginForm isOpen={isOpen} closeModal={() => setIsOpen(false)} />
      )}
      <button
        className={`w-full ${isAdded ? 'text-red-600' : 'text-white'}`}
        onClick={handleAddItem}
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
        onBlur={() => setIsActive(false)}
      >
        {status === 'loading' ? (
          <Lottie animationData={animationData} />
        ) : !isActive && isAdded ? (
          <ImHeart />
        ) : isActive && isAdded ? (
          <ImHeartBroken />
        ) : (
          <ImHeart />
        )}
      </button>
    </>
  );
}
