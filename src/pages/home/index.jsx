import NewEstates from '~/pages/home/newEstates/index.jsx'
import Carousel from './carousel'
import Search from '~/components/search/index.jsx'
import Loader from '~/components/loader.jsx'
import { useEstate } from '~/hooks/useEstate.js'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const [estates, isLoading] = useEstate()
  const { t } = useTranslation()
  const newEstates = estates.filter(
    (newEstates) => newEstates.feature === 'Yeni',
  )

  return (
    <main>
      <Carousel />
      <section>
        <Search />
      </section>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <NewEstates t={t} estates={newEstates} />
        </>
      )}
    </main>
  )
}
