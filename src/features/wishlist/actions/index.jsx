import Svg from '~/components/Svg.jsx';
import { useState } from 'react';
import LoginForm from '~/components/loginForm/index.jsx';
import { useUser } from '~/features/auth/useUser.js';
import { useAddToWishlist } from '~/features/wishlist/useAddToWishlist.js';
import { useRemoveFromWishlist } from '~/features/wishlist/useRemoveFromWishlist.js';
import { useWishlist } from '~/features/wishlist/useWishlist.js';
import SpinnerMini from '~/components/SpinnerMini.jsx';

export default function Actions({ estate }) {
  const [isOpen, setIsOpen] = useState(false);
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
      <div className="print-hidden py-6 grid justify-center gap-3">
        <p>
          Bu əmlak və onun <b>qiymət siyahısı</b>, satınalma prosedurunun
          mərhələləri, mümkün <b>endirimlər</b> və s. haqqında tam məlumat
          alacaqsınız.
        </p>
        <div className="favourite text-md md:flex-row flex-col flex justify-start gap-4">
          <button className="rounded-xl px-5 py-3 border hover:text-white border-blue-400 text-blue-400 hover:bg-blue-400 disabled">
            <span className="inline-flex items-center gap-2">
              Müqayisə et
              <span className="size-4">
                <Svg svgType="compare" />
              </span>
            </span>
          </button>
          <button
            className={`rounded-xl px-5 py-3 border border-red-600 ${alreadyAdded ? 'text-white bg-red-600 hover:text-red-600 hover:bg-white' : 'hover:text-white text-red-600 hover:bg-red-600 bg-white'}`}
            onClick={handleAddItem}
          >
            <span className="inline-flex items-center gap-2">
              <span className="inline-flex items-center gap-2">
                {alreadyAdded ? 'Seçilmişlərdən sil' : 'Seçilmişlərə əlavə et'}{' '}
                {isAdding || isRemoving ? (
                  <SpinnerMini />
                ) : (
                  <span className="size-4">
                    <Svg svgType="heart" />
                  </span>
                )}
              </span>
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
