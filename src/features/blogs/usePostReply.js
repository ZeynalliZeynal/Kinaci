import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postReply } from '~/services/apiBlogs.js';
import { toast } from 'sonner';

export const usePostReply = () => {
  const queryClient = useQueryClient();
  const { mutate: post, isPending: isPosting } = useMutation({
    mutationFn: postReply,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['replies'],
      });
      toast.success('Şərh uğurla yayımlandı');
    },
    onError: () => {
      toast.error('Şərh yerləşdirmək mümkün olmadı');
    },
  });
  return { post, isPosting };
};
