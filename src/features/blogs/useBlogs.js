import { useQuery } from '@tanstack/react-query';
import { getBlogs } from '~/services/apiBlogs.js';

export const useBlogs = (filters) => {
  const { data: blogs, isPending } = useQuery({
    queryKey: ['blogs', filters],
    queryFn: () => getBlogs(filters),
  });

  return { blogs, isPending };
};
