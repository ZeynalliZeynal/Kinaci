import { LiaInstagram, LiaTelegram, LiaWhatsapp } from 'react-icons/lia'

export default function UserSocialLinks({ estateItem }) {
  return (
    <div className="flex justify-between">
      <ul className="gap-1.5">
        {estateItem?.property_seller.social_links.map((link, index) => (
          <li key={index}>
            <a href={link.link} target="_blank" className="text-white">
              {link.name === 'Instagram' ? (
                <span className="overflow-hidden inline-flex justify-center items-center size-7 rounded-lg p-1 instagram-bg">
                  <span className="relative z-10">
                    <LiaInstagram />
                  </span>
                </span>
              ) : link.name === 'Telegram' ? (
                <span className="overflow-hidden inline-flex justify-center items-center size-7 rounded-lg p-1 telegram-bg">
                  <span className="relative z-10">
                    <LiaTelegram />
                  </span>
                </span>
              ) : link.name === 'Whatsapp' ? (
                <span className="overflow-hidden inline-flex justify-center items-center size-7 rounded-lg p-1 whatsapp-bg">
                  <span className="relative z-10">
                    <LiaWhatsapp />
                  </span>
                </span>
              ) : null}
            </a>
          </li>
        ))}
      </ul>
      <a
        href={`tel:${estateItem?.property_seller.phone_number.replaceAll(' ', '')}`}
        className="text-sm text-orange-500 hover:text-orange-500/70"
      >
        {estateItem?.property_seller.phone_number}
      </a>
    </div>
  )
}
