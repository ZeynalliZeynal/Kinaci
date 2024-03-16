import { IoIosClose } from 'react-icons/io'

export default function Select({ value, onChange, options }) {
  return (
    <div>
      <span>Value</span>
      <button type="button" className="group size-4 text-orange-500">
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="9"
            y="9"
            width="62"
            height="62"
            rx="12"
            fill="currentColor"
            className="scale-0 origin-center group-hover:scale-100 transition-transform"
          />
          <path
            d="M28 52L52 28"
            stroke="black"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M52 52L28 28"
            stroke="black"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M8 58.4902V21C8 14.3726 13.3726 9 20 9H60C66.6274 9 72 14.3726 72 21V58.4902C72 65.1176 66.6274 70.4902 60 70.4902H20C13.3726 70.4902 8 65.1176 8 58.4902Z"
            stroke="black"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  )
}
