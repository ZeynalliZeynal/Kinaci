import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteReply as deleteReplyApi } from '~/services/apiBlogs.js';
import { toast } from 'sonner';

export const useDeleteReply = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteReply, isPending: isDeleting } = useMutation({
    mutationFn: deleteReplyApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['replies'],
      });
      toast.success('Şərh uğurla silindi');
    },
    onError: () => {
      toast.error('Şərhi silmək mümkün olmadı');
    },
  });
  return { deleteReply, isDeleting };
};
