import { motion } from 'framer-motion'
import classNames from 'classnames'
import { TbTrashFilled } from 'react-icons/tb'
import DefaultBtn from '~/components/DefaultBtn.jsx'
import { GrSearch } from 'react-icons/gr'
import { useSearchParams } from 'react-router-dom'

export default function SearchBarBtns({ state, dispatch }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const handleClearFilter = () => {
    const newSearchParams = new URLSearchParams()
    setSearchParams(newSearchParams)
  }
  return (
    <div className="buttons w-full flex flex-col md:flex-row justify-between pt-5">
      <div className="flex text-xs gap-2.5 py-2">
        <button
          type="button"
          className="gap-[6px]"
          onClick={() => dispatch({ type: 'TOGGLE_EXPANDED' })}
        >
          <motion.span
            animate={state.isExpanded ? 'expanded' : 'initial'}
            variants={{
              initial: { rotate: 0 },
              expanded: { rotate: 180 },
            }}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
            }}
            className={classNames('origin-center', {
              'rotate-180': state.isExpanded,
            })}
          >
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.58228 5.00554L9.83195 0.755859L11.0459 1.97067L5.58228 7.43429L0.118652 1.97067L1.3326 0.756718L5.58228 5.00639V5.00554Z"
                fill="#052841"
              />
            </svg>
          </motion.span>
          Daha çox filtr
        </button>
        <button
          type="button"
          className="gap-[6px] text-blue-900/50 hover:bg-blue-900/5 rounded px-2"
          onClick={handleClearFilter}
        >
          <span className="size-3">
            <TbTrashFilled />
          </span>{' '}
          Hamısını sıfırla
        </button>
      </div>
      <div className="text-md">
        <DefaultBtn type="submit">
          <span>
            <GrSearch />
          </span>{' '}
          Axtar
        </DefaultBtn>
      </div>
    </div>
  )
}
