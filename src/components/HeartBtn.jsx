import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '~/redux/features/addToFav/addToFavSlice.js'
import { ImHeart, ImHeartBroken } from 'react-icons/im'

export default function HeartBtn({ estate }) {
  const [isActive, setIsActive] = useState(false)
  const addedItems = useSelector((state) => state.addToFav.addedItems)

  const addedItem = addedItems.find((item) => item.id === estate?.id)
  const isAdded = estate?.id === addedItem?.id
  const dispatch = useDispatch()

  return (
    <button
      className={`w-full ${isAdded ? 'text-red-600' : 'text-white'}`}
      onClick={() => dispatch(addItem(estate))}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onBlur={() => setIsActive(false)}
    >
      {!isActive && isAdded ? (
        <ImHeart />
      ) : isActive && isAdded ? (
        <ImHeartBroken />
      ) : (
        <ImHeart />
      )}
    </button>
  )
}
