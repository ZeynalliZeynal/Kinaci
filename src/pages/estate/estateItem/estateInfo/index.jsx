import Loader from '~/components/loader.jsx'
import LeftSection from '~/pages/estate/estateItem/estateInfo/leftSection'
import AsideSection from '~/pages/estate/estateItem/estateInfo/asideSection/index.jsx'
import { useEstate } from '~/hooks/useEstate.js'
import { useParams } from 'react-router-dom'

export default function EstateInfo() {
  const { id } = useParams()
  const [estateItem, isLoading] = useEstate(id)

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section>
          <div className="container">
            <div className="header mb-6 px-2">
              <h2 className="text-5xl font-semibold">{estateItem?.title}</h2>
              <p className="text-md">
                {estateItem?.location.city}{' '}
                {estateItem?.location.place && `/${estateItem?.location.place}`}
              </p>
            </div>
            <div id="printed-section" className="grid md:grid-cols-[8fr_4fr]">
              <LeftSection estateItem={estateItem} />
              <AsideSection estateItem={estateItem} />
            </div>
          </div>
        </section>
      )}
    </>
  )
}
