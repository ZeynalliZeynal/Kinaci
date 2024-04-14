import Search from '~/components/search/index.jsx'
import { useEffect } from 'react'
import InfoSection from '~/pages/about/InfoSection.jsx'
import StatisticsSection from '~/pages/about/StatisticsSection.jsx'
import OurCrew from '~/pages/about/OurCrew.jsx'
import VideoSection from '~/pages/about/VideoSection.jsx'
import Certificates from '~/pages/about/Certificates.jsx'
import FormSection from '~/pages/about/FormSection.jsx'

export default function About() {
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
