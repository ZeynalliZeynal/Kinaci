import { useQuery } from '@tanstack/react-query';
import { getFilteredEstates } from '~/services/apiEstates';

export const useFilteredEstates = (filters = {}) => {
  const { data: filteredEstates, isPending } = useQuery({
    queryKey: ['estates/filtered', filters],
    queryFn: () => getFilteredEstates(filters),
  });

  return { filteredEstates, isPending };
};
