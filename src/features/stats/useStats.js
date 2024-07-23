import { useQuery } from '@tanstack/react-query';
import { getStats } from '~/services/apiStats.js';

export const useStats = () => {
  const { data: stats, isPending } = useQuery({
    queryKey: ['stats'],
    queryFn: getStats,
  });

  return { stats, isPending };
};
