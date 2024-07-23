import { useState } from 'react';
import LoginForm from '~/components/loginForm/index.jsx';
import { adminInfo } from '~/data/adminInfo/index.jsx';
import { Link } from 'react-router-dom';

export default function NavigateLinks() {
  const [isOpen, setIsOpen] = useState(false);

  function handleModal() {
    setIsOpen((prev) => !prev);
  }

  return (
    <>
      {isOpen && <LoginForm isOpen={isOpen} closeModal={handleModal} />}
      <div className="print-hidden grid grid-cols-2 gap-4 text-white text-sm font-semibold mt-9 mb-8">
        <a
          href={`tel:${adminInfo.tel}`}
          className="rounded-button py-6 bg-blue-700 w-full"
        >
          Onlayn Baxış
        </a>
        <Link
          to="/services/onlineTour"
          className="rounded-button py-6 w-full bg-blue-900"
        >
          Pulsuz tur
        </Link>
      </div>
    </>
  );
}
