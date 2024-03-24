import { useEffect, useState } from 'react'
import axios from 'axios'
import DefaultInput from '~/components/loginForm/defaultInput'
import SelectContainer from '~/components/search/searchBar/selectContainer'
import { motion } from 'framer-motion'
import { RxCheck } from 'react-icons/rx'

export default function SendRequestForm() {
  const [isChecked, setIsChecked] = useState(false)
  const [estateTypes, setEstateTypes] = useState([])
  const [estateTypesValue, setEstateTypesValue] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        'https://kinaci-server.onrender.com/data/selectInfo',
      )
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
                <label htmlFor="text" className="mb-3 inline-block">
                  Ad & Soyad
                </label>
                <DefaultInput
                  type="text"
                  placeholder="Ad və soyadınızı daxil edin..."
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-3 inline-block">
                  E-mail
                </label>
                <DefaultInput
                  type="email"
                  placeholder="E-mailinizi daxil edin..."
                />
              </div>
              <div>
                <label htmlFor="tel" className="mb-3 inline-block">
                  Telefon
                </label>
                <DefaultInput
                  type="tel"
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
                <label htmlFor="textarea" className="mb-3 inline-block">
                  Mesajınız
                </label>
                <span className="border border-blue-900/25 rounded-selectBtn text-sm p-[15px] bg-white text-blue-900 w-full">
                  <textarea name="message" id="textarea" className="ma" />
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-[20px_1fr] gap-1.5 justify-start items-center">
            <button
              type="button"
              className="border border-blue-900/20 rounded-md size-5 hover:border-blue-900/70"
              onClick={() => setIsChecked((prev) => !prev)}
            >
              <motion.span
                animate={isChecked ? 'checked' : 'initial'}
                variants={{
                  initial: { scale: 0, opacity: 0 },
                  checked: { scale: 1, opacity: 1 },
                }}
              >
                <RxCheck />
              </motion.span>
            </button>
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
