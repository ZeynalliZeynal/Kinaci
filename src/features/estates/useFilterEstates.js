import { useParams, useSearchParams } from 'react-router-dom';
import { useFilteredEstates } from '~/features/estates/useFilteredEstates.js';

export const useFilterEstates = () => {
  const { sellingType } = useParams();
  const [searchParams] = useSearchParams();
  const { filteredEstates, isPending } = useFilteredEstates(
    searchParams
      ? {
          minPrice: searchParams.get('minPrice'),
          maxPrice: searchParams.get('maxPrice'),
          minSize: searchParams.get('minSize'),
          maxSize: searchParams.get('maxSize'),
          minFloor: searchParams.get('minFloor'),
          maxFloor: searchParams.get('maxFloor'),
          estateId: searchParams.get('estateId'),
          status: sellingType && sellingType,
          minConstructorDate:
            searchParams.get('minConstructorDate') &&
            new Date(searchParams.get('minConstructorDate')).toISOString(),
          maxConstructorDate:
            searchParams.get('maxConstructorDate') &&
            new Date(searchParams.get('maxConstructorDate')).toISOString(),
          types: searchParams.get('estateTypes'),
          features: searchParams.get('estateTags'),
          rooms: searchParams.get('rooms'),
          cities: searchParams.get('cities'),
          places: searchParams.get('places'),
        }
      : null,
  );

  return {
    filteredEstates,
    isPending,
  };
};
