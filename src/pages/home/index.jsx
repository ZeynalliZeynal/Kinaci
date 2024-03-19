import { useEffect, useState } from 'react'
import NewEstates from '~/pages/home/newEstates/index.jsx'
import Carousel from './carousel'
import axios from 'axios'
import Search from '~/components/search/index.jsx'
import Loader from '~/components/loader.jsx'

const baseURL = 'https://kinaci-server.onrender.com/data/estates'

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)
  const [estates, setEstates] = useState([])
  useEffect(() => {
    document.title = 'Kinaci Gayrimenkul'

    async function fetchEstates() {
      try {
        setIsLoading(true)
        const response = await axios.get(baseURL)
        const data = await response.data
        setIsLoading(false)
        setEstates(data)
      } catch (err) {
        console.warn(err)
      }
    }

    fetchEstates()
  }, [])

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
