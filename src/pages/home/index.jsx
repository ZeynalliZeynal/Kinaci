import Carousel from './Carousel'
import Search from '~/components/search'
import Loader from '~/components/loader'
import { useEstate } from '~/hooks/useEstate'
import EstateSection from '~/pages/home/estateSection'
import { useScrollTop } from '~/hooks/useScrollTop'

export default function Home() {
  const [estates, isLoading] = useEstate()
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
            bg="bg-blue-700/5"
            estates={newEstates}
            title="Yeni əmlaklar"
            paragraph="Son əlavə edilmiş əmlaklar"
            buttonLink="tags=Yeni"
          />
          <EstateSection
            bg="bg-orange-500/5"
            estates={promotionalEstates}
            title="Kampaniyalı daşınmaz əmlaklar"
            paragraph="Ən sərfəli qiymətlər"
            buttonLink="tags=Endirim"
          />
          <EstateSection
            bg="bg-blue-700/5"
            estates={specialEstates}
            title="Ən Yaxşı Təkliflər"
            paragraph="Sizə özəl təkliflərimiz"
            buttonLink="tags=Sərfəli"
          />
        </>
      )}
    </main>
  )
}
