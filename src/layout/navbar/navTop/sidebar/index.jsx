import SidebarLink from './sidebarLinks'
import ContactIcons from '~/components/contactIcons/index.jsx'
import classNames from 'classnames'
import PropTypes from 'prop-types'

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      <div
        className={classNames(
          'overlay fixed size-full backdrop-blur-sm -z-10 invisible',
          {
            'overlay-active': isOpen,
          },
        )}
      ></div>
      <div
        className={classNames(
          'sidebar-container fixed z-50 max-w-[400px] bg-white text-blue-900 -translate-x-full',
          {
            'sidebar-active': isOpen,
          },
        )}
      >
        <div className="main-window relative z-40">
          <h3 className="flex items-center justify-between head px-[30px] py-[20px] text-3xl font-semibold border-b border-gray-200">
            Tez keçidlər
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
            <span className="text-sm">Müştəri Xidmətləri</span>
            <a href="tel:+994514586806" className="font-semibold text-md">
              +994(51) 458 68 06
            </a>
          </div>
          <div className="flex items-center p-[30px]">
            Bizi izləyin <ContactIcons />
          </div>
        </div>
      </div>
    </>
  )
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
}
