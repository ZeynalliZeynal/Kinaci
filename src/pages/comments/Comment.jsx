import { useEffect, useReducer, useState } from 'react'
import axios from 'axios'

const url = 'https://kinaci-server.onrender.com/data/comments'

const initialState = {
  comments: [],
  isExpanded: false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_COMMENTS':
      return { ...state, comments: action.payload }
  }
}
export default function Comment() {
  const [isLoading, setIsLoading] = useState(false)
  const [{ comments, isExpanded }, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    const fetchComments = async () => {
      try {
        setIsLoading(true)
        const res = await axios.get(url)
        const data = await res.data
        dispatch({ type: 'SET_COMMENTS', payload: data })
      } catch (err) {
        console.warn(err)
      } finally {
        setIsLoading(false)
      }
    }
    fetchComments()
  }, [])
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
      {comments?.map((comment) => (
        <div
          className="grid grid-cols-[160px_1fr] gap-6 shadow-comments rounded-xl p-[30px]"
          key={comment.id}
        >
          <div>
            <span className="rounded-full bg-blue-900/10 p-6">
              <img src={comment.img} alt={comment.name} />
            </span>
          </div>
          <div className="flex flex-col gap-8 text-blue-900 items-start">
            <div>
              <h4 className="font-semibold">{comment.name}</h4>
              {comment.jobStatus && (
                <p className="text-orange-500 text-sm">{comment.jobStatus}</p>
              )}
            </div>
            <p className="text-sm">{comment.comment}</p>
            <button
              className={`text-sm font-medium ${isExpanded ? 'text-white' : 'text-blue-500'}`}
            >
              {isExpanded ? 'Daralt' : 'Genişlət'}
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
