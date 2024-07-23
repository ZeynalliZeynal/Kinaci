import { useQuery } from '@tanstack/react-query';
import { getEstateRooms } from '~/services/apiFilters';

export const useEstateRooms = () => {
  const { data: rooms, isPending } = useQuery({
    queryKey: ['estates/rooms'],
    queryFn: getEstateRooms,
  });

  return {
    rooms,
    isPending,
  };
};
