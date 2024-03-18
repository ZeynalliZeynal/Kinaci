import TabBtns from '~/pages/home/newEstates/tabBtns/index.jsx'
import { useState } from 'react'

export default function NewEstates() {
  const [activeTab, setActiveTab] = useState('Satılır')
  return (
    <section className="bg-section-newestates/10">
      <div className="container">
        <div className="flex justify-between">
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
      </div>
    </section>
  )
}
