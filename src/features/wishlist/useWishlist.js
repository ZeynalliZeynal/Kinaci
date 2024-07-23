import { useQuery } from '@tanstack/react-query';
import { getUserWishlist } from '~/services/apiWishlist.js';
import { useUser } from '~/features/auth/useUser.js';

export const useWishlist = (estateId) => {
  const { user } = useUser();
  const { data: wishlist, isPending } = useQuery({
    queryKey: ['user/wishlist', user?.id],
    queryFn: () => getUserWishlist(user?.id),
  });

  const alreadyAdded = wishlist?.find((item) => estateId === item.estate_id);

  return { wishlist, isPending, alreadyAdded };
};
