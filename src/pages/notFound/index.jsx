import { useEffect } from 'react';
import notFound from '~/assets/img/404-page.json';
import logo from '~/assets/img/logo.svg';
import bg from '~/assets/img/not-found-bg.jpg';
import Lottie from 'lottie-react';
import { IoIosReturnLeft } from 'react-icons/io';
import { Link } from 'react-router-dom';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Kinaci - 404';
  }, []);
  return (
    <main
      className="min-h-screen relative after:absolute after:z-10 after:inset-0 after:backdrop-blur-sm"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <section className="relative z-20">
        <div className="container">
          <div className="flex flex-col justify-between gap-10 bg-white/70 p-10 rounded-xl">
            <Link to="/" className="w-[300px]">
              <img src={logo} alt="Kinaci" />
            </Link>
            <div className="text-6xl font-semibold text-center">
              Axtardığınız səhifə tapılmadı
            </div>
            <div className="w-[400px] mx-auto">
              <Lottie animationData={notFound} />
            </div>
            <div className="w-fit mx-auto">
              <Link
                to="/"
                className="bg-orange-500 text-white hover:bg-orange-600 py-3 px-8 rounded-selectBtn w-full font-semibold gap-3"
              >
                <span className="size-6">
                  <IoIosReturnLeft />
                </span>
                Ana səhifəyə qayıt
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
