import { useQuery } from '@tanstack/react-query';
import { getEstateCities } from '~/services/apiFilters';

export const useEstateCities = ({ field, value }) => {
  const { data: cities, isPending } = useQuery({
    queryKey: ['estates/cities'],
    queryFn: () => getEstateCities({ field, value }),
  });

  return {
    cities,
    isPending,
  };
};
