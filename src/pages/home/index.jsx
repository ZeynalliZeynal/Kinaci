import Carousel from './Carousel'
import Search from '~/components/search'
import Loader from '~/components/loader'
import { useEstate } from '~/hooks/useEstate'
import { useTranslation } from 'react-i18next'
import EstateSection from '~/pages/home/estateSection'
import { useScrollTop } from '~/hooks/useScrollTop'

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

  useScrollTop()

  return (
    <main>
      <Carousel />
      <section className="-mt-[122px] relative">
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
            buttonLink="tags=Yeni"
          />
          <EstateSection
            t={t}
            bg="bg-orange-500/5"
            estates={promotionalEstates}
            title="promotionalEstates"
            paragraph="promotionalEstatesParagraph"
            buttonLink="tags=Endirim"
          />
          <EstateSection
            t={t}
            bg="bg-blue-700/5"
            estates={specialEstates}
            title="specialEstates"
            paragraph="specialEstatesParagraph"
            buttonLink="tags=Sərfəli"
          />
        </>
      )}
    </main>
  )
}
