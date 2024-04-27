import classNames from 'classnames'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

export default function SelectTabBtns({ setSellingType }) {
  const { t } = useTranslation()
  const { sellingType } = useParams()
  const [activeButton, setActiveButton] = useState(sellingType)

  function handleSetActive(btnValue) {
    setActiveButton(btnValue.dataset.label)
    setSellingType(btnValue.dataset.label)
  }

  return (
    <div className="tab-btns text-blue-900 font-semibold text-md flex rounded-t-selectBtn overflow-hidden">
      <button
        onClick={(e) => handleSetActive(e.currentTarget)}
        className="w-[100px] bg-gray-100 px-7 py-4 active:transform-none relative"
      >
        <span className="z-[5] relative">{t('Hamısı')}</span>
      </button>
      <button
        onClick={(e) => handleSetActive(e.currentTarget)}
        className="w-[100px] px-7 py-4 bg-gray-100 active:transform-none relative"
        data-label="forRent"
      >
        <span className="z-[5] relative">{t('İcarə')}</span>
      </button>
      <button
        onClick={(e) => handleSetActive(e.currentTarget)}
        className="w-[100px] px-7 py-4 bg-gray-100 active:transform-none relative"
        data-label="forSale"
      >
        <span className="z-[5] relative">{t('Satılır')}</span>
      </button>
      <div
        className={classNames(
          "flex justify-center moving-box w-[100px] h-[54px] absolute z-[4] bg-white after:content-[''] after:absolute after:bottom-0 after:w-[50%] after:h-0.5 after:bg-orange-500 rounded-t-selectBtn transition-transform",
          {
            'translate-x-0': activeButton === undefined,
            'translate-x-[100px]': activeButton === 'forRent',
            'translate-x-[200px]': activeButton === 'forSale',
          },
        )}
      ></div>
    </div>
  )
}
