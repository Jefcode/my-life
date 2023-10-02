import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import * as yup from 'yup';

import { EyeIcon, EyeOffIcon } from '../../../assets/icons';
import classNames from '../../../utils/classNames';
import * as apiAuth from '../services/apiAuth';

const loginSchema = yup
  .object({
    email: yup.string().email('Please provide a valid email').required(),
    password: yup.string().min(6).required(),
  })
  .required();

interface ILoginFormInputs extends yup.InferType<typeof loginSchema> {}

const LoginForm = () => {
  const { mutate: login } = useMutation({
    mutationFn: apiAuth.login,
  });
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormInputs>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: ILoginFormInputs) => {
    login(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='space-y-4'>
        <div className='relative'>
          <input
            type='email'
            className={classNames(
              'rounded-full py-5 px-6 border w-full outline-none focus:border-stone-500 transition placeholder:text-stone-400',
              errors.email ? '!border-primary' : 'border-stone-200'
            )}
            placeholder='Your e-mail'
            {...register('email')}
          />

          <p className='text-primary text-sm ml-6 pt-1'>
            {errors.email?.message}
          </p>
        </div>
        <div>
          <div className='relative'>
            <input
              type={showPassword ? 'text' : 'password'}
              className={classNames(
                'rounded-full py-5 px-6 border w-full outline-none focus:border-stone-500 transition placeholder:text-stone-400',
                errors.password ? '!border-primary' : 'border-stone-200'
              )}
              placeholder='Enter your password'
              {...register('password')}
            />
            {/* Eye icon for the password */}
            <button
              type='button'
              className='absolute top-1/2 -translate-y-1/2 right-2.5 h-10 w-10 hover:bg-slate-100 rounded-full flex items-center justify-center text-stone-500/60 transition-all'
              onClick={() => setShowPassword((val) => !val)}
            >
              {showPassword ? <EyeIcon /> : <EyeOffIcon />}
            </button>
          </div>

          <p className='text-primary text-sm ml-6 pt-1'>
            {errors.password?.message}
          </p>
        </div>

        {/* Submit Button */}
        <button className='py-4 px-14 bg-primary text-white rounded-full font-semibold transition-all hover:bg-danger shadow-[0px_4px_16px_0px_rgba(193,34,48,0.16)] active:scale-95'>
          Log in
        </button>

        <div className='space-x-2'>
          <span className='text-stone-500 font-medium'>Forgot password?</span>
          <a href='' className='text-blue-500 font-bold hover:underline'>
            Recover
          </a>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
