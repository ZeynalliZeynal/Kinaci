import Carousel from './carousel'
import Search from '~/components/search/index.jsx'
import Loader from '~/components/loader.jsx'
import { useEstate } from '~/hooks/useEstate.js'
import { useTranslation } from 'react-i18next'
import EstateSection from '~/pages/home/estateSection/index.jsx'

export default function Home() {
  const [estates, isLoading] = useEstate()
  const { t } = useTranslation()
  const newEstates = estates.filter(
    (newEstates) => newEstates.feature === 'Yeni',
  )
  const promotionalEstates = estates.filter((newEstates) =>
    newEstates.feature.includes('endirim'),
  )
  const specialEstates = estates.filter(
    (newEstates) => newEstates.feature === 'Sərfəli',
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
          <EstateSection
            t={t}
            bg="bg-blue-700/5"
            estates={newEstates}
            title="newEstates"
            paragraph="newEstatesParagraph"
          />
          <EstateSection
            t={t}
            bg="bg-orange-500/5"
            estates={promotionalEstates}
            title="promotionalEstates"
            paragraph="promotionalEstatesParagraph"
          />
          <EstateSection
            t={t}
            bg="bg-blue-700/5"
            estates={specialEstates}
            title="specialEstates"
            paragraph="specialEstatesParagraph"
          />
        </>
      )}
    </main>
  )
}
