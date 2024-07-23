import { useQuery } from '@tanstack/react-query';
import { getEstates } from '~/services/apiEstates';

export const useEstates = ({ filter, method } = {}) => {
  const { data: estates, isPending } = useQuery({
    queryKey: [`estates`, filter],
    queryFn: () => getEstates({ filter, method }),
  });

  return { estates, isPending };
};
