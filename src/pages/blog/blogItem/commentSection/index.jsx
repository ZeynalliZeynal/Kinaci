import moment from 'moment';
import 'moment/locale/az.js';
import { useEffect, useReducer } from 'react';
import axios from 'axios';
import { baseURL } from '~/data/consts';
import { initialState, reducer } from '~/reducers/commentsReducer';
import BlogComment from '../commentSection/BlogComment';
import CommentForm from '../../../../redux/features/auth/CommentForm.jsx';

export default function CommentSection({ blog }) {
  const [{ values, isChecked, comments, countSymbols }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  moment.locale('az');

  useEffect(() => {
    const storedValues = localStorage.getItem('commentValues');
    if (storedValues) {
      const { name, email } = JSON.parse(storedValues);
      dispatch({
        type: 'SET_VALUES',
        payload: { name, email },
      });
    }
  }, [comments]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const blogId = blog?.id;
        if (!blogId) return false;
        const res = await axios.get(`${baseURL}/data/blogs/${blogId}/comments`);
        dispatch({ type: 'SET_COMMENTS', payload: res.data });
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [blog]);

  useEffect(() => {
    document.title = `Kinaci Bloq - ${blog?.id}`;
  }, [blog?.id]);

  return (
    <section>
      <div className="container">
        <h3 className="text-lg font-semibold mb-4">
          {comments.length > 0 ? `${comments.length} Şərh` : 'Şərh yoxdur'}
        </h3>
        <BlogComment
          comments={comments}
          blogId={blog?.id}
          dispatch={dispatch}
        />
        <div className="grid border-t-2 border-gray-200 pt-7">
          <h3 className="text-lg font-semibold mb-5">Şərh yaz</h3>
          <CommentForm
            blog={blog}
            values={values}
            dispatch={dispatch}
            comments={comments}
            isChecked={isChecked}
            countSymbols={countSymbols}
          />
        </div>
      </div>
    </section>
  );
}
