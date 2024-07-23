import { useQuery } from '@tanstack/react-query';
import { getReplies } from '~/services/apiBlogs.js';

export const useReplies = (commentId) => {
  const { data: replies, isPending } = useQuery({
    queryKey: ['replies', commentId],
    queryFn: () => getReplies(commentId),
  });

  return { replies, isPending };
};
