import DefaultInput from '~/components/loginForm/defaultInput/index.jsx'
import DefaultBtn from '~/components/defaultBtn/index.jsx'
import PropTypes from 'prop-types'

export default function ModalForm({ onClose }) {
  function handleSubmit(e) {
    e.preventDefault()
    onClose()
  }

  return (
    <form
      className="flex flex-col gap-4 py-2"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="grid gap-4">
        <label htmlFor="fullname">Ad & Soyad</label>
        <DefaultInput
          placeholder="Adınızı və soyadınızı daxil edin..."
          type="name"
        />
      </div>
      <div className="grid gap-4">
        <label htmlFor="tel">Telefon nömrəsi</label>
        <DefaultInput placeholder="+994** *** ****" type="tel" />
      </div>
      <div className="grid gap-4">
        <label htmlFor="email">E-Mail</label>
        <DefaultInput placeholder="johndoe@example.com" type="email" />
      </div>
      {/*
      <div className="grid gap-4">
        <label htmlFor="estate">Əmlak növü</label>
        <span className="border border-blue-900/25 rounded-button p-[18px]">
          <input
            className="placeholder:text-blue-900/50"
            type="text"
            name="estate"
            id="estate"
          />
        </span>
      </div>
      <div className="grid gap-4">
        <label htmlFor="city">Şəhər</label>
        <span className="border border-blue-900/25 rounded-button p-[18px]">
          <input
            className="placeholder:text-blue-900/50"
            type="text"
            name="full name"
            id="city"
          />
        </span>
      </div>
      <div className="grid gap-4">
        <label htmlFor="cost">Qiymət</label>
        <div className="flex gap-4">
          <span className="border border-blue-900/25 rounded-button p-[18px]">
            <input
              className="placeholder:text-blue-900/50"
              type="number"
              name="value"
              id="cost"
              placeholder="0-dan"
            />
          </span>
          <span className="border border-blue-900/25 rounded-button p-[18px]">
            <input
              className="placeholder:text-blue-900/50"
              type="number"
              name="value"
              id="fullname"
              placeholder="1000.000.000-a"
            />
          </span>
        </div>
      </div>*/}
      <div className="text-xxl">
        <DefaultBtn type="submit">Saxla və Göndər</DefaultBtn>
      </div>
    </form>
  )
}

ModalForm.propTypes = {
  onClose: PropTypes.func,
}
