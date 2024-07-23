import moment from 'moment';
import { useBlog } from '~/features/blogs/useBlog.js';

export default function BlogItemSection() {
  const { blog, isPending, user } = useBlog();
  console.log(blog?.user_id);

  return (
    <section>
      <div className="container">
        <div>
          <h2>{blog?.title}</h2>
          <div className="flex text-blue-900/70 text-xs items-center font-medium divide-x-2 divide-gray-200">
            <div className="flex items-center gap-2.5 pr-4">
              <span className="size-10 rounded-full overflow-hidden">
                <img
                  src={
                    user?.user_metadata.avatar || '/image/default_user_pp.png'
                  }
                  alt={user?.user_metadata.fullName}
                />
              </span>
              <span>{user?.user_metadata.fullName}</span>
            </div>
            <div className="px-4">
              {blog?.tags?.map((tag, i) =>
                i === blog.tags.length - 1 ? tag : tag + ', ',
              )}
            </div>
            <time className="pl-4">
              {moment(blog?.created_at).format('MMMM DD YYYY, hh:mm a')}
            </time>
          </div>
          <div className="mt-8">
            <div className="mb-10 rounded-xl overflow-hidden h-[600px]">
              <img src={blog?.image} alt={blog?.title} />
            </div>
            <p>{blog?.blog}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
