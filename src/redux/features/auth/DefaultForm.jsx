import DefaultInput from '~/components/loginForm/DefaultInput.jsx';
import DefaultBtn from '~/components/DefaultBtn.jsx';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { login, postUser } from '~/redux/features/auth/authSlice.js';
import { useAccounts, useStatus } from '~/redux/selectors.js';

export default function DefaultForm({ onClose, setError }) {
  const accounts = useAccounts();
  const status = useStatus();

  const initialState = {
    id: accounts.length ? accounts[accounts.length - 1].id + 1 : 1,
    userName: '',
    fullName: '',
    email: '',
    tel: '',
    password: '',
  };

  const [addedAccount, setAddedAccount] = useState(initialState);

  const [registrationType, setRegistrationType] = useState('login');

  const dispatch = useDispatch();

  const handleRegisterType = () => {
    setRegistrationType(registrationType === 'signup' ? 'login' : 'signup');
    setError('');
    setAddedAccount(initialState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const doesPropertyExist = (prop) => {
      return accounts.find((acc) => acc[prop] === addedAccount[prop]) || false;
    };
    if (registrationType === 'signup') {
      if (
        !doesPropertyExist('userName') &&
        !doesPropertyExist('fullName') &&
        !doesPropertyExist('email') &&
        !doesPropertyExist('tel') &&
        !doesPropertyExist('password')
      ) {
        dispatch(postUser(addedAccount));
        onClose && onClose();
        setError('');
        setAddedAccount(initialState);
      } else {
        setError('Tələblərdən ən azı biri artıq istifadə olunur');
      }
    } else {
      if (
        doesPropertyExist('userName') &&
        doesPropertyExist('password') &&
        doesPropertyExist('email')
      ) {
        dispatch(login(addedAccount));
        onClose && onClose();
        setError('');
      } else {
        setError('Belə bir hesab yoxdur');
      }
    }
  };

  return (
    <form
      className="flex flex-col gap-4 py-2"
      method="dialog"
      onSubmit={(e) => handleSubmit(e)}
    >
      {registrationType === 'signup' && (
        <div className="grid gap-4">
          <label htmlFor="fullName">Ad & Soyad</label>
          <DefaultInput
            placeholder="Adınızı və soyadınızı daxil edin..."
            type="text"
            name="fullName"
            value={addedAccount.fullName}
            handleChange={(value) =>
              setAddedAccount({ ...addedAccount, fullName: value })
            }
          />
        </div>
      )}
      <div className="grid gap-4">
        <label htmlFor="username">İstifadəçi adı</label>
        <DefaultInput
          placeholder="johndoe01"
          type="text"
          name="username"
          value={addedAccount.userName}
          pattern=".*\d.*\d.*"
          handleChange={(value) =>
            setAddedAccount({ ...addedAccount, userName: value })
          }
        />
      </div>
      {registrationType === 'signup' && (
        <div className="grid gap-4">
          <label htmlFor="tel">Telefon nömrəsi</label>
          <DefaultInput
            placeholder="+994** *** ****"
            type="tel"
            name="tel"
            value={addedAccount.tel}
            handleChange={(value) =>
              setAddedAccount({ ...addedAccount, tel: value })
            }
          />
        </div>
      )}
      <div className="grid gap-4">
        <label htmlFor="email">E-Mail</label>
        <DefaultInput
          placeholder="johndoe@example.com"
          type="email"
          name="email"
          value={addedAccount.email}
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
          value={addedAccount.password}
          handleChange={(value) =>
            setAddedAccount({ ...addedAccount, password: value })
          }
        />
      </div>
      <div className="text-xxl">
        <DefaultBtn type="submit">
          {registrationType === 'signup' ? 'Qeydiyyatdan kec' : 'Daxil ol'}
        </DefaultBtn>
      </div>
      <div className="flex w-full justify-between sm:items-center items-start sm:flex-row flex-col gap-3">
        {registrationType === 'signup' ? 'Hesabınız var?' : 'Hesabınız yoxdur?'}
        <button
          type="button"
          className="px-2 py-1 text-sm bg-yellow-200 rounded-xl text-yellow-800 font-semibold hover:rounded-lg"
          onClick={handleRegisterType}
        >
          {registrationType === 'signup'
            ? 'Daxil ol'
            : status === 'pending'
              ? 'Loading...'
              : 'Qeydiyyatdan keç'}
        </button>
      </div>
    </form>
  );
}
