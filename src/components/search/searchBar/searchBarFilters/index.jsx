import SelectContainer from '~/components/search/searchBar/selectContainer/index.jsx'
import SearchInput from '~/components/search/searchInput/index.jsx'
import { Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function SearchBarFilters({ state, dispatch }) {
  return (
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
  )
}
