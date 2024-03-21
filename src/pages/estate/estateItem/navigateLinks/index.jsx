import { useState } from 'react'
import LoginForm from '~/components/loginForm/index.jsx'
import { adminInfo } from '~/data/adminInfo/index.jsx'
import { useNavigate } from 'react-router-dom'

export default function NavigateLinks() {
  const [isOpen, setIsOpen] = useState(false)

  const navigate = useNavigate()

  function handleModal() {
    setIsOpen((prev) => !prev)
  }

  return (
    <>
      {isOpen && <LoginForm isOpen={isOpen} closeModal={handleModal} />}
      <div className="grid grid-cols-3 gap-4 text-white text-sm font-semibold mt-9 mb-8">
        {Array.from({ length: 3 }, (_, index) => (
          <span className="w-full" key={index}>
            {index === 0 ? (
              <a
                href={`tel:${adminInfo.tel}`}
                className="rounded-button py-6 bg-blue-700 w-full"
              >
                Onlayn Baxış
              </a>
            ) : (
              <button
                className={`rounded-button py-6 w-full ${index === 0 ? 'bg-blue-700' : index === 1 ? 'bg-blue-900' : 'bg-orange-500'}`}
                onClick={() =>
                  index === 1 ? navigate('services/freeTour') : setIsOpen(true)
                }
              >
                {index === 1 ? 'Pulsuz tur' : 'Qiymət Siyahısını Alın'}
              </button>
            )}
          </span>
        ))}
      </div>
    </>
  )
}
