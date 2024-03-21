import { useState } from 'react'
import LoginForm from '~/components/loginForm/index.jsx'
import { useNavigate } from 'react-router-dom'

export default function ActionBtns({ estateItemID }) {
  const [isOpen, setIsOpen] = useState(false)

  const navigate = useNavigate()

  function handleModal() {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className="action-btns text-sm flex gap-2 mt-6">
      {Array.from({ length: 2 }, (_, index) => (
        <button
          key={index}
          className={`w-full px-4 py-2 font-semibold border-2 rounded-button hover:text-white ${index === 0 ? 'border-blue-900 text-blue-900 hover:bg-blue-900' : 'border-orange-500 text-orange-500 hover:bg-orange-500'}`}
          onClick={() =>
            index === 0 ? setIsOpen(true) : navigate(`estate/${estateItemID}`)
          }
        >
          {isOpen && <LoginForm isOpen={isOpen} closeModal={handleModal} />}{' '}
          {index === 0 ? 'Hızlı İletişim' : 'Detaylar'}
        </button>
      ))}
    </div>
  )
}
