import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteComment as deleteCommentApi } from '~/services/apiBlogs.js';
import { toast } from 'sonner';

export const useDeleteComment = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteComment, isPending: isDeleting } = useMutation({
    mutationFn: deleteCommentApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['comments'],
      });
      toast.success('Şərh uğurla silindi');
    },
    onError: () => {
      toast.error('Şərhi silmək mümkün olmadı');
    },
  });
  return { deleteComment, isDeleting };
};
