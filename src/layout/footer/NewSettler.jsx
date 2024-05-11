import DefaultInput from '~/components/loginForm/DefaultInput.jsx'
import DefaultBtn from '~/components/DefaultBtn.jsx'

export default function Newsletter() {
  return (
    <form className="grid gap-3">
      <div className="text-blue-900">
        <DefaultInput
          placeholder="E-poçt ünvanınızı daxil edin..."
          type="email"
        />
      </div>
      <div className="text-sm w-32">
        <DefaultBtn type="submit">Saxla</DefaultBtn>
      </div>
    </form>
  )
}
