import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getEstate } from '~/services/apiEstates.js';

export const useEstate = () => {
  const { id } = useParams();
  const { data: estate, isPending } = useQuery({
    queryKey: ['estate', id],
    queryFn: () => getEstate(id),
  });

  return {
    estate,
    isPending,
  };
};
