import DefaultInput from '~/components/loginForm/DefaultInput.jsx'
import DefaultBtn from '~/components/DefaultBtn.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

// TODO: login and signup
export default function DefaultForm({ onClose }) {
  const currentAccount = useSelector((state) => state.auth.activeAccount)
  const accounts = useSelector((state) => state.auth.accounts)

  const [addedAccount, setAddedAccount] = useState({
    id: accounts[accounts.length - 1].id + 1,
    userName: '',
    fullName: '',
    email: '',
    tel: '',
    password: '',
  })

  const [error, setError] = useState('')

  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault()
    onClose && onClose()
    const doesPropertyExist = (prop) => {
      return accounts.find((acc) => acc[prop] === addedAccount[prop])
    }
    console.log(
      doesPropertyExist('userName') &&
        doesPropertyExist('fullName') &&
        doesPropertyExist('email') &&
        doesPropertyExist('tel') &&
        doesPropertyExist('password'),
    )
    // dispatch(login(addedAccount))
  }

  return (
    <form
      className="flex flex-col gap-4 py-2"
      method="dialog"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="grid gap-4">
        <label htmlFor="fullName">Ad & Soyad</label>
        <DefaultInput
          placeholder="Adınızı və soyadınızı daxil edin..."
          type="text"
          name="fullName"
          handleChange={(value) =>
            setAddedAccount({ ...addedAccount, fullName: value })
          }
        />
      </div>
      <div className="grid gap-4">
        <label htmlFor="username">İstifadəçi adı</label>
        <DefaultInput
          placeholder="johndoe01"
          type="text"
          name="username"
          pattern=".*\d.*\d.*"
          handleChange={(value) =>
            setAddedAccount({ ...addedAccount, userName: value })
          }
        />
      </div>
      <div className="grid gap-4">
        <label htmlFor="tel">Telefon nömrəsi</label>
        <DefaultInput
          placeholder="+994** *** ****"
          type="tel"
          name="tel"
          handleChange={(value) =>
            setAddedAccount({ ...addedAccount, tel: value })
          }
        />
      </div>
      <div className="grid gap-4">
        <label htmlFor="email">E-Mail</label>
        <DefaultInput
          placeholder="johndoe@example.com"
          type="email"
          name="email"
          handleChange={(value) =>
            setAddedAccount({ ...addedAccount, email: value })
          }
        />
      </div>
      <div className="grid gap-4">
        <label htmlFor="password">Şifrə</label>
        <DefaultInput
          placeholder="Ən azı 6 simvol"
          type="password"
          name="password"
          handleChange={(value) =>
            setAddedAccount({ ...addedAccount, password: value })
          }
        />
      </div>
      <div className="text-xxl">
        <DefaultBtn type="submit">Qeydiyyatdan kec</DefaultBtn>
      </div>
    </form>
  )
}
