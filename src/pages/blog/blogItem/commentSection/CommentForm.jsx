import DefaultInput from '~/components/loginForm/DefaultInput.jsx'
import DefaultCheckbox from '~/components/DefaultCheckbox.jsx'
import { DefaultTextarea } from '~/components/DefaultTextarea.jsx'
import { initialState } from '~/reducers/commentsReducer.js'
import axios from 'axios'
import { baseURL } from '~/data/consts.js'
import { useState } from 'react'

export default function CommentForm({
  blog,
  values,
  dispatch,
  comments,
  isChecked,
  countSymbols,
}) {
  const [isLoading, setIsLoading] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setIsLoading(true)
      const newComment = {
        image:
          'https://www.its.ac.id/international/wp-content/uploads/sites/66/2020/02/blank-profile-picture-973460_1280.jpg',
        name: values.name.trim(),
        date: new Date().toISOString(),
        email: values.email.trim(),
        comment: values.comment.trim(),
        replies: [],
      }
      const res = await axios.post(
        `${baseURL}/data/blogs/${blog?.id}/comments`,
        newComment,
      )
      setIsLoading(false)
      dispatch({ type: 'SET_COMMENTS', payload: [...comments, res.data] })

      dispatch({
        type: 'RESET_VALUES',
      })

      if (isChecked)
        dispatch({
          type: 'SAVE_LOCAL_STORAGE',
          payload: { ...values, comment: '' },
        })
      else
        dispatch({
          type: 'REMOVE_LOCAL_STORAGE',
        })
    } catch (error) {
      console.error('Error adding comment:', error)
    }
  }

  return (
    <form className="text-sm" onSubmit={handleSubmit}>
      <div className="space-y-2.5">
        <div className="flex gap-[30px]">
          <label htmlFor="name" className="flex-1 font-medium">
            Ad
            <DefaultInput
              type="text"
              name="name"
              value={values.name}
              handleChange={(e) => {
                dispatch({
                  type: 'SET_VALUES',
                  payload: { name: e },
                })
              }}
              placeholder="Adınızı daxil edin"
            />
          </label>
          <label htmlFor="email" className="flex-1 font-medium">
            Email
            <DefaultInput
              type="email"
              name="email"
              value={values.email}
              handleChange={(e) =>
                dispatch({
                  type: 'SET_VALUES',
                  payload: { email: e },
                })
              }
              placeholder="Emailinizi daxil edin"
            />
          </label>
        </div>
        <div className="flex flex-col md:flex-row gap-2.5">
          <DefaultCheckbox
            isChecked={isChecked}
            setIsChecked={() => dispatch({ type: 'IS_CHECKED' })}
          />
          <p>
            Növbəti dəfə şərh yazmaq üçün adım və e-poçtumu bu brauzerdə yadda
            saxla.
          </p>
        </div>
        <div>
          <label htmlFor="comment" className="flex-1 font-medium">
            Şərh
            <DefaultTextarea
              name="comment"
              value={values.comment}
              handleChange={(e) => {
                if (e.length <= initialState.countSymbols) {
                  dispatch({
                    type: 'SET_VALUES',
                    payload: { comment: e },
                  })
                  dispatch({ type: 'COUNT_SYMBOLS', payload: e.length })
                }
              }}
              placeholder="Şərh əlavə et"
            />
          </label>
          <span className="text-xs w-full text-end text-blue-900/60">
            {countSymbols === 0 ? 'Limit reached' : countSymbols}{' '}
            {countSymbols !== 0 && `/ ${initialState.countSymbols}`}
          </span>
        </div>
      </div>
      <button
        type={'submit'}
        className={`select-none px-[30px] py-3 rounded-lg border-2 border-blue-900 bg-white text-md font-semibold hover:bg-blue-900 hover:text-white mt-[30px] ${!values.comment ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}
        disabled={!values.comment || isLoading}
      >
        {!values.comment || !values.name || !values.email
          ? 'Formu doldur'
          : isLoading
            ? 'Göndərilir...'
            : 'Şərhi Göndər'}
      </button>
    </form>
  )
}
