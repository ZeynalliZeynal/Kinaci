import SelectContainer from '~/components/search/searchBar/selectContainer/index.jsx';
import SearchInput from '~/components/search/searchInput/index.jsx';
import { Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useEstateTypes } from '../useEstateTypes';
import { useEstateRooms } from '../useEstateRooms';
import { useEstateCities } from '../useEstateCities';
import { useEstatePlaces } from '../useEstatePlaces';
import { useEstateFeatures } from '../useEstateFeatures';

export default function SearchBarFilters({ state }) {
  const { features, isPending: isLoadingFeatures } = useEstateFeatures();
  const { types, isPending: isLoadingTypes } = useEstateTypes();
  const { rooms, isPending: isLoadingRooms } = useEstateRooms();
  const { cities, isPending: isLoadingCities } = useEstateCities();
  const { places, isPending: isLoadingPlaces } = useEstatePlaces();

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
              placeholder="Min"
            />
            <SearchInput type="number" property="maxPrice" placeholder="Max" />
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
              placeholder="Min"
            />
            <SearchInput type="number" property="maxSize" placeholder="Max" />
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
              options={types}
              label="Əmlak növü"
              isLoading={isLoadingTypes}
            />
            <SelectContainer
              property="rooms"
              options={rooms}
              label="Otaqların sayı"
              isLoading={isLoadingRooms}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <SelectContainer
              property="cities"
              options={cities}
              label="Şəhər"
              isLoading={isLoadingCities}
            />
            <SelectContainer
              property="places"
              options={places}
              label="Məkan"
              isLoading={isLoadingPlaces}
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
                  placeholder="Min"
                />
                <SearchInput
                  type="number"
                  property="maxFloor"
                  placeholder="Max"
                />
              </div>
            </div>
            <div className="grid gap-3">
              <SelectContainer
                property="tags"
                options={features}
                label="Etiketlər"
                isLoading={isLoadingFeatures}
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
                  placeholder="Min"
                />
                <SearchInput
                  type="date"
                  name="year"
                  property="maxConstructorDate"
                  placeholder="Max"
                />
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
}
