import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import logo from '~/assets/img/logo.svg'
import DefaultForm from '~/redux/features/auth/DefaultForm.jsx'
import ModalCloseBtn from '~/components/ModalCloseBtn.jsx'

export default function LoginForm({ isOpen, closeModal }) {
  const [error, setError] = useState('')
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[999]" onClose={closeModal}>
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
              <div className="relative w-[742px] transition-all">
                <Dialog.Panel className="w-full transform text-left rounded-selectBtn bg-white shadow-xl transition-all p-10 sm:p-20 text-blue-900">
                  <Dialog.Title
                    as="div"
                    className="flex justify-between items-center"
                  >
                    <div>
                      <div className="w-[150px] mb-4">
                        <img src={`${logo}`} alt="Kinaci" />
                      </div>
                      <h3 className="text-[30px] font-semibold mb-3">Hesab</h3>
                    </div>
                    <span className="text-red-500 text-sm">{error}</span>
                  </Dialog.Title>
                  <DefaultForm
                    onClose={closeModal}
                    setError={setError}
                    error={error}
                  />
                </Dialog.Panel>

                <ModalCloseBtn onClose={closeModal} />
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
