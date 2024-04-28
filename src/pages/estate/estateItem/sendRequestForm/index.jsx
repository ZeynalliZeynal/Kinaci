import { useEffect, useState } from 'react'
import axios from 'axios'
import DefaultInput from '~/components/loginForm/DefaultInput.jsx'
import SelectContainer from '~/components/search/searchBar/selectContainer'
import DefaultCheckbox from '~/components/DefaultCheckbox.jsx'
import { DefaultTextarea } from '~/components/DefaultTextarea.jsx'
import { baseURL } from '~/data/consts.js'

export default function SendRequestForm() {
  const [isChecked, setIsChecked] = useState(false)
  const [estateTypes, setEstateTypes] = useState([])
  const [estateTypesValue, setEstateTypesValue] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${baseURL}/data/selectInfo`)
      const data = await res.data
      setEstateTypes(data.estateTypes)
    }
    fetchData()
  }, [])
  return (
    <section className="print-hidden">
      <div className="container">
        <form className="px-12 lg:px-[200px] md:px-[100px] py-12 rounded-xl shadow-section bg-white text-blue-900">
          <h3 className="w-full text-4xl font-semibold text-start sm:text-center">
            Ərizənizi Göndərin
          </h3>
          <div className="grid grid-cols-1 gap-5 py-8 text-xs md:grid-cols-2">
            <div className="grid gap-5">
              <div>
                <label htmlFor="fullName" className="mb-3 inline-block">
                  Ad & Soyad
                </label>
                <DefaultInput
                  type="text"
                  name="fullName"
                  placeholder="Ad və soyadınızı daxil edin..."
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-3 inline-block">
                  E-mail
                </label>
                <DefaultInput
                  type="email"
                  name="email"
                  placeholder="E-mailinizi daxil edin..."
                />
              </div>
              <div>
                <label htmlFor="tel" className="mb-3 inline-block">
                  Telefon
                </label>
                <DefaultInput
                  type="tel"
                  name="tel"
                  placeholder="Telefon nömrənizi daxil edin..."
                />
              </div>
            </div>
            <div className="grid gap-5">
              <div>
                <SelectContainer
                  label="Hansı Əmlak növü ilə maraqlanırsınız?"
                  options={estateTypes}
                  value={estateTypesValue}
                  setValue={setEstateTypesValue}
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-3 inline-block">
                  Mesajınız
                </label>
                <DefaultTextarea
                  name="message"
                  placeholder="Mesajınızı yazın..."
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-[20px_1fr] gap-1.5 justify-start items-center">
            <DefaultCheckbox
              isChecked={isChecked}
              setIsChecked={() => setIsChecked((prevState) => !prevState)}
            />
            <span className="text-xs sm:text-sm">
              Müraciət və ərizə ilə bağlı{' '}
              <a href="#" className="text-[#2d68a0]">
                Şəxsi məlumatların işlənməsi haqqında
              </a>
            </span>
          </div>
          <button
            type="submit"
            className={`w-full bg-orange-500 shadow-button py-4 rounded-xl text-white text-sm font-semibold mt-5 ${!isChecked ? 'cursor-not-allowed' : 'cursor-pointer hover:bg-orange-600 hover:shadow-none'}`}
            disabled={!isChecked}
          >
            Sorğumu Göndər
          </button>
        </form>
      </div>
    </section>
  )
}
