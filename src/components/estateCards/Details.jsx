import { useEffect, useRef, useState } from 'react'
import Svg from '~/components/Svg.jsx'
import Tooltip from '~/components/Tooltip.jsx'
import currencyData from '~/data/currencyData.jsx'

export default function Details({ estate }) {
  const [selectedCurrencyIndex, setSelectedCurrencyIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const tooltipTimeoutRef = useRef(null)

  const handleMouseEnter = () => {
    tooltipTimeoutRef.current = setTimeout(() => setIsHovering(true), 500)
  }

  const handleMouseLeave = () => {
    clearTimeout(tooltipTimeoutRef.current)
    setIsHovering(false)
  }

  useEffect(() => {
    return () => clearTimeout(tooltipTimeoutRef.current) // Cleanup on unmount
  }, [])

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
    <div className="details grid grid-cols-2">
      <div className="text-xs grid gap-2.5">
        <h5>
          {estate?.city} {estate?.place && `/${estate?.place}`}
        </h5>
        <div className="icons grid grid-cols-2 gap-4">
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
      </div>
      <button
        className="grid gap-2.5 justify-end cursor-pointer relative"
        onClick={handleIncreaseIndex}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {estate?.feature.includes('endirim') && (
          <p className="text-center">
            <del>{convertCurrency(estate?.price)}</del>
          </p>
        )}{' '}
        <span className="px-4 py-2 bg-blue-700 text-white font-semibold inline-flex items-center rounded-button">
          {convertCurrency(
            estate?.feature.includes('endirim')
              ? estate?.price -
                  (estate?.price *
                    parseInt(estate?.feature.split(' ')[0].slice(0))) /
                    100
              : estate?.price,
          )}{' '}
          {estate?.selling_type === 'forRent' && `/${estate?.payment_type}`}
        </span>
        <Tooltip position="bottom" isHovering={isHovering}>
          Digər valyuta dəyərlərini görmək üçün klikləyin
        </Tooltip>
      </button>
    </div>
  )
}
