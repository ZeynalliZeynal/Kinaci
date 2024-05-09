import Search from '~/components/search/index.jsx';
import { useEffect } from 'react';
import ContactLocation from '~/pages/contact/ContactLocation.jsx';

export default function Contact() {
  useEffect(() => {
    document.title = 'Kinaci - Əlaqə';
  }, []);

  return (
    <main>
      <section>
        <Search />
      </section>
      <ContactLocation />
    </main>
  );
}
