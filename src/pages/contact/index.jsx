import Search from '~/components/search/index.jsx';
import { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    document.title = 'Kinaci - Əlaqə';
  }, []);

  return (
    <main>
      <section>
        <Search />
      </section>
    </main>
  );
}
