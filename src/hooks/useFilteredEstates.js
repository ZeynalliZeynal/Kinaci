import { useEffect } from 'react';
import axios from 'axios';
import { baseURL } from '~/data/consts';
import { useParams } from 'react-router-dom';

export const useFilteredEstates = (
  estates,
  dispatch,
  searchParams,
  visibleItems,
) => {
  const { sellingType } = useParams();
  useEffect(() => {
    const fetchEstates = async () => {
      try {
        if (estates.length < 6)
          dispatch({ type: 'SET_LOADING', payload: true });
        const res = await axios.get(`${baseURL}/data/estates`);
        const data = res.data;

        const minConstructorDateParam = searchParams.get('minConstructorDate');
        const maxConstructorDateParam = searchParams.get('maxConstructorDate');
        const minConstructorDate = minConstructorDateParam
          ? parseFloat(minConstructorDateParam)
          : null;
        const maxConstructorDate = maxConstructorDateParam
          ? parseFloat(maxConstructorDateParam)
          : null;

        const filteredEstates = data.filter((estate) => {
          const floorNumber = estate.floors.toString()?.includes('/')
            ? estate.floors.slice(0, estate.floors.indexOf('/'))
            : estate.floors;

          const constructorDate = new Date(
            estate.constructor_date,
          ).getFullYear();
          return (
            (sellingType === undefined ||
              estate.selling_type === sellingType) &&
            (minConstructorDate === null ||
              constructorDate >= minConstructorDate) &&
            (maxConstructorDate === null ||
              constructorDate <= maxConstructorDate) &&
            (searchParams.get('minPrice') === null ||
              estate.price >= +searchParams.get('minPrice')) &&
            (searchParams.get('maxPrice') === null ||
              estate.price <= +searchParams.get('maxPrice')) &&
            (searchParams.get('estateId') === null ||
              estate.id === +searchParams.get('estateId')) &&
            (searchParams.get('minSize') === null ||
              estate.area >= +searchParams.get('minSize')) &&
            (searchParams.get('maxSize') === null ||
              estate.area <= +searchParams.get('maxSize')) &&
            (searchParams.get('minFloor') === null ||
              floorNumber >= +searchParams.get('minFloor')) &&
            (searchParams.get('maxFloor') === null ||
              floorNumber <= +searchParams.get('maxFloor')) &&
            (searchParams.get('minSeaDistance') === null ||
              estate.distances.sea >= +searchParams.get('minSeaDistance')) &&
            (searchParams.get('maxSeaDistance') === null ||
              estate.distances.sea <= +searchParams.get('maxSeaDistance')) &&
            (searchParams.get('minAirportDistance') === null ||
              estate.distances.airport >=
                +searchParams.get('minAirportDistance')) &&
            (searchParams.get('maxAirportDistance') === null ||
              estate.distances.airport <=
                +searchParams.get('maxAirportDistance')) &&
            (searchParams.get('estateTypes') === null ||
              searchParams
                .get('estateTypes')
                .toLowerCase()
                .includes(estate.type.toLowerCase())) &&
            (searchParams.get('cities') === null ||
              searchParams
                .get('cities')
                .toLowerCase()
                .includes(estate.location.city.toLowerCase())) &&
            (searchParams.get('places') === null ||
              searchParams
                .get('places')
                .toLowerCase()
                .includes(estate.location.place?.toLowerCase())) &&
            (searchParams.get('tags') === null ||
              estate.feature
                .split(' ')
                .some((tag) =>
                  searchParams
                    .get('tags')
                    .toLowerCase()
                    .includes(tag.toLowerCase()),
                )) &&
            (searchParams.get('rooms') === null ||
              searchParams
                .get('rooms')
                .toLowerCase()
                .includes(estate.rooms.toString().toLowerCase()))
          );
        });

        const sortByParam = searchParams.get('sortBy');

        let sortedEstates = [...filteredEstates];

        if (sortByParam) {
          sortedEstates.sort((a, b) => {
            if (sortByParam.includes('Artan')) return a.price - b.price;
            else if (sortByParam.includes('Azalan')) return b.price - a.price;
          });
        }
        dispatch({
          type: 'SET_TOTAL_ITEMS',
          payload: sortedEstates.length,
        });
        dispatch({ type: 'SET_LOADING', payload: false });
        dispatch({
          type: 'SET_ESTATES',
          payload: sortedEstates.slice(0, visibleItems),
        });
        dispatch({ type: 'SET_LOADING_MORE', payload: false });
      } catch (err) {
        console.warn(err);
      }
    };
    fetchEstates();
  }, [estates.length, searchParams, visibleItems, sellingType]);
};
