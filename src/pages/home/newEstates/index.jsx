import TabBtns from '~/pages/home/newEstates/tabBtns/index.jsx'
import { useState } from 'react'
import EstateCards from '~/components/estateCards/index.jsx'

export default function NewEstates({ estates }) {
  const [activeTab, setActiveTab] = useState('Satılır')

  return (
    <section className="bg-blue-700/5">
      <div className="container">
        <div className="flex justify-between mb-8">
          <div className="header text-blue-900">
            <h2 className="text-h2 font-semibold">Yeni Əmlaklar</h2>
            <p className="text-sm">En son eklenen gayrimenkuller</p>
          </div>
          <div className="tab-btns flex py-2.5 gap-2.5">
            <TabBtns
              text={'Satılır'}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <TabBtns
              text={'Kirayə'}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 items-stretch md:grid-cols-2 lg:grid-cols-3 gap-8">
          {estates.map((estate) => (
            <EstateCards estate={estate} key={estate.id} />
          ))}
        </div>
      </div>
    </section>
  )
}
