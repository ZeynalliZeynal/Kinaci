import DefaultBtn from '~/components/DefaultBtn.jsx';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSignUp } from './useSignUp';
import { useSignIn } from './useSignIn';
import SpinnerMini from '~/components/SpinnerMini';

export default function DefaultForm({ onClose, setError }) {
  const { register, handleSubmit, reset, formState } = useForm();

  const { errors } = formState;

  const { signUp, isSigningUp } = useSignUp();
  const { signIn, isSigningIn } = useSignIn();

  const [registrationType, setRegistrationType] = useState('login');

  const handleRegisterType = () => {
    setRegistrationType(registrationType === 'signup' ? 'login' : 'signup');
    reset();
    setError('');
  };

  const onSubmit = ({ fullName, email, password }) => {
    if (registrationType === 'signup') signUp({ fullName, email, password });
    else if (registrationType === 'login') signIn({ email, password });
    reset();
    if (!isSigningIn || !isSigningUp) onClose();
  };

  return (
    <form
      className="flex flex-col gap-4 py-2"
      method="dialog"
      onSubmit={handleSubmit(onSubmit)}
    >
      {registrationType === 'signup' && (
        <div className="grid gap-4">
          <label htmlFor="fullName">Ad & Soyad</label>
          <span
            className={`transition-colors my-2.5 px-2.5 py-4 rounded-xl border bg-white w-full flex text-xs h-[50px] cursor-default ${errors?.fullName ? 'border-red-600' : 'border-blue-900/25 focus-within:border-blue-900'}`}
          >
            <input
              className="placeholder:text-blue-900/50"
              type="text"
              autoComplete="name"
              placeholder="John Doe"
              {...register('fullName', {
                required: 'Ad və soyad tələb olunur',
              })}
            />
          </span>{' '}
          {errors?.fullName && (
            <span className="text-red-600">{errors?.fullName?.message}</span>
          )}
        </div>
      )}
      <div className="grid gap-4">
        <label htmlFor="email">E-Mail</label>
        <span
          className={`transition-colors my-2.5 px-2.5 py-4 rounded-xl border border-blue-900/25 focus-within:border-blue-900 bg-white w-full flex text-xs h-[50px] cursor-default ${errors?.email ? 'border-red-600' : 'border-blue-900/25'}`}
        >
          <input
            className="placeholder:text-blue-900/50"
            type="email"
            autoComplete="email"
            placeholder="johndoe@john.doe"
            {...register('email', {
              required: 'E-mail tələb olunur',
            })}
          />
        </span>{' '}
        {errors?.email && (
          <span className="text-red-600">{errors?.email?.message}</span>
        )}
      </div>
      <div className="grid gap-4">
        <label htmlFor="password">Şifrə</label>
        <span
          className={`transition-colors my-2.5 px-2.5 py-4 rounded-xl border border-blue-900/25 focus-within:border-blue-900 bg-white w-full flex text-xs h-[50px] cursor-default ${errors?.password ? 'border-red-600' : 'border-blue-900/25'}`}
        >
          <input
            className="placeholder:text-blue-900/50"
            type="password"
            autoComplete="new-password"
            {...register('password', {
              required: 'Şifrə tələb olunur',
              min: {
                value: 6,
                message: 'Ən azı 6 simvol tələb olunur',
              },
            })}
          />
        </span>{' '}
        {errors?.password && (
          <span className="text-red-600">{errors?.password?.message}</span>
        )}
      </div>
      <div className="text-xxl">
        <DefaultBtn type="submit">
          {isSigningIn || isSigningUp ? (
            <SpinnerMini />
          ) : registrationType === 'signup' ? (
            'Qeydiyyatdan kec'
          ) : (
            'Daxil ol'
          )}
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
