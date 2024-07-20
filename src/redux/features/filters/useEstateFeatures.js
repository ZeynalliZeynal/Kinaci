import { useQuery } from '@tanstack/react-query';
import { getEstateFeatures } from '~/services/apiFilters';

export const useEstateFeatures = ({ field, value }, key) => {
  const { data: features, isPending } = useQuery({
    queryKey: [`features${key ? `/${key}` : ''}`],
    queryFn: () => getEstateFeatures({ field, value }),
  });

  return {
    features,
    isPending,
  };
};
