import { useQuery } from '@tanstack/react-query';
import { getEstatePlaces } from '~/services/apiFilters';

export const useEstatePlaces = () => {
  const { data: places, isPending } = useQuery({
    queryKey: ['estates/places'],
    queryFn: getEstatePlaces,
  });

  return {
    places,
    isPending,
  };
};
