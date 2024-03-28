import NewEstates from '~/pages/home/newEstates/index.jsx'
import Carousel from './carousel'
import Search from '~/components/search/index.jsx'
import Loader from '~/components/loader.jsx'
import { useEstate } from '~/hooks/useEstate.js'

export default function Home() {
  const [estates, isLoading] = useEstate()

  return (
    <main>
      <Carousel />
      <section>
        <Search />
      </section>
      {isLoading ? <Loader /> : <NewEstates estates={estates} />}
    </main>
  )
}
