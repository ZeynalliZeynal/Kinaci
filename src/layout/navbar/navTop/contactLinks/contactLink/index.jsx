import { useState } from 'react'
import LoginForm from '~/components/loginForm/index.jsx'
import { useTranslation } from 'react-i18next'

export default function ContactLink({ data }) {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  function handleModal() {
    setIsOpen(!isOpen)
  }

  return (
    <li className={!data.isBtn ? 'hidden lg:flex' : ''}>
      {!data.isBtn ? (
        <a href={data.link} className={data.styles}>
          <span>{data.icon}</span> {data.text}
        </a>
      ) : (
        <>
          <button className={data.styles} onClick={handleModal}>
            <span>{data.icon}</span> {t(data.text)}
          </button>
          <LoginForm isOpen={isOpen} closeModal={handleModal} />
        </>
      )}
    </li>
  )
}
