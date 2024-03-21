import { useState } from 'react'
import Loader from '~/components/loader.jsx'
import EstateInfo from '~/pages/estate/estateItem/estateInfo/index.jsx'

export default function EstateItem() {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <main className="bg-gray-100">
      {isLoading ? <Loader /> : <EstateInfo setIsLoading={setIsLoading} />}
    </main>
  )
}
