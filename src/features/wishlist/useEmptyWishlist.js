import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { emptyWishlist as emptyWishlistApi } from '~/services/apiWishlist.js';
import { useUser } from '~/features/auth/useUser.js';

export const useEmptyWishlist = () => {
  const { user } = useUser();
  const queryClient = useQueryClient();
  const { mutate: emptyWishlist, isPending: isDeleting } = useMutation({
    mutationFn: () => emptyWishlistApi(user?.id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['user/wishlist'],
      });
      toast.success('Əmlaklar uğurla silindi');
    },
    onError: () => {
      toast.error('Əmlaklar silinmədi');
    },
  });

  return { emptyWishlist, isDeleting };
};
