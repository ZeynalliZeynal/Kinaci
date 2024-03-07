import { GoHeartFill } from 'react-icons/go'

export default function FavoriteButton() {
  return (
    <button className="primary-button bg-red-600 text-white">
      Bəyəndiklərim
      <span className="relative w-9 h-8">
        <GoHeartFill />
        <span className="text-xxs absolute bg-white top-0 -right-2.5 rounded-full text-red-600 font-bold size-[22px] border-2 border-red-500">
          5
        </span>
      </span>
    </button>
  )
}
