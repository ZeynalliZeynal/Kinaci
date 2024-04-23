import SidebarLink from './sidebarLinks'
import ContactIcons from '~/components/ContactIcons.jsx'
import classNames from 'classnames'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export default function Sidebar({ isOpen, onClose }) {
  const location = useLocation()
  const { t } = useTranslation()

  useEffect(() => {
    onClose()
  }, [location.pathname])
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }

    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isOpen])

  return (
    <>
      <div
        className={classNames(
          'overlay fixed size-full backdrop-blur-sm z-[990] invisible',
          {
            'overlay-active': isOpen,
          },
        )}
        onClick={() => onClose((prev) => !prev)}
      />
      <div
        className={classNames(
          'sidebar-container fixed z-[999] max-w-[400px] bg-white text-blue-900 -translate-x-full',
          {
            'sidebar-active': isOpen,
          },
        )}
      >
        <div className="main-window relative z-40 min-h-screen">
          <h3 className="flex items-center justify-between head px-[30px] py-[20px] text-3xl font-semibold border-b border-gray-200">
            {t('Tez keçidlər')}
            <button
              className="size-10 rounded-full bg-gray-100 p-3 hover:scale-125 transition-all"
              onClick={() => onClose((open) => !open)}
            >
              <svg
                className=""
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.64453 6L11.7227 11.0781L11.1895 11.6113L6.11133 6.5332L1.0332 11.6113L0.5 11.0781L5.57812 6L0.5 0.921875L1.0332 0.388672L6.11133 5.4668L11.1895 0.388672L11.7227 0.921875L6.64453 6Z"
                  fill="#052841"
                />
              </svg>
            </button>
          </h3>
          <SidebarLink />
          <div className="customer-service flex flex-col items-start p-[30px] border-y border-gray-200">
            <span className="text-sm">{t('Müştəri Xidmətləri')}</span>
            <a href="tel:+994514586806" className="font-semibold text-md">
              +994(51) 458 68 06
            </a>
          </div>
          <div className="flex items-center p-[30px]">
            {t('Bizi izləyin')} <ContactIcons />
          </div>
        </div>
      </div>
    </>
  )
}
