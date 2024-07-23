import { blogShare } from '~/data/blogShare.jsx';
import { useNavigate } from 'react-router-dom';
import { useBlog } from '~/features/blogs/useBlog.js';

export default function ShareBlog() {
  const { blog } = useBlog();
  const navigate = useNavigate();

  return (
    <section>
      <div className="container">
        <div className="grid sm:flex justify-between py-[54px] border-y-2 border-gray-200 w-full gap-5">
          <div className="grid sm:flex gap-5 items-center font-semibold">
            <h4 className="text-md">Bu postu paylaşın:</h4>
            <ul className="gap-6">
              {blogShare.map(({ title, link, icon }) => (
                <li key={title}>
                  <a
                    href={link}
                    className="hover:bg-blue-900 hover:text-white rounded-full p-2"
                  >
                    <span className="w-4">{icon}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/*TODO: Navigate to /blog when click happens*/}
          <ul className="gap-2 justify-start sm:justify-end">
            {blog?.tags?.map((tag) => (
              <li key={tag}>
                <button
                  className="bg-orange-500/10 px-[18px] py-3 rounded-full font-medium"
                  onClick={() => navigate(`/blog?blogTags=${tag}`)}
                >
                  {tag}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
