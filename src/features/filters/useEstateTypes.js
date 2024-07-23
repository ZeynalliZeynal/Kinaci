import { useQuery } from '@tanstack/react-query';
import { getEstateTypes } from '~/services/apiFilters';

export const useEstateTypes = () => {
  const { data: types, isPending } = useQuery({
    queryKey: ['estates/types'],
    queryFn: getEstateTypes,
  });

  return {
    types,
    isPending,
  };
};
