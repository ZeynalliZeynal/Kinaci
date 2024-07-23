import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { removeFromWishlist } from '~/services/apiWishlist.js';

export const useRemoveFromWishlist = () => {
  const queryClient = useQueryClient();
  const { mutate: removeItemFromWishlist, isPending: isRemoving } = useMutation(
    {
      mutationFn: removeFromWishlist,
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['user/wishlist'],
        });
        toast.success('Əmlak uğurla silindi');
      },
      onError: () => {
        toast.error('Əmlak silinmədi');
      },
    },
  );

  return { removeItemFromWishlist, isRemoving };
};
