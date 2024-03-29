import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export function ShowMoreButton() {
  const { t } = useTranslation()
  return (
    <div className="flex justify-center items-center py-[50px]">
      <Link
        to="/estate"
        className="rounded-xl px-5 py-3 border border-orange-500 bg-white hover:bg-orange-50 text-md text-orange-500"
      >
        {t('showMore')}
      </Link>
    </div>
  )
}
