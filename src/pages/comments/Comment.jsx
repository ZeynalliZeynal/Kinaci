import { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import CommentSkeleton from '~/pages/comments/CommentSkeleton.jsx';
import CommentCard from '~/pages/comments/CommentCard.jsx';
import PaginationButtons from '~/pages/comments/PaginationButtons.jsx';
import { usePagePagination } from '~/hooks/usePagePagination.js';
import { baseURL } from '~/data/consts.js';

const initialState = {
  comments: [],
  expandedComment: -1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_COMMENTS':
      return {
        ...state,
        comments: action.payload,
      };
    case 'TOGGLE_COMMENT':
      return {
        ...state,
        expandedComment: action.payload,
      };
    case 'CLOSE_COMMENT':
      return {
        ...state,
        expandedComment: -1,
      };
    default:
      return state;
  }
};
export default function Comment() {
  const [isLoading, setIsLoading] = useState(false);
  const [{ comments, expandedComment }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  const itemsPerPage = 4;

  const [currentItems, pageNumbers, paginate] = usePagePagination(
    comments,
    itemsPerPage,
  );

  const handleToggleExpand = (commentId) => {
    if (commentId === expandedComment) dispatch({ type: 'CLOSE_COMMENT' });
    else dispatch({ type: 'TOGGLE_COMMENT', payload: commentId });
  };

  useEffect(() => {
    const fetchComments = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(`${baseURL}/data/comments`);
        const data = res.data;
        dispatch({ type: 'SET_COMMENTS', payload: data });
      } catch (err) {
        console.warn(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchComments();
  }, []);

  return (
    <>
      {isLoading ? (
        <CommentSkeleton />
      ) : (
        <div className="grid gap-8">
          <CommentCard
            comments={currentItems}
            expanded={expandedComment}
            onToggleExpand={handleToggleExpand}
          />
          <PaginationButtons pageNumbers={pageNumbers} paginate={paginate} />
        </div>
      )}
    </>
  );
}
