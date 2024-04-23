import { GoChevronLeft, GoChevronRight } from 'react-icons/go'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { baseURL } from '~/data/consts.js'

export default function OtherBlogs({ blog }) {
  const [blogs, setBlogs] = useState([])
  const [indexOfCurrentBlog, setIndexOfCurrentBlog] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [blog?.id])
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${baseURL}/data/blogs`)
        const data = res.data
        setIsLoading(false)
        setBlogs(data)
        const index = data.findIndex((b) => b.id === blog?.id)
        setIndexOfCurrentBlog(index !== -1 ? index : 0)
      } catch (err) {
        console.warn(err)
      }
    }

    fetchBlogs()
  }, [blog])

  const nextBlog =
    indexOfCurrentBlog + 1 < blogs.length ? blogs[indexOfCurrentBlog + 1] : null
  const prevBlog =
    indexOfCurrentBlog - 1 >= 0 ? blogs[indexOfCurrentBlog - 1] : null
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-[30px] items-center pb-[54px] border-b-2 border-gray-200">
          <div>
            <span className="overflow-hidden rounded-full h-20 md:h-auto">
              <img src={blog?.senderPhoto} alt={blog?.sentBy} />
            </span>
          </div>
          <div className="grid">
            <h4 className="text-md font-semibold">{blog?.sentBy}</h4>
            <p className="text-sm">{blog?.senderInfo}</p>
          </div>
        </div>
        <div className="flex justify-between py-[54px] border-b-2 border-gray-200">
          {prevBlog && (
            <button
              className="grid gap-3 group"
              onClick={() => {
                setIsLoading(true)
                !isLoading && navigate(`/blog/${prevBlog?.id}`)
              }}
            >
              <span className="flex items-center">
                <span className="size-4 group-hover:-translate-x-1 transition">
                  <GoChevronLeft />
                </span>
                <span
                  className={`text-md font-semibold px-2 py-1 ${isLoading ? 'text-red-600 bg-red-600/10 rounded-lg' : ''}`}
                >
                  {isLoading ? 'Məqalə yüklənir...' : 'Əvvəlki Məqalə'}
                </span>
              </span>
              <p className="text-xs">
                {prevBlog?.title.split(' ').slice(0, 3).join(' ') + '...'}
              </p>
            </button>
          )}{' '}
          {nextBlog && (
            <button
              onClick={() => {
                setIsLoading(true)
                !isLoading && navigate(`/blog/${nextBlog?.id}`)
              }}
              className="grid gap-3 group"
            >
              <span className="flex items-center">
                <span
                  className={`text-md font-semibold px-2 py-1 ${isLoading ? 'text-red-600 bg-red-600/10 rounded-lg' : ''}`}
                >
                  {isLoading ? 'Məqalə yüklənir...' : 'Sonrakı Məqalə'}
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
  )
}
