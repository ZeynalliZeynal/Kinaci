import { useEffect } from 'react'
import NewEstates from '~/pages/home/newEstates/index.jsx'
import Carousel from './carousel'

export default function Home() {
  useEffect(() => {
    document.title = 'Kinaci Gayrimenkul'
  }, [])
  return (
    <main>
      <Carousel />
      <NewEstates />
    </main>
  )
}
