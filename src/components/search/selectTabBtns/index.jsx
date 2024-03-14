import classNames from 'classnames'
import { useState } from 'react'

export default function SelectTabBtns() {
  const [activeButton, setActiveButton] = useState('all')

  function handleSetActive(btnValue) {
    setActiveButton(btnValue.dataset.label)
  }

  return (
    <div className="tab-btns text-blue-900 font-semibold text-md flex rounded-t-selectBtn overflow-hidden">
      <button
        onClick={(e) => handleSetActive(e.currentTarget)}
        className="w-[100px] bg-gray-100 px-7 py-4 active:transform-none relative"
        data-label="all"
      >
        <span className="z-[5] relative">Hamısı</span>
      </button>
      <button
        onClick={(e) => handleSetActive(e.currentTarget)}
        className="w-[100px] px-7 py-4 bg-gray-100 active:transform-none relative"
        data-label="rent"
      >
        <span className="z-[5] relative">İcarə</span>
      </button>
      <button
        onClick={(e) => handleSetActive(e.currentTarget)}
        className="w-[100px] px-7 py-4 bg-gray-100 active:transform-none relative"
        data-label="sale"
      >
        <span className="z-[5] relative">Satılır</span>
      </button>
      <div
        className={classNames(
          "flex justify-center moving-box w-[100px] h-[54px] absolute z-[4] bg-white after:content-[''] after:absolute after:bottom-0 after:w-[50%] after:h-0.5 after:bg-orange-500 rounded-t-selectBtn transition-transform",
          {
            'translate-x-0': activeButton === 'all',
            'translate-x-[100px]': activeButton === 'rent',
            'translate-x-[200px]': activeButton === 'sale',
          },
        )}
      ></div>
    </div>
  )
}
