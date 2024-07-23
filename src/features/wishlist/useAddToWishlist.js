import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { addToWishlist } from '~/services/apiWishlist.js';

export const useAddToWishlist = () => {
  const queryClient = useQueryClient();
  const { mutate: addItemToWishlist, isPending: isAdding } = useMutation({
    mutationFn: addToWishlist,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['user/wishlist'],
      });
      toast.success('Əmlak uğurla əlavə edildi');
    },
    onError: () => {
      toast.error('Əmlak əlavə etmək alınmadı');
    },
  });

  return { addItemToWishlist, isAdding };
};
