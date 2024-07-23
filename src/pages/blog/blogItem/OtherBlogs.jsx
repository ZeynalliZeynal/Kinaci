import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBlog } from '~/features/blogs/useBlog.js';
import { useBlogs } from '~/features/blogs/useBlogs.js';

export default function OtherBlogs() {
  const { blogs } = useBlogs();
  const { blog, isPending, user } = useBlog();
  const [indexOfCurrentBlog, setIndexOfCurrentBlog] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const index = blogs?.findIndex((b) => b.id === blog?.id);
    setIndexOfCurrentBlog(index !== -1 ? index : 0);
  }, [blog?.id, blogs]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [blog?.id]);

  const nextBlog =
    indexOfCurrentBlog + 1 < blogs?.length
      ? blogs[indexOfCurrentBlog + 1]
      : null;
  const prevBlog =
    indexOfCurrentBlog - 1 >= 0 ? blogs[indexOfCurrentBlog - 1] : null;

  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-[30px] items-center pb-[54px] border-b-2 border-gray-200">
          <div>
            <span className="overflow-hidden rounded-full h-20 md:h-auto">
              <img
                src={user?.user_metadata.avatar || '/image/default_user_pp.png'}
                alt={user?.user_metadata.fullName}
              />
            </span>
          </div>
          <div className="grid">
            <h4 className="text-md font-semibold">
              {user?.user_metadata.fullName}
            </h4>
            <p className="text-sm">{blog?.message}</p>
          </div>
        </div>
        <div className="flex justify-between py-[54px] border-b-2 border-gray-200">
          {prevBlog && (
            <button
              className="grid gap-3 group"
              onClick={() => !isPending && navigate(`/blog/${prevBlog?.id}`)}
            >
              <span className="flex items-center">
                <span className="size-4 group-hover:-translate-x-1 transition">
                  <GoChevronLeft />
                </span>
                <span
                  className={`text-md font-semibold px-2 py-1 ${isPending ? 'text-red-600 bg-red-600/10 rounded-lg' : ''}`}
                >
                  {isPending ? 'Məqalə yüklənir...' : 'Əvvəlki Məqalə'}
                </span>
              </span>
              <p className="text-xs">
                {prevBlog?.title.split(' ').slice(0, 3).join(' ') + '...'}
              </p>
            </button>
          )}{' '}
          {nextBlog && (
            <button
              onClick={() => !isPending && navigate(`/blog/${nextBlog?.id}`)}
              className="grid gap-3 group"
            >
              <span className="flex items-center">
                <span
                  className={`text-md font-semibold px-2 py-1 ${isPending ? 'text-red-600 bg-red-600/10 rounded-lg' : ''}`}
                >
                  {isPending ? 'Məqalə yüklənir...' : 'Sonrakı Məqalə'}
                </span>
                <span className="size-4 group-hover:translate-x-1 transition">
                  <GoChevronRight />
                </span>
              </span>
              <p className="text-xs">
                {nextBlog?.title.split(' ').slice(0, 3).join(' ') + '...'}
              </p>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
