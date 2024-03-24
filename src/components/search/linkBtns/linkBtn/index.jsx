import { useNavigate } from 'react-router-dom'
import LoginForm from '~/components/loginForm/index.jsx'
import { useState } from 'react'

export default function LinkBtn({
  onAction,
  color = 'white',
  bgColor,
  children,
  to,
}) {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  function handleNavigate() {
    navigate(to)
  }

  function handleModal() {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <li>
        <button
          className={`primary-button text-${color} ${bgColor}`}
          onClick={to ? handleNavigate : handleModal}
        >
          {children}
        </button>
      </li>
      <LoginForm isOpen={isOpen} closeModal={handleModal} />
    </>
  )
}
