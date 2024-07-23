import { useQuery } from '@tanstack/react-query';
import { getBlog } from '~/services/apiBlogs.js';
import { useParams } from 'react-router-dom';
import { useFindUser } from '~/features/auth/useFindUser.js';

export const useBlog = () => {
  const { id } = useParams();
  const { data: blog, isPending } = useQuery({
    queryKey: ['blogs', id],
    queryFn: () => getBlog(id),
  });

  const { user } = useFindUser(blog?.id);

  return { blog, isPending, user };
};
