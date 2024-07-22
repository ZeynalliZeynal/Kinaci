import { useQuery } from '@tanstack/react-query';
import { getEstatePlaces } from '~/services/apiFilters';

export const useEstatePlaces = ({ field, value } = {}) => {
  const { data: places, isPending } = useQuery({
    queryKey: ['estates/places'],
    queryFn: () => getEstatePlaces({ field, value }),
  });

  return {
    places,
    isPending,
  };
};
