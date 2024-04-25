import CategorySectionContainer from '~/pages/blog/categories/CategorySectionContainer.jsx'
import { Link } from 'react-router-dom'
import moment from 'moment'

export default function CategoriesLastSent({ blogs }) {
  return (
    <CategorySectionContainer>
      <h4 className="font-semibold">Populyar etiketlər</h4>
      <ul className="text-blue-900 grid grid-cols-1 gap-5 mt-5">
        {blogs
          ?.reverse()
          .slice(0, 3)
          .map(({ id, title, image, sentDate }) => (
            <li key={id}>
              <Link
                to={`/blog/${id}`}
                className="grid grid-cols-[90px_1fr] gap-4 hover:-translate-y-1 hover:scale-105"
              >
                <div className="h-[80px] rounded-xl overflow-hidden">
                  <img src={image} alt={title} />
                </div>
                <div className="flex flex-col text-sm">
                  <h5 className="line-clamp-2">{title}</h5>
                  <time className="opacity-75">
                    {moment(sentDate).format('D MMMM YYYY')}
                  </time>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </CategorySectionContainer>
  )
}
