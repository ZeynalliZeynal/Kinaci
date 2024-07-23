import { GoPlay, GoZoomIn } from 'react-icons/go';
import Features from './features';
import CardBadge from '~/components/estateCards/CardBadge.jsx';
import { CiZoomIn } from 'react-icons/ci';
import { useState } from 'react';
import ImgSliderModal from '~/pages/estate/estateItem/imgSlider/imgSliderModal/index.jsx';
import ImgBtns from '~/pages/estate/estateItem/imgSlider/imgBtns/index.jsx';
import { useSwapSlide } from '~/hooks/useSwapSlide.js';
import { HiArrowSmLeft, HiArrowSmRight } from 'react-icons/hi';
import HeartBtn from '~/features/wishlist/HeartBtn.jsx';

export default function ImgSlider({ estateItem }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [goPrev, goNext, imageIndex, setImageIndex] = useSwapSlide(
    estateItem?.images.length,
  );

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <ImgSliderModal
        closeModal={handleCloseModal}
        isModalOpen={isModalOpen}
        estateItem={estateItem}
        imageIndex={imageIndex}
        setImageIndex={setImageIndex}
      />
      <div className="img-slider">
        <div className="img-container relative rounded overflow-hidden">
          <div className="px-5 absolute flex justify-between w-full top-1/2 left-1/2 -translate-x-1/2 text-white z-50 opacity-50">
            <button
              className="rounded-full items-center bg-blue-900 p-1 hover:text-blue-900 hover:bg-white"
              onClick={goPrev}
            >
              <span className="size-12">
                <HiArrowSmLeft />
              </span>
            </button>
            <button
              className="rounded-full items-center bg-blue-900 p-1 hover:text-blue-900 hover:bg-white"
              onClick={goNext}
            >
              <span className="size-12">
                <HiArrowSmRight />
              </span>
            </button>
          </div>
          <div className="img h-[530px] backdrop-blur-xl bg-blue-900/10">
            <img
              src={estateItem?.images[imageIndex]}
              alt="Carousel"
              className="object-contain"
            />
          </div>
          <div className="absolute top-4 left-4 text-5xl">
            <CardBadge estate={estateItem} />
          </div>
          <button
            title="Zoom"
            className="absolute bottom-4 right-4 rounded-xl bg-white size-[50px] p-2 hover:bg-gray-100"
            onClick={handleOpenModal}
          >
            <CiZoomIn />
          </button>
          <span className="absolute top-4 right-4 rounded-lg bg-blue-900/30 size-[50px] p-2">
            <HeartBtn estate={estateItem} />
          </span>
        </div>
        <div className="print-hidden w-full bg-gradient-to-b from-[#fefefe] to-[#ededed] text-[#039] text-xxs grid grid-cols-2 py-2">
          <button
            className="py-2.5 font-medium flex gap-2 border-r border-[#ddd]"
            onClick={handleOpenModal}
          >
            <span className="size-4">
              <GoZoomIn />
            </span>
            Böyük Foto
          </button>
          <button className="py-2.5 font-medium flex gap-2 border-l border-white disabled">
            <span className="size-4">
              <GoPlay />
            </span>
            Video
          </button>
        </div>
        <ImgBtns
          estateItem={estateItem}
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
        />
        <Features estateItem={estateItem} />
      </div>
    </>
  );
}
