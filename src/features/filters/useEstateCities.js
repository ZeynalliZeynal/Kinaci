import { useQuery } from '@tanstack/react-query';
import { getEstateCities } from '~/services/apiFilters';

export const useEstateCities = () => {
  const { data: cities, isPending } = useQuery({
    queryKey: ['estates/cities'],
    queryFn: getEstateCities,
  });

  return {
    cities,
    isPending,
  };
};
