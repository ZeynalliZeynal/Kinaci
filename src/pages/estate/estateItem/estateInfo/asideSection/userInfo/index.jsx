import UserSocialLinks from '../userSocialLinks'
import { PropTypes } from 'prop-types'

export default function UserInfo({ estateItem }) {
  return (
    <div className="p-[30px] bg-white shadow-section rounded-xl">
      <h3 className="text-4xl font-semibold text-blue-900 mb-5">Sual ver</h3>
      <div>
        <div className="size-[200px] rounded-full overflow-hidden hidden justify-center mx-auto md:flex">
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
          {estateItem?.property_seller.social_links && (
            <UserSocialLinks estateItem={estateItem} />
          )}
          {estateItem?.property_seller.email && (
            <div>
              E-mail:{' '}
              <a
                href={`mailto:${estateItem?.property_seller.email}`}
                className="text-xxs sm:text-md text-orange-500 hover:text-orange-500/70"
              >
                {estateItem?.property_seller.email}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

UserInfo.propTypes = {
  estateItem: PropTypes.object,
}
