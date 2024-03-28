import { GoHeartFill } from 'react-icons/go'

export default function FavoriteButton() {
  return (
    <button className="primary-button bg-red-600 text-white">
      Bəyəndiklərim
      <span className="relative w-5 h-4">
        <GoHeartFill />
        <span className="text-xxs absolute bg-white top-0 -right-2.5 rounded-full text-red-600 font-bold size-4 border-2 border-red-500 inline-flex justify-center items-center">
          5
        </span>
      </span>
    </button>
  )
}
