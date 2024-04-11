import Lottie from 'lottie-react'
import animationData from '~/assets/img/empty-box.json'
import { useTranslation } from 'react-i18next'

export default function NoProduct() {
  const { t } = useTranslation()
  return (
    <div className="size-[400px] grid justify-center w-full pointer-events-none select-none">
      <h2 className="text-5xl text-center">{t('estateNotFound')}</h2>
      <Lottie animationData={animationData} />
    </div>
  )
}
