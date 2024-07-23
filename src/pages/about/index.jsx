import Search from '~/components/search/index.jsx';
import { useEffect } from 'react';
import InfoSection from './InfoSection';
import StatisticsSection from '../../features/stats/StatisticsSection.jsx';
import OurCrew from '../../features/crew/OurCrew.jsx';
import VideoSection from './VideoSection';
import Certificates from '../../features/certificates/Certificates.jsx';
import { useScrollToRef } from '~/hooks/useScrollTo.js';
import FormSection from '~/features/auth/FormSection.jsx';

export default function About() {
  const ref = useScrollToRef();
  useEffect(() => {
    document.title = 'Kinaci - Şirkət haqqında';
  }, []);
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
  );
}
