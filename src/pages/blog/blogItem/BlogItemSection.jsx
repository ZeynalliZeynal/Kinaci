import { az } from 'date-fns/locale'
import { format } from 'date-fns'

export default function BlogItemSection({ blog }) {
  const formattedDate = blog?.sentDate
    ? format(new Date(blog?.sentDate), 'PPp', { locale: az })
    : 'Loading...'
  return (
    <section>
      <div className="container">
        <div>
          <h2>{blog?.title}</h2>
          <div className="flex text-blue-900/70 text-xs items-center font-medium divide-x-2 divide-gray-200">
            <div className="flex items-center gap-2.5 pr-4">
              <span className="size-10">
                <img src={blog?.senderPhoto} alt={blog?.sentBy} />
              </span>
              <span>{blog?.sentBy}</span>
            </div>
            <div className="px-4">
              {blog?.tags.map((tag, i) =>
                i === blog.tags.length - 1 ? tag : tag + ', ',
              )}
            </div>
            <time className="pl-4">{formattedDate}</time>
          </div>
          <div className="mt-8">
            <div className="mb-10 rounded-xl overflow-hidden h-[600px]">
              <img src={blog?.image} alt={blog?.title} />
            </div>
            <p className="whitespace-pre-wrap">{blog?.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
