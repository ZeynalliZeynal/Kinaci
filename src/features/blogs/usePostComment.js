import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postComment } from '~/services/apiBlogs.js';
import { toast } from 'sonner';

export const usePostComment = () => {
  const queryClient = useQueryClient();
  const { mutate: post, isPending: isPosting } = useMutation({
    mutationFn: postComment,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['comments'],
      });
      toast.success('Şərh uğurla yayımlandı');
    },
    onError: () => {
      toast.error('Şərh yerləşdirmək mümkün olmadı');
    },
  });
  return { post, isPosting };
};
