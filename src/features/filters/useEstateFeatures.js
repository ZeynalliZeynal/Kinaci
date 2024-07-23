import { useQuery } from '@tanstack/react-query';
import { getEstateFeatures } from '~/services/apiFilters';

export const useEstateFeatures = () => {
  const { data: features, isPending } = useQuery({
    queryKey: [`estate/features`],
    queryFn: getEstateFeatures,
  });

  return {
    features,
    isPending,
  };
};
