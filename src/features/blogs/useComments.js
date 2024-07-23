import { useQuery } from '@tanstack/react-query';
import { getComments } from '~/services/apiBlogs.js';

export const useComments = (blog_id) => {
  const { data: comments, isPending } = useQuery({
    queryKey: ['comments', blog_id],
    queryFn: () => getComments(blog_id),
  });

  return { comments, isPending };
};
