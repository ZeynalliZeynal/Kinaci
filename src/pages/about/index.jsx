import Search from '~/components/search/index.jsx'
import { useEffect } from 'react'
import InfoSection from './InfoSection'
import StatisticsSection from './StatisticsSection'
import OurCrew from './OurCrew'
import VideoSection from './VideoSection'
import Certificates from './Certificates'
import FormSection from '../../redux/features/auth/FormSection.jsx'
import { useScrollToRef } from '~/hooks/useScrollTo.js'

export default function About() {
  const ref = useScrollToRef()
  useEffect(() => {
    document.title = 'Kinaci - Şirkət haqqında'
  }, [])
  return (
    <main>
      <section className="bg-orange-50">
        <Search />
      </section>
      <section
        ref={ref}
        className="hidden md:block w-full img-banner h-[490px]"
      />
      <InfoSection />
      <StatisticsSection />
      <OurCrew />
      <VideoSection />
      <Certificates />
      <FormSection />
    </main>
  )
}
