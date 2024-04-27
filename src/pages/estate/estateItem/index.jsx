import EstateInfo from '~/pages/estate/estateItem/estateInfo/index.jsx'
import Search from '~/components/search'
import SendRequestForm from './sendRequestForm'
import { useScrollTop } from '~/hooks/useScrollTop.js'

export default function EstateItem() {
  useScrollTop()
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
