import footerLogo from '~/assets/img/footer-logo.svg'
import ContactIcons from '~/components/ContactIcons.jsx'
import FooterLinks from '~/layout/footer/footerLinks'
import Newsletter from '~/layout/footer/newsletter/index.jsx'
import CommunicationLinks from '~/layout/footer/communication/index.jsx'

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white p-0 sm:p-10 lg:p-20">
      <div className="container">
        <div className="flex flex-wrap divide-y divide-blue-50/10 lg:divide-y-0">
          <div className="w-full lg:w-1/2 xl:my-0 mb-8 pt-8 xl:w-1/4 px-3">
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
          <div className="w-full lg:w-1/2 xl:my-0 mb-8 pt-8 xl:w-1/4 px-3">
            <div className="links">
              <h4 className="relative font-medium text-4xl after:w-10 after:h-1 after:bg-orange-500 after:absolute after:-bottom-4 after:left-0 after:rounded-xl mb-8">
                Keçidlər
              </h4>
              <FooterLinks />
            </div>
          </div>
          <div className="w-full lg:w-1/2 xl:my-0 mb-8 pt-8 xl:w-1/4 px-3">
            <div className="newsletter grid gap-3">
              <h4 className="relative font-medium text-4xl after:w-10 after:h-1 after:bg-orange-500 after:absolute after:-bottom-4 after:left-0 after:rounded-xl mb-8">
                Elektron bülleten
              </h4>
              <Newsletter />
              <p className="text-xs text-white/45 italic">
                Biz sizə lazımsız e-poçt göndərməyəcəyik!
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 xl:my-0 mb-8 pt-8 xl:w-1/4 px-3">
            <div className="newsletter grid gap-3">
              <h4 className="relative font-medium text-4xl after:w-10 after:h-1 after:bg-orange-500 after:absolute after:-bottom-4 after:left-0 after:rounded-xl mb-8">
                Kommunikasiya
              </h4>
              <CommunicationLinks />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
