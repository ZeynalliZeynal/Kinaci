import EstateInfo from '~/pages/estate/estateItem/estateInfo/index.jsx';
import Search from '~/components/search';
import SendRequestForm from '~/features/auth/SendRequestForm.jsx';

export default function EstateItem() {
  return (
    <main className="bg-gray-100 pb-8">
      <section className="print-hidden bg-blue-900 py-6">
        <Search />
      </section>
      <EstateInfo />
      <SendRequestForm />
    </main>
  );
}
