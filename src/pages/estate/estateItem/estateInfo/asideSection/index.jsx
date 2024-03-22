import PropTypes from 'prop-types'
import { useState } from 'react'
import currencyData from '~/data/currencyData.jsx'
import CurrencyDropdown from '~/pages/estate/estateItem/estateInfo/asideSection/currencyDropdown/index.jsx'
import Tooltip from '~/components/Tooltip.jsx'
import ButtonWithTooltip from '~/pages/estate/estateItem/estateInfo/asideSection/buttonWithTooltip/index.jsx'
import EstatePrice from '~/pages/estate/estateItem/estateInfo/asideSection/estatePrice/index.jsx'
import { LiaInstagram, LiaTelegram, LiaWhatsapp } from 'react-icons/lia'
import UserSocialLinks from '~/pages/estate/estateItem/estateInfo/asideSection/userSocialLinks/index.jsx'

export default function AsideSection({ estateItem }) {
  return (
    <aside className="px-2">
      <div className="grid gap-4">
        <div className="estate-id py-4 w-full text-orange-600 rounded-xl bg-orange-200 font-semibold flex justify-center">
          Əmlak nömrəsi: {estateItem?.id}
        </div>
        <EstatePrice estateItem={estateItem} />
        <ButtonWithTooltip />
        <div className="p-[30px] bg-white shadow-section rounded-xl">
          <h3 className="text-4xl font-semibold text-blue-900 mb-5">
            Sual ver
          </h3>
          <div>
            <div className="size-[200px] rounded-full overflow-hidden flex justify-center mx-auto">
              <img
                src={estateItem?.property_seller.profile_photo}
                alt={estateItem?.property_seller.full_name}
              />
            </div>
            <div className="grid gap-4">
              <div className="mt-4">
                <h4 className="text-3xl font-bold">
                  {estateItem?.property_seller.full_name}
                </h4>
                <p>{estateItem?.property_seller.job_status}</p>
              </div>
              <UserSocialLinks estateItem={estateItem} />
              <div>
                E-mail:{' '}
                <a
                  href={`mailto:${estateItem?.property_seller.email}`}
                  className="text-md text-orange-500 hover:text-orange-500/70"
                >
                  {estateItem?.property_seller.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

AsideSection.propTypes = {
  estateItem: PropTypes.object,
}
