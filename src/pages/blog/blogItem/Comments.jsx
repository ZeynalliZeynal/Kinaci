import moment from 'moment'
import 'moment/locale/az.js'
import DefaultInput from '~/components/loginForm/DefaultInput.jsx'
import { useEffect, useReducer } from 'react'
import DefaultCheckbox from '~/components/DefaultCheckbox.jsx'
import { DefaultTextarea } from '~/components/DefaultTextarea.jsx'
import axios from 'axios'
import { baseURL } from '~/data/consts.js'

const initialState = {
  values: {
    name: '',
    email: '',
    comment: '',
  },
  comments: [],
  isChecked: false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_VALUES':
      return { ...state, values: { ...state.values, ...action.payload } }
    case 'IS_CHECKED':
      return { ...state, isChecked: !state.isChecked }
    case 'SET_COMMENTS':
      return { ...state, comments: action.payload }
    case 'RESET_VALUES':
      return { ...initialState, comments: state.comments }
  }
}

export default function CommentsSection({ blog }) {
  const [{ values, isChecked, comments }, dispatch] = useReducer(
    reducer,
    initialState,
  )

  moment.locale('az')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const blogId = blog?.id
      const newComment = {
        image:
          'https://www.its.ac.id/international/wp-content/uploads/sites/66/2020/02/blank-profile-picture-973460_1280.jpg',
        name: values.name,
        date: new Date().toISOString(),
        email: values.email,
        comment: values.comment,
        replies: null,
      }
      const res = await axios.post(
        `${baseURL}/data/blogs/${blogId}/comments`,
        newComment,
      )
      dispatch({ type: 'SET_COMMENTS', payload: [...comments, res.data] })

      dispatch({
        type: 'RESET_VALUES',
      })
    } catch (error) {
      console.error('Error adding comment:', error)
    }
  }

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const blogId = blog?.id
        if (!blogId) return false
        const res = await axios.get(`${baseURL}/data/blogs/${blogId}/comments`)
        dispatch({ type: 'SET_COMMENTS', payload: res.data })
      } catch (error) {
        console.error('Error fetching comments:', error)
      }
    }

    fetchComments()
  }, [blog])

  return (
    <section>
      <div className="container">
        <h3 className="text-lg font-semibold mb-4">
          {comments.length ? `${comments.length} Şərh` : 'Şərh yoxdur'}
        </h3>
        {comments.length > 0 && (
          <div className="grid">
            <ul className="grid justify-start divide-y divide-gray-200">
              {comments.map(({ id, image, name, date, comment, replies }) => (
                <li key={id} className="w-full gap-4 grid grid-cols-1 py-4">
                  <div className="flex w-full justify-between items-end">
                    <div className="flex gap-5">
                      <span className="size-[70px] rounded-full overflow-hidden">
                        <img src={image} alt={name} />
                      </span>
                      <div className="grid place-content-between py-1">
                        <h4 className="text-md font-semibold">{name}</h4>
                        <time className="text-xs">
                          {moment(date).format('LLL')}
                        </time>
                      </div>
                    </div>
                    <button className="h-fit rounded-lg text-xs font-semibold text-blue-500 items-end hover:bg-blue-500/15 py-1 px-2">
                      Cavab ver
                    </button>
                  </div>
                  <p className="text-sm">{comment}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="grid border-t-2 border-gray-200 pt-7">
          <h3 className="text-lg font-semibold mb-5">Şərh yaz</h3>
          <form className="text-sm" onSubmit={handleSubmit}>
            <div className="space-y-2.5">
              <div className="flex gap-[30px]">
                <label htmlFor="name" className="flex-1 font-medium">
                  Ad
                  <DefaultInput
                    type="text"
                    name="name"
                    value={values.name}
                    handleChange={(e) =>
                      dispatch({ type: 'SET_VALUES', payload: { name: e } })
                    }
                    placeholder="Adınızı daxil edin"
                  />
                </label>
                <label htmlFor="email" className="flex-1 font-medium">
                  Email
                  <DefaultInput
                    type="email"
                    name="email"
                    handleChange={(e) =>
                      dispatch({ type: 'SET_VALUES', payload: { email: e } })
                    }
                    placeholder="Emailinizi daxil edin"
                  />
                </label>
              </div>
              <div className="flex gap-2.5">
                <DefaultCheckbox
                  isChecked={isChecked}
                  setIsChecked={() => dispatch({ type: 'IS_CHECKED' })}
                />
                <p>
                  Növbəti dəfə şərh yazmaq üçün adım və e-poçtumu bu brauzerdə
                  yadda saxla.
                </p>
              </div>
              <div>
                <label htmlFor="comment" className="flex-1 font-medium">
                  Şərh
                  <DefaultTextarea
                    name="comment"
                    value={values.comment}
                    handleChange={(e) =>
                      dispatch({ type: 'SET_VALUES', payload: { comment: e } })
                    }
                    placeholder="Şərh əlavə et"
                  />
                </label>
              </div>
            </div>
            <button
              type={'submit'}
              className={`select-none px-[30px] py-3 rounded-lg border-2 border-blue-900 bg-white text-md font-semibold hover:bg-blue-900 hover:text-white mt-[30px] ${!values.comment ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}
              disabled={!values.comment}
            >
              Şərhi Göndər
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
