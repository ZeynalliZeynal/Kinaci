import { useQuery } from '@tanstack/react-query';
import { getEstateTypes } from '~/services/apiFilters';

export const useEstateTypes = ({ field, value }) => {
  const { data: types, isPending } = useQuery({
    queryKey: ['estates/types'],
    queryFn: () => getEstateTypes({ field, value }),
  });

  return {
    types,
    isPending,
  };
};
