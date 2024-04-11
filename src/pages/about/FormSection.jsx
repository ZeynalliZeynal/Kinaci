import DefaultForm from '~/components/loginForm/DefaultForm.jsx'
import FormBG from '~/assets/img/formBg.jpg'
import KinaciWhiteLogo from '~/assets/img/KinaciLogoWhite.svg'

export default function FormSection() {
  return (
    <section className="py-[100px] bg-blue-50/50">
      <div className="container">
        <div className="grid md:grid-cols-2">
          <div className="py-[42px] px-[50px] bg-white rounded-xl">
            <div className="mb-6 text-blue-900">
              <h2>Məlumat almaq istəyirəm</h2>
              <p className="text-sm">Formu doldurun</p>
            </div>
            <DefaultForm />
          </div>
          <div
            className="hidden md:block rounded-xl relative"
            style={{
              backgroundImage: `url(${FormBG})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <span className="absolute bottom-4 right-4">
              <img src={KinaciWhiteLogo} alt="Kinaci" />
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
