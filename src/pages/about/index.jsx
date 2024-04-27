import Search from '~/components/search/index.jsx'
import { useEffect } from 'react'
import InfoSection from './InfoSection'
import StatisticsSection from './StatisticsSection'
import OurCrew from './OurCrew'
import VideoSection from './VideoSection'
import Certificates from './Certificates'
import FormSection from './FormSection'
import { useScrollTop } from '~/hooks/useScrollTop.js'

export default function About() {
  useScrollTop()
  useEffect(() => {
    document.title = 'Kinaci - Şirkət haqqında'
  }, [])
  return (
    <main>
      <section className="bg-orange-50">
        <Search />
      </section>
      <section className="hidden md:block w-full img-banner h-[490px]" />
      <InfoSection />
      <StatisticsSection />
      <OurCrew />
      <VideoSection />
      <Certificates />
      <FormSection />
    </main>
  )
}
