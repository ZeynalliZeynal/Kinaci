import Svg from '~/components/Svg.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { postFavorites } from '~/redux/features/addToFav/addToFavSlice.js';
import { useState } from 'react';
import LoginForm from '~/components/loginForm/index.jsx';
import { useActiveAccount } from '~/redux/selectors.js';

export default function Actions({ estate }) {
  const [isOpen, setIsOpen] = useState(false);
  const activeAccount = useActiveAccount();
  const addedItems = useSelector((state) => state.addToFav.addedItems);
  const addedItem = addedItems.find((item) => item.id === estate?.id);
  const isAdded = estate?.id === addedItem?.id;
  const dispatch = useDispatch();

  const handleAddItem = () => {
    if (activeAccount)
      dispatch(postFavorites({ userId: activeAccount.id, favObj: estate }));
    else setIsOpen(true);
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
            className={`rounded-xl px-5 py-3 border border-red-600 ${isAdded ? 'text-white bg-red-600 hover:text-red-600 hover:bg-white' : 'hover:text-white text-red-600 hover:bg-red-600 bg-white'}`}
            onClick={handleAddItem}
          >
            <span className="inline-flex items-center gap-2">
              <span className="inline-flex items-center gap-2">
                {isAdded ? 'Seçilmişlərdən sil' : 'Seçilmişlərə əlavə et'}

                <span className="size-4">
                  <Svg svgType="heart" />
                </span>
              </span>
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
