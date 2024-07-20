import { useQuery } from '@tanstack/react-query';
import { getEstateRooms } from '~/services/apiFilters';

export const useEstateRooms = ({ field, value }) => {
  const { data: rooms, isPending } = useQuery({
    queryKey: ['estates/rooms'],
    queryFn: () => getEstateRooms({ field, value }),
  });

  return {
    rooms,
    isPending,
  };
};
