import { useEffect, useState } from 'react'
import axios from 'axios'
import SelectContainer from '~/components/search/searchBar/selectContainer/index.jsx'
import SearchInput from '~/components/search/searchInput/index.jsx'
import { TbTrashFilled } from 'react-icons/tb'
import { GrSearch } from 'react-icons/gr'
import DefaultBtn from '~/components/defaultBtn/index.jsx'
import classNames from 'classnames'
import { motion } from 'framer-motion'

const baseURL = 'https://kinaci-server.onrender.com/data/selectInfo'

export default function SearchBar() {
  const [estateType, setEstateType] = useState([])
  const [room, setRoom] = useState([])
  const [place, setPlace] = useState([])
  const [city, setCity] = useState([])
  const [badge, setBadge] = useState([])
  const [estateTypeValue, setEstateTypeValue] = useState([])
  const [roomValue, setRoomValue] = useState([])
  const [cityValue, setCityValue] = useState([])
  const [placeValue, setPlaceValue] = useState([])
  const [badgeValue, setBadgeValue] = useState([])
  const [isExpanded, setIsExpanded] = useState(false)
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(baseURL)
        const data = await response.data
        setEstateType(data.estateTypes)
        setRoom(data.rooms)
        setPlace(data.location)
        setBadge(data.badges)
      } catch (err) {
        console.warn(err)
      }
    }

    fetchData()
  }, [])

  function handleClearFilter() {
    setEstateTypeValue([])
    setRoomValue([])
    setCityValue([])
    setPlaceValue([])
    setFeatureValue([])
  }

  return (
    <form className="text-blue-900 py-5 px-4 w-full bg-white shadow-filter-box rounded-[12px] rounded-tl-none">
      <div className="flex gap-3 flex-wrap">
        <div className="grid md:grid-cols-2 grid-cols-1 w-full gap-3 flex-wrap">
          <div className="flex gap-3">
            <div className="w-7/12">
              <SelectContainer
                value={estateTypeValue}
                options={estateType}
                setValue={setEstateTypeValue}
                label="Əmlak növü"
              />
            </div>
            <div className="w-5/12">
              <SelectContainer
                value={roomValue}
                options={room}
                setValue={setRoomValue}
                label="Otaqların sayı"
              />
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-1/2">
              <SelectContainer
                value={placeValue}
                options={place}
                setValue={setPlaceValue}
                label="Şəhər"
              />
            </div>
            <div className="w-1/2">
              <SelectContainer
                value={cityValue}
                options={city}
                setValue={setCityValue}
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
        <motion.div
          className="expanded-filter w-full gap-3 flex-col origin-top flex"
          animate={isExpanded ? 'expanded' : 'hidden'}
          variants={{
            hidden: { scale: 0, height: 0, opacity: 0 },
            expanded: {
              scale: 1,
              height: 'fit-content',
              opacity: 1,
            },
          }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
          }}
        >
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
                  value={badgeValue}
                  options={badge}
                  setValue={setBadgeValue}
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
        </motion.div>
      </div>
      <div className="buttons w-full flex flex-col md:flex-row justify-between pt-5">
        <div className="flex text-xs gap-2.5 py-2">
          <button
            type="button"
            className="gap-[6px]"
            onClick={() => setIsExpanded((prev) => !prev)}
          >
            <motion.span
              animate={isExpanded ? 'expanded' : 'initial'}
              variants={{
                initial: { rotate: 0 },
                expanded: { rotate: 180 },
              }}
              transition={{
                duration: 0.5,
                ease: 'easeInOut',
              }}
              className={classNames('origin-center', {
                'rotate-180': isExpanded,
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
