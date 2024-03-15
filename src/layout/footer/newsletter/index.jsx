import DefaultInput from '~/components/loginForm/defaultInput'
import DefaultBtn from '~/components/defaultBtn/index.jsx'

export default function Newsletter() {
  return (
    <form className="grid gap-3">
      <div>
        <DefaultInput placeholder="E-poçt ünvanınızı daxil edin..." />
      </div>
      <div className="text-sm w-32">
        <DefaultBtn type="submit">Saxla</DefaultBtn>
      </div>
    </form>
  )
}
