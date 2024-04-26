import { Link } from 'react-router-dom'
import moment from 'moment/moment.js'
import PaginationButtons from '~/pages/comments/PaginationButtons.jsx'

export default function BlogsList({ currentItems, pageNumbers, paginate }) {
  return (
    <div className="grid w-full xl:w-[770px] order-2 xl:order-1 gap-[30px]">
      {currentItems.map(({ id, title, tags, image, description, sentDate }) => (
        <Link
          to={`/blog/${id}`}
          key={id}
          className="rounded-xl shadow-blogs overflow-hidden block"
        >
          <div className="relative">
            <div className="h-[450px]">
              <img src={image} alt={title} />
            </div>
            <time className="shadow-date absolute -bottom-[35px] right-[35px] size-[70px] bg-white rounded-xl grid justify-center place-content-center text-center">
              <span className="text-xs">{moment(sentDate).format('MMMM')}</span>
              <span className="text-3xl font-semibold">
                {moment(sentDate).format('DD')}
              </span>
            </time>
          </div>
          <div className="px-[30px] py-5 space-y-4">
            <p className="text-xs text-blue-900/70">
              {tags.map((tag, i) => (i === tags.length - 1 ? tag : tag + ', '))}
            </p>
            <h3 className="text-3xl font-semibold">{title}</h3>
            <p className="text-sm line-clamp-2">{description}</p>
          </div>
        </Link>
      ))}{' '}
      <PaginationButtons pageNumbers={pageNumbers} paginate={paginate} />
    </div>
  )
}
