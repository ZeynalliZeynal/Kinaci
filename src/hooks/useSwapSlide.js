import { useState } from 'react'

export const useSwapSlide = (length) => {
  const [imageIndex, setImageIndex] = useState(0)
  const handleNext = () => {
    setImageIndex((prevState) =>
      imageIndex < length - 1 ? prevState + 1 : (prevState = 0),
    )
  }
  const handlePrev = () => {
    setImageIndex((prevState) =>
      imageIndex > 0 ? prevState - 1 : (prevState = length - 1),
    )
  }

  return [handlePrev, handleNext, imageIndex, setImageIndex]
}
