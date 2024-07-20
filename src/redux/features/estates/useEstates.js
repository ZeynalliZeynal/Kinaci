import { useQuery } from '@tanstack/react-query';
import { getEstates } from '~/services/apiEstates';

export const useEstates = ({ filter, method } = {}, key) => {
  const { data: estates, isPending } = useQuery({
    queryKey: [`estates${key ? `/${key}` : ''}`],
    queryFn: () => getEstates({ filter, method }),
  });

  return { estates, isPending };
};
