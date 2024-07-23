import { useNavigate } from 'react-router-dom';
import { HiArrowSmLeft, HiArrowSmRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

import ActionBtns from '~/components/estateCards/ActionBtns.jsx';
import Details from '~/components/estateCards/Details.jsx';
import Dots from '~/components/estateCards/Dots.jsx';
import CardBadge from '~/components/estateCards/CardBadge.jsx';
import { useSwapSlide } from '~/hooks/useSwapSlide.js';
import { toCamelCase } from '~/functions/convertToCamelCase.js';
import HeartBtn from '~/features/wishlist/HeartBtn.jsx';

export default function EstateCards({ estate = {}, isListed }) {
  const preview = estate.images?.slice(0, 3);

  const navigate = useNavigate();

  const [goPrev, goNext, imageIndex, setImageIndex] = useSwapSlide(
    preview?.length,
  );

  return (
    <div
      className={`card bg-white p-4 rounded-selectBtn hover:shadow-lg hover:-translate-y-2 transition-all ${isListed ? 'flex gap-7 h-80' : 'grid'}`}
    >
      <div className={`card-head ${isListed ? 'w-[370px]' : ''}`}>
        <div className="card-img-slider-container flex overflow-hidden relative rounded-selectBtn">
          {preview?.map((image, index) => (
            <motion.div
              animate={{ x: `${-100 * imageIndex}%` }}
              key={index}
              className="card-img-slide shrink-0 w-full h-72 rounded cursor-pointer"
              onClick={() =>
                navigate(`/estate/${toCamelCase(estate.status)}/${estate.id}`)
              }
            >
              <img src={image} alt={`Image ${index + 1}`} />
            </motion.div>
          ))}{' '}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
            <Dots
              size={preview?.length}
              imageIndex={imageIndex}
              setImageIndex={setImageIndex}
            />
          </div>
          <div className="px-5 absolute flex justify-between w-full top-1/2 left-1/2 -translate-x-1/2 text-white opacity-50">
            <button
              className="rounded-full items-center bg-blue-900 p-1 hover:text-blue-900 hover:bg-white"
              onClick={goPrev}
            >
              <span className="size-6">
                <HiArrowSmLeft />
              </span>
            </button>
            <button
              className="rounded-full items-center bg-blue-900 p-1 hover:text-blue-900 hover:bg-white"
              onClick={goNext}
            >
              <span className="size-6">
                <HiArrowSmRight />
              </span>
            </button>
          </div>
          <span className="absolute top-4 left-4 rounded-lg bg-blue-900/30 p-2 size-10 inline-flex justify-center items-center">
            <span className="size-7 inline-flex justify-center items-center">
              <HeartBtn estate={estate} />
            </span>
          </span>{' '}
          {estate.feature && (
            <span className="absolute top-2 right-2 text-md">
              <CardBadge estate={estate} />
            </span>
          )}{' '}
          <span className="rounded-button absolute bottom-2 left-2 bg-orange-500 text-white text-md font-medium px-3 py-1">
            KNC-{estate.id}
          </span>
        </div>
      </div>
      <div className={`card-body text-blue-900 grid flex-1`}>
        <h4
          className={`card-title ${isListed ? 'text-xl' : 'text-md'} font-semibold py-2`}
        >
          {estate.title}
        </h4>
        <Details estate={estate} isListed={isListed} />
        <ActionBtns estateItem={estate} />
      </div>
    </div>
  );
}
