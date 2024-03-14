import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import logo from '~/assets/img/logo.svg'
import ModalForm from '~/components/loginForm/modalForm/index.jsx'
import closeAnimation from '~/assets/icon/close-animation.json'
import Lottie from 'lottie-react'

export default function LoginForm({ isOpen, closeModal }) {
  const closeRef = useRef(null)
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-blue-900/20 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="relative max-w-[400px] lg:max-w-[500px] xl:max-w-[742px] transition-all">
                <Dialog.Panel className="w-full max-h-[500px] overflow-y-scroll transform text-left rounded-selectBtn bg-white shadow-xl transition-all p-20 text-blue-900">
                  <Dialog.Title
                    as="h3"
                    className="text-[30px] font-semibold mb-3"
                  >
                    <div className="w-[150px] mb-4">
                      <img src={`${logo}`} alt="Kinaci" />
                    </div>
                    Randevu Al
                  </Dialog.Title>
                  <ModalForm />
                </Dialog.Panel>
                <button className="size-12 bg-orange-500 rounded-full absolute -top-5 -right-5">
                  <Lottie
                    animationData={closeAnimation}
                    lottieRef={closeRef}
                    className="size-6 text-blue-900"
                  />
                </button>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

LoginForm.propTypes = {
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func,
}
