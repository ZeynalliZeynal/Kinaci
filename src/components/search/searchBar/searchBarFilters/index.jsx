import SelectContainer from '~/components/search/searchBar/selectContainer/index.jsx'
import SearchInput from '~/components/search/searchInput/index.jsx'
import { Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function SearchBarFilters({
  state,
  dispatch,
  handleChange,
  searchParams,
}) {
  return (
    <div className="flex gap-3 flex-wrap">
      <div className="grid md:grid-cols-2 grid-cols-1 w-full gap-3 flex-wrap">
        <div className="grid gap-3">
          <label className="cursor-default text-sm mb-3 inline-block">
            Qiymət
          </label>
          <div className="grid grid-cols-2">
            <SearchInput
              type="number"
              value={searchParams.get('minPrice') || ''}
              property="minPrice"
              handleChange={(newValue) => handleChange('minPrice', newValue)}
              placeholder="0'dan"
            />
            <SearchInput
              type="number"
              value={searchParams.get('maxPrice') || ''}
              property="maxPrice"
              handleChange={(newValue) => handleChange('maxPrice', newValue)}
              placeholder="1.000.000'a qədər"
            />
          </div>
        </div>
        <div className="grid gap-3">
          <label className="cursor-default text-sm mb-3 inline-block">
            Ölçü (m<sup>2</sup>)
          </label>
          <div className="grid grid-cols-2">
            <SearchInput
              type="number"
              value={searchParams.get('minSize') || ''}
              property="minSize"
              handleChange={(newValue) => handleChange('minSize', newValue)}
              placeholder="0'dan"
            />
            <SearchInput
              type="number"
              value={searchParams.get('maxSize') || ''}
              property="maxSize"
              handleChange={(newValue) => handleChange('maxSize', newValue)}
              placeholder="100.000'ə qədər"
            />
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-3">
            <div className="grid gap-3">
              <label className="cursor-default text-sm mb-3 inline-block">
                Mərtəbələrin sayı
              </label>
              <div className="grid grid-cols-2">
                <SearchInput
                  type="number"
                  value={searchParams.get('minFloor') || ''}
                  property="minFloor"
                  handleChange={(newValue) =>
                    handleChange('minFloor', newValue)
                  }
                  placeholder="0'dan"
                />
                <SearchInput
                  type="number"
                  value={searchParams.get('maxFloor') || ''}
                  property="maxFloor"
                  handleChange={(newValue) =>
                    handleChange('maxFloor', newValue)
                  }
                  placeholder="100'ə qədər"
                />
              </div>
            </div>
            <div className="grid gap-3">
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
            <div className="grid gap-3">
              <label className="cursor-default text-sm mb-3 inline-block">
                Daşınmaz əmlak ID
              </label>
              <SearchInput
                type="number"
                value={searchParams.get('estateId') || ''}
                property="estateId"
                handleChange={(newValue) => handleChange('estateId', newValue)}
                placeholder="Nümunə: 5398"
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-3">
            <div className="constructor-year flex-col gap-3">
              <label className="cursor-default text-sm mb-3 inline-block">
                Tikinti ili
              </label>
              <div className="grid grid-cols-2">
                <SearchInput
                  type="date"
                  value={searchParams.get('minConstructorDate') || ''}
                  property="minConstructorDate"
                  handleChange={(newValue) =>
                    handleChange('minConstructorDate', newValue)
                  }
                  placeholder="2000'dən"
                />
                <SearchInput
                  type="date"
                  value={searchParams.get('maxConstructorDate') || ''}
                  property="maxConstructorDate"
                  handleChange={(newValue) =>
                    handleChange('maxConstructorDate', newValue)
                  }
                  placeholder={`${new Intl.DateTimeFormat('az-AZ', {
                    year: 'numeric',
                  }).format(new Date())}'a qədər`}
                />
              </div>
            </div>
            <div className="distance-sea flex-col gap-3">
              <label className="cursor-default text-sm mb-3 inline-block">
                Dənizə Məsafə
              </label>
              <div className="grid grid-cols-2">
                <SearchInput
                  type="number"
                  value={searchParams.get('minSeaDistance') || ''}
                  property="minSeaDistance"
                  handleChange={(newValue) =>
                    handleChange('minSeaDistance', newValue)
                  }
                  placeholder="0'dan"
                />
                <SearchInput
                  type="number"
                  value={searchParams.get('maxSeaDistance') || ''}
                  property="maxSeaDistance"
                  handleChange={(newValue) =>
                    handleChange('maxSeaDistance', newValue)
                  }
                  placeholder="1.000'ə qədər"
                />
              </div>
            </div>
            <div className="distance-airport flex-col gap-3">
              <label className="cursor-default text-sm mb-3 inline-block">
                Hava limanına məsafə (km)
              </label>
              <div className="grid grid-cols-2">
                <SearchInput
                  type="number"
                  value={searchParams.get('minAirportDistance') || ''}
                  property="minAirportDistance"
                  handleChange={(newValue) =>
                    handleChange('minAirportDistance', newValue)
                  }
                  placeholder="0'dan"
                />
                <SearchInput
                  type="number"
                  value={searchParams.get('maxAirportDistance') || ''}
                  property="maxAirportDistance"
                  handleChange={(newValue) =>
                    handleChange('maxAirportDistance', newValue)
                  }
                  placeholder="1.000'ə qədər"
                />
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  )
}
