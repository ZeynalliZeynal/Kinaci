import footerLogo from '~/assets/img/footer-logo.svg'
import ContactIcons from '~/components/contactIcons/index.jsx'
import FooterLinks from '~/layout/footer/footerLinks/index.jsx'

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white p-20">
      <div className="container">
        <div className="flex">
          <div className="w-1/4">
            <div className="grid gap-4">
              <div className="w-[173px]">
                <img src={`${footerLogo}`} alt="Kinaci logo" />
              </div>
              <p className="text-md">
                Kınacı Qrup tikinti və daşınmaz əmlak xidmətləri sektorunda{' '}
                <b>30 illik təcrübəyə malik şirkətlər qrupudur.</b>
              </p>
              <div className="flex justify-start">
                <ContactIcons />
              </div>
            </div>
          </div>
          <div className="w-1/4">
            <div className="links">
              <h4 className="relative font-medium text-4xl after:w-10 after:h-1 after:bg-orange-500 after:absolute after:-bottom-4 after:left-0 after:rounded-xl">
                Keçidlər
              </h4>
              <FooterLinks />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
