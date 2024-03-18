import Search from '~/components/search/index.jsx'
import { useEffect } from 'react'
import NewEstates from '~/pages/home/newEstates/index.jsx'

export default function Home() {
  useEffect(() => {
    document.title = 'Kinaci Gayrimenkul'
  }, [])
  return (
    <main>
      <section>
        {/*! Slider burda olmalidi.*/} <Search />
      </section>
      <NewEstates />
    </main>
  )
}
