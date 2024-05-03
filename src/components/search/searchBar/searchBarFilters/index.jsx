import SelectContainer from '~/components/search/searchBar/selectContainer/index.jsx'
import SearchInput from '~/components/search/searchInput/index.jsx'
import { Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function SearchBarFilters({ state }) {
  return (
    <div className="flex gap-3 flex-wrap">
      <div className="grid md:grid-cols-2 grid-cols-1 w-full gap-3 flex-wrap">
        <div className="grid gap-3">
          <label
            htmlFor="price"
            className="cursor-default text-sm mb-3 inline-block"
          >
            Qiymət
          </label>
          <div className="grid grid-cols-2">
            <SearchInput
              type="number"
              name="price"
              property="minPrice"
              placeholder="Min: 0"
            />
            <SearchInput
              type="number"
              property="maxPrice"
              placeholder="Max: 1.000.000"
            />
          </div>
        </div>
        <div className="grid gap-3">
          <label
            htmlFor="size"
            className="cursor-default text-sm mb-3 inline-block"
          >
            Ölçü (m<sup>2</sup>)
          </label>
          <div className="grid grid-cols-2">
            <SearchInput
              type="number"
              name="size"
              property="minSize"
              placeholder="Min: 0"
            />
            <SearchInput
              type="number"
              property="maxSize"
              placeholder="Max: 100.000"
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
              property="estateTypes"
              options={state.estateTypes} // setValue={(newValue) => handleChange('estateTypes', newValue)}
              label="Əmlak növü"
            />
            <SelectContainer
              property="rooms"
              options={state.rooms}
              label="Otaqların sayı"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <SelectContainer
              property="cities"
              options={state.cities}
              label="Şəhər"
            />
            <SelectContainer
              property="places"
              options={state.places}
              label="Məkan"
            />
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-3">
            <div className="grid gap-3">
              <label
                htmlFor="floor"
                className="cursor-default text-sm mb-3 inline-block"
              >
                Mərtəbələrin sayı
              </label>
              <div className="grid grid-cols-2">
                <SearchInput
                  type="number"
                  name="floor"
                  property="minFloor"
                  placeholder="Min: 0"
                />
                <SearchInput
                  type="number"
                  property="maxFloor"
                  placeholder="Max: 100"
                />
              </div>
            </div>
            <div className="grid gap-3">
              <SelectContainer
                property="tags"
                options={state.badges}
                label="Etiketlər"
              />
            </div>
            <div className="grid gap-3">
              <label
                htmlFor="id"
                className="cursor-default text-sm mb-3 inline-block"
              >
                Daşınmaz əmlak ID
              </label>
              <SearchInput
                type="number"
                name="id"
                property="estateId"
                placeholder="Nümunə: 285326"
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-3">
            <div className="constructor-year flex-col gap-3">
              <label
                htmlFor="year"
                className="cursor-default text-sm mb-3 inline-block"
              >
                Tikinti ili
              </label>
              <div className="grid grid-cols-2">
                <SearchInput
                  type="date"
                  name="year"
                  property="minConstructorDate"
                  placeholder="Min: 2000"
                />
                <SearchInput
                  type="date"
                  property="maxConstructorDate"
                  placeholder={`Max: ${new Intl.DateTimeFormat('az-AZ', {
                    year: 'numeric',
                  }).format(new Date())}`}
                />
              </div>
            </div>
            <div className="distance-sea flex-col gap-3">
              <label
                htmlFor="sea"
                className="cursor-default text-sm mb-3 inline-block"
              >
                Dənizə Məsafə (km)
              </label>
              <div className="grid grid-cols-2">
                <SearchInput
                  type="number"
                  name="sea"
                  property="minSeaDistance"
                  placeholder="Min: 0"
                />
                <SearchInput
                  type="number"
                  property="maxSeaDistance"
                  placeholder="Max: 1.000"
                />
              </div>
            </div>
            <div className="distance-airport flex-col gap-3">
              <label
                htmlFor="airport"
                className="cursor-default text-sm mb-3 inline-block"
              >
                Hava limanına məsafə (km)
              </label>
              <div className="grid grid-cols-2">
                <SearchInput
                  type="number"
                  name="airport"
                  property="minAirportDistance"
                  placeholder="Min: 0"
                />
                <SearchInput
                  type="number"
                  property="maxAirportDistance"
                  placeholder="Max: 1.000"
                />
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  )
}
