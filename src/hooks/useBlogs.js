import { useEffect } from 'react'
import axios from 'axios'
import { baseURL } from '~/data/consts.js'
import { useSearchParams } from 'react-router-dom'

export const useBlogs = (dispatch) => {
  const [searchParams] = useSearchParams()
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        dispatch({ type: 'SET_LOADING' })
        const res = await axios.get(`${baseURL}/data/blogs`)
        const data = res.data

        const filteredData = data.filter((blog) => {
          return (
            (searchParams.get('blogTitle') === null ||
              blog.title
                .toLowerCase()
                .includes(searchParams.get('blogTitle').toLowerCase())) &&
            (searchParams.get('blogTags') === null ||
              blog.tags.some((tag) =>
                searchParams
                  .get('blogTags')
                  .toLowerCase()
                  .includes(tag.toLowerCase()),
              ))
          )
        })
        dispatch({ type: 'SET_TOTAL_ITEMS', payload: filteredData.length })
        dispatch({ type: 'SET_LOADING' })
        dispatch({ type: 'SET_BLOGS', payload: filteredData })

        const uniqueTags = Array.from(
          new Set(data.flatMap((blog) => blog.tags)),
        )
        dispatch({ type: 'SET_TAGS', payload: uniqueTags })
      } catch (err) {
        console.warn(err)
      }
    }
    fetchBlogs()
  }, [searchParams])
}
