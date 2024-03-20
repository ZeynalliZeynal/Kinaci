import Lottie from 'react-lottie'
import animationData from '~/assets/icon/loading.json'

const defaultOptions = {
  loop: true, // Set to true for continuous looping
  autoplay: true, // Set to true for automatic playback
  animationData, // Import your animation data
}

export default function Loader() {
  return (
    <section className="size-[250px] grid justify-center w-full pointer-events-none">
      <Lottie options={defaultOptions} />
    </section>
  )
}
