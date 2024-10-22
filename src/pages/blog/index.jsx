import Search from '~/components/search/index.jsx';
import { useEffect } from 'react';
import Blogs from '~/features/blogs/index.jsx';

export default function Blog() {
  useEffect(() => {
    document.title = 'Kinaci - Bloq';
  }, []);
  return (
    <main>
      <section className="bg-orange-50">
        <Search />
      </section>
      <Blogs />
    </main>
  );
}
