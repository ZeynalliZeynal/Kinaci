import { useState } from 'react'
import Svg from '~/components/Svg.jsx'
import currencyData from '~/data/currencyData.js'

export default function Details({ estate, isListed }) {
  const [selectedCurrencyIndex, setSelectedCurrencyIndex] = useState(0)

  function handleIncreaseIndex() {
    if (selectedCurrencyIndex < currencyData.length - 1) {
      setSelectedCurrencyIndex((i) => i + 1)
    } else if (selectedCurrencyIndex === currencyData.length - 1)
      setSelectedCurrencyIndex(0)
  }

  function convertCurrency(currency) {
    const currencyConverted = new Intl.NumberFormat(
      currencyData[selectedCurrencyIndex].local,
      {
        style: 'currency',
        currency: currencyData[selectedCurrencyIndex].type,
      },
    )
    return currencyConverted.format(
      currencyData[selectedCurrencyIndex].type === 'USD'
        ? currency * 0.59
        : currencyData[selectedCurrencyIndex].type === 'TRY'
          ? currency * 18.92
          : currency,
    )
  }

  return (
    <div className="details grid grid-cols-1 md:grid-cols-2">
      <div className={`${isListed ? 'text-md' : 'text-xs'} grid gap-2.5`}>
        <h5>
          {estate?.location.city}{' '}
          {estate?.location.place && `/${estate?.location.place}`}
        </h5>
        <div
          className={`icons ${isListed ? 'flex' : 'grid grid-cols-2'} gap-4`}
        >
          <div className="icon flex gap-2">
            <span className="size-4">
              <Svg svgType={'room'} />
            </span>{' '}
            {estate?.rooms}
          </div>
          <div className="icon flex gap-2">
            <span className="size-4">
              <Svg svgType="area" />
            </span>{' '}
            {estate?.area}
          </div>
          {estate.bedrooms && (
            <div className="icon flex gap-2">
              <span className="size-4">
                <Svg svgType="bed" />
              </span>{' '}
              {estate.bedrooms}
            </div>
          )}{' '}
          {estate.bath && (
            <div className="icon flex gap-2">
              <span className="size-4">
                <Svg svgType="bath" />
              </span>{' '}
              {estate.bath}
            </div>
          )}
        </div>
        {isListed && (
          <p className="line-clamp-2 leading-[200%] overflow-hidden whitespace-pre-wrap">
            {estate.description}
          </p>
        )}
      </div>
      <button
        className="grid gap-2.5 justify-start md:justify-end cursor-pointer relative"
        onClick={handleIncreaseIndex}
      >
        {estate?.feature.includes('endirim') && (
          <p className="text-center">
            <del>{convertCurrency(estate?.price)}</del>
          </p>
        )}{' '}
        <span className="px-4 py-2 bg-blue-700 text-white font-semibold inline-flex items-center rounded-button text-sm">
          {convertCurrency(
            estate?.feature.includes('endirim')
              ? estate?.price -
                  (estate?.price *
                    parseInt(estate?.feature.split(' ')[0].slice(0))) /
                    100
              : estate?.price,
          )}{' '}
          {estate?.selling_type === 'forRent' && ` / ${estate?.payment_type}`}
        </span>
      </button>
    </div>
  )
}
