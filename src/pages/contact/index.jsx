import Search from '~/components/search/index.jsx';
import { useEffect } from 'react';
import ContactLocation from '~/pages/contact/ContactLocation.jsx';
import VisitOffice from './VisitOffice';
import ContactSlider from './ContactSlider';
import BankInfo from './BankInfo';



export default function Contact() {
  useEffect(() => {
    document.title = 'Kinaci - Əlaqə';
  }, []);

  return (
    <main className="text-blue-900">
      <section className="bg-orange-50">
        <Search />
      </section>
      <ContactLocation />
      <VisitOffice />
      <ContactSlider />
      <BankInfo />
    </main>
  );
}
