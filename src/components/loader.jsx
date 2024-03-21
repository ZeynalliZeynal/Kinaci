import Lottie from 'react-lottie'
import animationData from '~/assets/img/loading.gif'

const defaultOptions = {
  loop: true, // Set to true for continuous looping
  autoplay: true, // Set to true for automatic playback
  animationData, // Import your animation data
}

export default function Loader() {
  return (
    <section className="size-[500px] grid justify-center w-full pointer-events-none">
      <img src={animationData} alt="Loading" />
      <Lottie options={defaultOptions} />
    </section>
  )
}
