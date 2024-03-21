import ImgSlider from '~/pages/estate/estateItem/imgSlider/index.jsx'
import Actions from '~/pages/estate/estateItem/actions/index.jsx'
import ShortInfo from '~/pages/estate/estateItem/shortInfo/index.jsx'
import InfrastructureInfo from '~/pages/estate/estateItem/infrastructureInfo/index.jsx'
import NavigateLinks from '~/pages/estate/estateItem/navigateLinks/index.jsx'
import { FaDownload } from 'react-icons/fa6'
import { TfiPrinter } from 'react-icons/tfi'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import PropTypes from 'prop-types'

export default function EstateInfo({ setIsLoading }) {
  const [estateItem, setEstateItem] = useState(null)
  const [imageIndex, setImageIndex] = useState(0)

  const { id } = useParams()

  useEffect(() => {
    const fetchEstateItem = async () => {
      try {
        setIsLoading(true)

        const response = await axios.get(
          `https://kinaci-server.onrender.com/data/estates/${id}`,
        )
        setIsLoading(false)
        setEstateItem(response.data)
      } catch (err) {
        console.warn(err)
      }
    }
    fetchEstateItem()
  }, [id])
  function handlePrint() {
    const sectionToPrint = document.getElementById('printed-section') // Replace with your ID
    sectionToPrint.focus() // Focus the element for better printing behavior
    window.print()
  }
  return (
    <section>
      <div className="container">
        <div id="printed-section" className="grid grid-cols-[8fr_4fr]">
          <div className="grid gap-3 text-blue-900">
            <div className="header">
              <h2 className="text-5xl font-semibold">{estateItem?.title}</h2>
              <p className="text-md">
                {estateItem?.location.city}{' '}
                {estateItem?.location.place && `/${estateItem?.location.place}`}
              </p>
            </div>
            <div className="rounded-xl bg-white shadow-section">
              <ImgSlider
                estateItem={estateItem}
                imageIndex={imageIndex}
                setImageIndex={setImageIndex}
              />
              <div className="body px-8">
                <Actions />
                <ShortInfo estateItem={estateItem} />
                <InfrastructureInfo estateItem={estateItem} />
                <NavigateLinks />
                <div className="estate-description text-blue-900 grid gap-5 whitespace-pre-wrap leading-[200%]">
                  <h2 className="text-5xl">Şərh</h2>
                  {estateItem?.description}
                </div>
                <div className="print-hidden py-8 text-md flex justify-center gap-8">
                  <a
                    href="#"
                    className={`rounded-xl px-12 py-4 border hover:text-white hover:bg-orange-500 border-orange-500 text-orange-500`}
                  >
                    <span className="inline-flex items-center gap-2">
                      <span className="size-4">
                        <FaDownload />
                      </span>
                      PDF yüklə
                    </span>
                  </a>

                  <button
                    className={`rounded-xl px-12 py-4 border hover:text-white hover:bg-orange-500 border-orange-500 text-orange-500`}
                    onClick={handlePrint}
                  >
                    <span className="inline-flex items-center gap-2">
                      <span className="size-4">
                        <TfiPrinter />
                      </span>
                      Çap et
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>salam</div>
        </div>
      </div>
    </section>
  )
}

EstateInfo.propTypes = {
  setIsLoading: PropTypes.func