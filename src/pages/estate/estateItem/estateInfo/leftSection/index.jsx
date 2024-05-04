import ImgSlider from '~/pages/estate/estateItem/imgSlider/index.jsx'
import Actions from '~/redux/features/addToFav/actions/index.jsx'
import ShortInfo from '~/pages/estate/estateItem/shortInfo/index.jsx'
import InfrastructureInfo from '~/pages/estate/estateItem/infrastructureInfo/index.jsx'
import NavigateLinks from '~/pages/estate/estateItem/navigateLinks/index.jsx'
import DownloadBtns from '~/pages/estate/estateItem/downloadBtns/index.jsx'

export default function LeftSection({ estateItem }) {
  return (
    <div className="grid gap-3 text-blue-900 px-2">
      <div className="rounded-xl bg-white shadow-section">
        <ImgSlider estateItem={estateItem} />
        <div className="body px-8">
          <Actions estate={estateItem} />
          <ShortInfo estateItem={estateItem} />{' '}
          {estateItem?.facility_infrastructure && (
            <InfrastructureInfo estateItem={estateItem} />
          )}
          <div className="md:block hidden">
            <NavigateLinks />
          </div>
          <div className="estate-description text-blue-900 mt-5 grid gap-5 whitespace-pre-wrap leading-[200%]">
            <h2 className="text-5xl">Şərh</h2>
            {estateItem?.description} <DownloadBtns />
          </div>
        </div>
      </div>
    </div>
  )
}
