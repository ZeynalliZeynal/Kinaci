import { useState } from 'react'

export default function PaginationButtons({ paginate, pageNumbers }) {
  const [activePage, setActivePage] = useState(1)

  return (
    <ul className="gap-3">
      {pageNumbers.map((number) => (
        <li key={number}>
          <button
            onClick={() => {
              paginate(number)
              setActivePage(number)
            }}
            className={`rounded-full ${activePage === number ? 'bg-orange-500 hover:bg-orange-600 text-white' : 'text-blue-900'} size-8`}
          >
            {number}
          </button>
        </li>
      ))}
    </ul>
  )
}
