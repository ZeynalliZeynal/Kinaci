import { Link } from 'react-router-dom'

export function ShowMoreButton({ buttonLink }) {
  return (
    <div className="flex justify-center items-center py-[50px]">
      <Link
        to={`/estate?${buttonLink}`}
        className="rounded-xl px-5 py-3 border border-orange-500 bg-white hover:bg-orange-50 text-md text-orange-500"
      >
        Daha çox göstər
      </Link>
    </div>
  )
}
