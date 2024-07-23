import { useQuery } from '@tanstack/react-query';
import { getUser } from '~/services/apiAuth.js';

export const useFindUser = (id) => {
  const { data: user, isPending } = useQuery({
    queryKey: ['user', id],
    queryFn: () => getUser(id),
  });

  return { user, isPending };
};
