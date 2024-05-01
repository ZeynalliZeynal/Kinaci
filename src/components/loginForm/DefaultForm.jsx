import DefaultInput from '~/components/loginForm/DefaultInput.jsx'
import DefaultBtn from '~/components/DefaultBtn.jsx'

// TODO: login and signup
export default function DefaultForm({ onClose }) {
  function handleSubmit(e) {
    e.preventDefault()
    onClose && onClose()
  }

  return (
    <form
      className="flex flex-col gap-4 py-2"
      method="dialog"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="grid gap-4">
        <label htmlFor="fullName">Ad & Soyad</label>
        <DefaultInput
          placeholder="Adınızı və soyadınızı daxil edin..."
          type="text"
          name="fullName"
        />
      </div>
      <div className="grid gap-4">
        <label htmlFor="tel">Telefon nömrəsi</label>
        <DefaultInput placeholder="+994** *** ****" type="tel" name="tel" />
      </div>
      <div className="grid gap-4">
        <label htmlFor="email">E-Mail</label>
        <DefaultInput
          placeholder="johndoe@example.com"
          type="email"
          name="email"
        />
      </div>
      <div className="text-xxl">
        <DefaultBtn type="submit">Saxla və Göndər</DefaultBtn>
      </div>
    </form>
  )
}
