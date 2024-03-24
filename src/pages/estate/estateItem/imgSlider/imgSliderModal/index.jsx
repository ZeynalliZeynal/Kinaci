import ModalCloseBtn from '~/components/ModalCloseBtn.jsx'
import { motion } from 'framer-motion'
import ImgBtns from '~/pages/estate/estateItem/imgSlider/imgBtns/index.jsx'
import { Fragment, useState } from 'react'
import { Transition } from '@headlessui/react'

export default function ImgSliderModal({
  onToggleModal,
  isModalOpen,
  imageIndex,
  estateItem,
  setImageIndex,
}) {
  const [isHovering, setIsHovering] = useState(false)
  return (
    <Transition
      as={Fragment}
      show={isModalOpen}
      enter="ease-out duration-300"
      enterFrom="opacity-0 backdrop-blur-0"
      enterTo="opacity-100 backdrop-blur-sm"
      leave="ease-in duration-200"
      leaveFrom="opacity-100 backdrop-blur-sm"
      leaveTo="opacity-0 backdrop-blur-0"
    >
      <div className="modal fixed z-[900] size-full inset-0 flex justify-center items-center">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div
            className="overlay fixed inset-0 z-[950] bg-blue-900/20"
            onClick={onToggleModal}
          ></div>
        </Transition.Child>
        <div
          className="modal-content fixed bg-white p-9 z-[999] rounded-xl mx-5"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="mx-auto backdrop-blur-sm bg-[#E6E9EC]">
            <div className="w-[1200px] h-[700px] ">
              <img
                src={estateItem?.assets.img[imageIndex]}
                alt="Big Image"
                className="object-contain"
              />
            </div>
          </div>
          <motion.div
            className="container-3d absolute bottom-1 bg-white left-0 origin-bottom px-2 rounded-xl"
            animate={isHovering ? 'active' : 'hidden'}
            variants={{
              hidden: {
                rotateX: -90,
              },
              active: {
                rotateX: 0,
              },
            }}
          >
            <ImgBtns
              estateItem={estateItem}
              imageIndex={imageIndex}
              setImageIndex={setImageIndex}
            />
          </motion.div>
          <ModalCloseBtn onClose={onToggleModal} />
        </div>
      </div>
    </Transition>
  )
}
