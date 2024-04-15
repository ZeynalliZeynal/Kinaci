import { useEffect, useReducer, useState } from 'react'
import axios from 'axios'
import CommentSkeleton from '~/pages/comments/CommentSkeleton.jsx'
import CommentCard from '~/pages/comments/CommentCard.jsx'
import PaginationButtons from '~/pages/comments/PaginationButtons.jsx'

const url = 'https://kinaci-server.onrender.com/data/comments'

const initialState = {
  comments: [],
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_COMMENTS':
      return {
        ...state,
        comments: action.payload.map((comment) => ({
          ...comment,
          isExpanded: false,
        })),
      }
    case 'TOGGLE_COMMENT':
      return {
        ...state,
        comments: state.comments.map((comment) =>
          comment.id === action.payload
            ? { ...comment, isExpanded: !comment.isExpanded }
            : comment,
        ),
      }
    case 'COLLAPSE_ALL':
      return {
        ...state,
        comments: state.comments.map((comment) => ({
          ...comment,
          isExpanded: false,
        })),
      }
  }
}
export default function Comment() {
  const [isLoading, setIsLoading] = useState(false)
  const [{ comments }, dispatch] = useReducer(reducer, initialState)

  const [currentPage, setCurrentPage] = useState(1)
  const commentsPerPage = 4

  const indexOfLastComment = currentPage * commentsPerPage
  const indexOfFirstComment = indexOfLastComment - commentsPerPage
  const currentComments = comments.slice(
    indexOfFirstComment,
    indexOfLastComment,
  )

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const handleToggleExpand = (commentId) => {
    // dispatch({ type: 'COLLAPSE_ALL' })
    dispatch({ type: 'TOGGLE_COMMENT', payload: commentId })
  }

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
    <>
      {isLoading ? (
        <CommentSkeleton />
      ) : (
        <div className="grid gap-8">
          <CommentCard
            comments={currentComments}
            onToggleExpand={handleToggleExpand}
          />
          <PaginationButtons
            commentsPerPage={commentsPerPage}
            totalComments={comments.length}
            paginate={paginate}
          />
        </div>
      )}
    </>
  )
}
