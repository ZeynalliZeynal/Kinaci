import Lottie from 'lottie-react'
import animationData from '~/assets/img/loading-circle.json'

export default function LoaderCircular() {
  return (
    <span>
      <Lottie animationData={animationData} />
    </span>
  )
}
