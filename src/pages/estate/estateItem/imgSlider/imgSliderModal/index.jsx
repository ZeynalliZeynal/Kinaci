import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import SwiperCarousel from '~/pages/estate/estateItem/imgSlider/imgSliderModal/swiperCarousel/index.jsx'
import { GrClose } from 'react-icons/gr'

const modalTransition = {
  enter: 'ease-out duration-300',
  enterFrom: 'opacity-0',
  enterTo: 'opacity-100',
  leave: 'ease-in duration-200',
  leaveFrom: 'opacity-100',
  leaveTo: 'opacity-0',
}

export default function ImgSliderModal({
  isModalOpen,
  closeModal,
  imageIndex,
  estateItem,
  setImageIndex,
}) {
  return (
    <Transition appear show={isModalOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-[900] w-full h-full"
        onClose={closeModal}
      >
        <Transition.Child as={Fragment} {...modalTransition}>
          <div className="fixed inset-0 bg-black/25 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex h-full w-screen p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-screen transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all relative">
                <SwiperCarousel
                  estateItem={estateItem}
                  imageIndex={imageIndex}
                  setImageIndex={setImageIndex}
                />

                <button
                  className="absolute z-20 top-8 rounded-lg bg-blue-900/10 p-2 right-8 text-blue-900 hover:bg-blue-900/5"
                  onClick={closeModal}
                >
                  <span className="size-4">
                    <GrClose />
                  </span>
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
