import CurrencyDropdown from '~/pages/estate/estateItem/estateInfo/asideSection/currencyDropdown/index.jsx'
import { useState } from 'react'
import currencyData from '~/data/currencyData.jsx'

export default function EstatePrice({ estateItem }) {
  const [selectedCurrency, setSelectedCurrency] = useState(currencyData[0])

  function convertCurrency(currency) {
    const currencyConverted = new Intl.NumberFormat(selectedCurrency.local, {
      style: 'currency',
      currency: selectedCurrency.type,
    })
    return currencyConverted.format(
      selectedCurrency.type === 'USD'
        ? currency * 0.59
        : selectedCurrency.type === 'TRY'
          ? currency * 18.92
          : currency,
    )
  }

  return (
    <div className="px-4 py-[18px] bg-white rounded-button shadow-section grid gap-2.5">
      <div className="p-2 rounded-xl bg-blue-900 text-white flex justify-between items-center">
        {estateItem?.per_square_meter_price ? (
          <>
            <span className="text-sm px-[14px] py-2.5">
              Kvadrat metr qiyməti:
              <span className="font-semibold tracking-widest">
                {convertCurrency(estateItem?.per_square_meter_price)}/ m
                <sup>2</sup>
              </span>
            </span>
            <CurrencyDropdown
              selectedCurrency={selectedCurrency}
              setSelectedCurrency={setSelectedCurrency}
            />
          </>
        ) : (
          <div className="w-full">
            <CurrencyDropdown
              selectedCurrency={selectedCurrency}
              setSelectedCurrency={setSelectedCurrency}
            />
          </div>
        )}
      </div>
      <div className="grid text-white text-center rounded-lg bg-blue-700">
        {estateItem?.feature.includes('endirim') && (
          <div className="discount w-full bg-blue-500 py-2.5 rounded-lg text-sm">
            {convertCurrency(estateItem?.price)} deyil,
          </div>
        )}
        <div className="price text-5xl font-bold py-2.5">
          {convertCurrency(
            estateItem?.feature.includes('endirim')
              ? estateItem?.price -
                  (estateItem?.price *
                    parseInt(estateItem?.feature.split(' ')[0].slice(0))) /
                    100
              : estateItem?.price,
          )}{' '}
          {estateItem?.selling_type === 'forRent' &&
            `/${estateItem?.payment_type}`}
        </div>
      </div>
    </div>
  )
}
