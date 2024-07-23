import { useQuery } from '@tanstack/react-query';
import { getReviews } from '~/services/apiReviews.js';

export const useReviews = () => {
  const { data: reviews, isPending } = useQuery({
    queryKey: ['reviews'],
    queryFn: getReviews,
  });

  return { reviews, isPending };
};
