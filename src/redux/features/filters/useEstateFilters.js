import { useQuery } from '@tanstack/react-query';
import { getEstateFilters } from '~/services/apiFilters';

export const useEstateFilters = () => {
  const { data: filters, isPending } = useQuery({
    queryKey: ['estates/filters'],
    queryFn: getEstateFilters,
  });

  return { filters, isPending };
};
