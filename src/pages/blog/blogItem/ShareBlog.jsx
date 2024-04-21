import { blogShare } from '~/data/blogShare.jsx'

export default function ShareBlog({ blog }) {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between py-[54px] border-y-2 border-gray-200 w-full">
          <div className="flex gap-5 items-center font-semibold">
            <h4 className="text-md">Bu postu paylaşın:</h4>
            <ul className="gap-6">
              {blogShare.map(({ title, link, icon }) => (
                <li key={title}>
                  <a
                    href={link}
                    className="p-2 hover:bg-blue-900 hover:text-white rounded-full"
                  >
                    {icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/*TODO: Navigate to /blog when click happens*/}
          <ul className="gap-2">
            {blog?.tags.map((tag) => (
              <li key={tag}>
                <button className="bg-orange-500/10 px-[18px] py-3 rounded-full font-medium">
                  {tag}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
