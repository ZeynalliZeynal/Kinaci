import { useEffect, useState } from 'react'
import EstateCards from '~/components/estateCards/index.jsx'
import { ShowMoreButton } from '~/pages/home/ShowMoreButton.jsx'
import TabBtns from '~/pages/home/estateSection/tabBtns/index.jsx'
import NoProduct from '~/components/NoProduct.jsx'

export default function EstateSection({ estates, t, title, paragraph, bg }) {
  const [activeSellingType, setActiveSellingType] = useState('forSale')
  const [filteredEstates, setFilteredEstates] = useState(estates)

  useEffect(() => {
    const filtered = estates.filter(
      (estate) => estate.selling_type === activeSellingType,
    )
    setFilteredEstates(filtered)
  }, [activeSellingType, estates])

  return (
    <section className={bg}>
      <div className="container">
        <div className="flex justify-between mb-8">
          <div className="header text-blue-900">
            <h2 className="text-h2 font-semibold">{t(title)}</h2>
            <p className="text-sm">{t(paragraph)}</p>
          </div>
          <div className="tab-btns flex py-2.5 gap-2.5">
            <TabBtns
              text={'Satılır'}
              sellingType={'forSale'}
              activeSellingType={activeSellingType}
              setActiveSellingType={setActiveSellingType}
            />
            <TabBtns
              text={'Kirayə'}
              sellingType={'forRent'}
              activeSellingType={activeSellingType}
              setActiveSellingType={setActiveSellingType}
            />
          </div>
        </div>
        {filteredEstates.length ? (
          <div className="grid grid-cols-1 items-stretch md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEstates.map((estate) => (
              <EstateCards estate={estate} key={estate.id} />
            ))}
          </div>
        ) : (
          <NoProduct />
        )}{' '}
        <ShowMoreButton />
      </div>
    </section>
  )
}
