import DefaultForm from '~/redux/features/auth/DefaultForm.jsx'
import FormBG from '~/assets/img/formBg.jpg'
import KinaciWhiteLogo from '~/assets/img/KinaciLogoWhite.svg'
import { useActiveAccount } from '~/redux/selectors.js'
import { DefaultTextarea } from '~/components/DefaultTextarea.jsx'
import { useReducer } from 'react'
import DefaultBtn from '~/components/DefaultBtn.jsx'
import { initialState, reducer } from '~/reducers/commentsReducer.js'

export default function FormSection() {
  const [{ values, countSymbols }, dispatch] = useReducer(reducer, initialState)
  const activeAccount = useActiveAccount()
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <section className="py-[100px] bg-blue-50/50">
      <div className="container">
        <div className="grid md:grid-cols-2">
          <div className="py-[42px] px-[50px] bg-white rounded-xl">
            <div className="mb-6 text-blue-900">
              <h2>Məlumat almaq istəyirəm</h2>
              <p className="text-sm">
                {activeAccount
                  ? `Salam, ${activeAccount.fullName}. Mesajınızı yazın və göndərin`
                  : 'Məlumat almaq üçün qeydiyyatdan keçin və ya daxil olun'}
              </p>
            </div>
            {activeAccount ? (
              <form onSubmit={(e) => handleSubmit(e)} className="text-sm">
                <div>
                  <label htmlFor="message">Mesajınızı yazın</label>
                  <DefaultTextarea
                    name="message"
                    value={values.text}
                    handleChange={(e) => {
                      if (e.length <= initialState.countSymbols) {
                        dispatch({
                          type: 'SET_VALUES',
                          payload: { text: e },
                        })
                        dispatch({ type: 'COUNT_SYMBOLS', payload: e.length })
                      }
                    }}
                    placeholder="Maksimum 500 simvol"
                  />

                  <span className="text-xs w-full text-end text-blue-900/60 mb-5">
                    {countSymbols === 0 ? 'Limitə çatıldı' : countSymbols}{' '}
                    {countSymbols !== 0 && `/ ${initialState.countSymbols}`}
                  </span>
                </div>
                <DefaultBtn type="submit" disabled={!values.text}>
                  Göndər
                </DefaultBtn>
              </form>
            ) : (
              <DefaultForm />
            )}
          </div>
          <div
            className="hidden md:block rounded-xl relative"
            style={{
              backgroundImage: `url(${FormBG})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          >
            <span className="absolute bottom-4 right-4">
              <img src={KinaciWhiteLogo} alt="Kinaci" />
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
