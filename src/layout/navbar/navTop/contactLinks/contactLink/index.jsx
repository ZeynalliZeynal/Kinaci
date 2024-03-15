import PropTypes from 'prop-types'
import { useState } from 'react'
import LoginForm from '~/components/loginForm/index.jsx'

export default function ContactLink({ data }) {
  const [isOpen, setIsOpen] = useState(false)

  function handleModal() {
    setIsOpen(!isOpen)
  }

  return (
    <li>
      {!data.isBtn ? (
        <a href={data.link} className={data.styles}>
          <span>{data.icon}</span> {data.text}
        </a>
      ) : (
        <>
          <button className={data.styles} onClick={handleModal}>
            <span>{data.icon}</span> {data.text}
          </button>
          <LoginForm isOpen={isOpen} closeModal={handleModal} />
        </>
      )}
    </li>
  )
}

ContactLink.propTypes = {
  data: PropTypes.object,
}
