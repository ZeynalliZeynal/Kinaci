import { useQuery } from '@tanstack/react-query';
import { getCrewData } from '~/services/apiCrew.js';

export const useCrew = () => {
  const { data: crew, isPending } = useQuery({
    queryKey: ['crew'],
    queryFn: getCrewData,
  });

  return { crew, isPending };
};
