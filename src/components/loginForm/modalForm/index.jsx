import DefaultInput from '~/components/loginForm/defaultInput/index.jsx'
import DefaultBtn from '~/components/defaultBtn/index.jsx'

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
      <div className="text-xxl">
        <DefaultBtn type="submit">Saxla və Göndər</DefaultBtn>
      </div>
    </form>
  )
}
