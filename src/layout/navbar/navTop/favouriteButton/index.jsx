import { GoHeartFill } from 'react-icons/go'
import { useTranslation } from 'react-i18next'

export default function FavoriteButton() {
  const { t } = useTranslation()
  return (
    <button className="primary-button bg-red-600 text-white">
      {t('favourites')}{' '}
      <span className="relative w-5 h-4">
        <GoHeartFill />
        <span className="text-xxs absolute bg-white top-0 -right-2.5 rounded-full text-red-600 font-bold size-4 border-2 border-red-500 inline-flex justify-center items-center">
          5
        </span>
      </span>
    </button>
  )
}
