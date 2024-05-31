import Lottie from 'lottie-react';
import ad from '~/assets/img/page-loading.json';

const FullPageLoading = () => {
  return (
    <div className="w-screen h-screen grid place-content-center text-xxl">
      <div>
        <Lottie animationData={ad} />
      </div>
      Səbirli olun. Səhifə yüklənir.
    </div>
  );
};

export default FullPageLoading;
