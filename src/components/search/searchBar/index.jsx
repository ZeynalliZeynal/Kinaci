import { Fragment, useEffect, useReducer } from 'react'
import axios from 'axios'
import SelectContainer from '~/components/search/searchBar/selectContainer/index.jsx'
import SearchInput from '~/components/search/searchInput/index.jsx'
import { TbTrashFilled } from 'react-icons/tb'
import { GrSearch } from 'react-icons/gr'
import DefaultBtn from '~/components/defaultBtn/index.jsx'
import classNames from 'classnames'
import { motion } from 'framer-motion'
import { Transition } from '@headlessui/react'
import { reducer } from '~/reducers/searchBarReducer.js'

const baseURL = 'https://kinaci-server.onrender.com/data/selectInfo'

const initialState = {
  estateTypeValue: [],
  roomValue: [],
  cityValue: [],
  placeValue: [],
  badgeValue: [],
  isExpanded: false,
}

export default function SearchBar() {
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(baseURL)
        const data = await response.data
        dispatch({ type: 'SET_DATA', payload: data })
      } catch (err) {
        console.warn(err)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    const allPlaces = [].concat(...state.cityValue.map((city) => city.place))
    dispatch({ type: 'SET_VALUES', payload: { place: allPlaces } })
  }, [state.cityValue])

  function handleClearFilter() {
    dispatch({ type: 'CLEAR_FILTER' })
  }

  return (
    <form
      className="text-blue-900 py-5 px-4 w-full bg-white shadow-filter-box rounded-[12px] rounded-tl-none"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="flex gap-3 flex-wrap">
        <div className="grid md:grid-cols-2 grid-cols-1 w-full gap-3 flex-wrap">
          <div className="flex gap-3">
            <div className="w-7/12">
              <SelectContainer
                value={state.estateTypeValue}
                options={state.estateTypes}
                setValue={(newValue) =>
                  dispatch({
                    type: 'SET_VALUES',
                    payload: { estateTypeValue: newValue },
                  })
                }
                label="Əmlak növü"
              />
            </div>
            <div className="w-5/12">
              <SelectContainer
                value={state.roomValue}
                options={state.rooms}
                setValue={(newValue) =>
                  dispatch({
                    type: 'SET_VALUES',
                    payload: { roomValue: newValue },
                  })
                }
                label="Otaqların sayı"
              />
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-1/2">
              <SelectContainer
                value={state.cityValue}
                options={state.location}
                setValue={(newValue) =>
                  dispatch({
                    type: 'SET_VALUES',
                    payload: { cityValue: newValue },
                  })
                }
                label="Şəhər"
              />
            </div>
            <div className="w-1/2">
              <SelectContainer
                value={state.placeValue}
                options={state.place}
                setValue={(newValue) =>
                  dispatch({
                    type: 'SET_VALUES',
                    payload: { placeValue: newValue },
                  })
                }
                label="Məkan"
              />
            </div>
          </div>
          <div className="flex-col gap-3">
            <label className="cursor-default text-sm mb-3 inline-block">
              Qiymət
            </label>
            <div className="flex">
              <div className="w-1/2">
                <SearchInput type="text" placeholder="0'dan" />
              </div>
              <div className="w-1/2">
                <SearchInput type="text" placeholder="1.000.000'a qədər" />
              </div>
            </div>
          </div>
          <div className="flex-col gap-3">
            <label className="cursor-default text-sm mb-3 inline-block">
              Ölçü (m<sup>2</sup>)
            </label>
            <div className="flex">
              <div className="w-1/2">
                <SearchInput type="text" placeholder="0'dan" />
              </div>
              <div className="w-1/2">
                <SearchInput type="text" placeholder="100.000'ə qədər" />
              </div>
            </div>
          </div>
        </div>
        <Transition
          as={Fragment}
          show={state.isExpanded}
          enter="ease-out duration-500"
          enterFrom="scale-0 opacity-0"
          enterTo="scale-100 opacity-100"
          leave="ease-in duration-500"
          leaveFrom="scale-100 opacity-1"
          leaveTo="scale-0 opacity-0"
        >
          <div className="expanded-filter w-full gap-3 flex-col origin-top flex">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-3">
              <div className="flex-col gap-3">
                <label className="cursor-default text-sm mb-3 inline-block">
                  Mərtəbələrin sayı
                </label>
                <div className="flex">
                  <div className="w-1/2">
                    <SearchInput type="text" placeholder="0'dan" />
                  </div>
                  <div className="w-1/2">
                    <SearchInput type="text" placeholder="100'ə qədər" />
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-full">
                  <SelectContainer
                    value={state.badgeValue}
                    options={state.badges}
                    setValue={(newValue) =>
                      dispatch({
                        type: 'SET_VALUES',
                        payload: { badgeValue: newValue },
                      })
                    }
                    label="Etiketlər"
                  />
                </div>
              </div>
              <div className="flex-col gap-3">
                <label className="cursor-default text-sm mb-3 inline-block">
                  Daşınmaz əmlak ID
                </label>
                <div className="flex">
                  <SearchInput type="text" placeholder="Nümunə: 5398" />
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-3">
              <div className="constructor-year flex-col gap-3">
                <label className="cursor-default text-sm mb-3 inline-block">
                  Tikinti ili
                </label>
                <div className="flex">
                  <div className="w-1/2">
                    <SearchInput type="text" placeholder="2000'dən" />
                  </div>
                  <div className="w-1/2">
                    <SearchInput
                      type="text"
                      placeholder={`${new Intl.DateTimeFormat('az-AZ', {
                        year: 'numeric',
                      }).format(new Date())}'a qədər`}
                    />
                  </div>
                </div>
              </div>
              <div className="distance-sea flex-col gap-3">
                <label className="cursor-default text-sm mb-3 inline-block">
                  Dənizə Məsafə
                </label>
                <div className="flex">
                  <div className="w-1/2">
                    <SearchInput type="text" placeholder="0'dan" />
                  </div>
                  <div className="w-1/2">
                    <SearchInput type="text" placeholder="1.000'ə qədər" />
                  </div>
                </div>
              </div>
              <div className="distance-airport flex-col gap-3">
                <label className="cursor-default text-sm mb-3 inline-block">
                  Hava limanına məsafə (km)
                </label>
                <div className="flex">
                  <div className="w-1/2">
                    <SearchInput type="text" placeholder="0'dan" />
                  </div>
                  <div className="w-1/2">
                    <SearchInput type="text" placeholder="1.000'ə qədər" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
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
            </span>
            Bütün filtrləri sıfırlayın
          </button>
        </div>
        <div className="text-md">
          <DefaultBtn type="submit">
            <span>
              <GrSearch />
            </span>
            Axtar
          </DefaultBtn>
        </div>
      </div>
    </form>
  )
}
