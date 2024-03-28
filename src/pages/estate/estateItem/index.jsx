import EstateInfo from '~/pages/estate/estateItem/estateInfo/index.jsx'
import { useEffect, useState } from 'react'
import Search from '~/components/search'
import SendRequestForm from './sendRequestForm'
import { useLocation } from 'react-router-dom'

export default function EstateItem() {
  const [scrollToTop, setScrollToTop] = useState(true)

  const location = useLocation()
  useEffect(() => {
    if (scrollToTop) {
      window.scrollTo(0, 0)
      setScrollToTop(false)
    }
  }, [scrollToTop])
  return (
    <main className="bg-gray-100 pb-8">
      <section className="print-hidden bg-blue-900 py-6">
        <Search />
      </section>
      <EstateInfo />
      <SendRequestForm />
    </main>
  )
}
