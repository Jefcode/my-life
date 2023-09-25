import { Link } from 'react-router-dom';

import {
  AppleIcon,
  FacebookIcon,
  GoogleIcon,
  LogoIcon,
  LogoTextIcon,
  MicrosoftIcon,
} from '../assets/icons';
import Container from '../components/ui/Container';
import LoginForm from '../features/authentication/components/LoginForm';

const LoginPage = () => {
  return (
    <div className='font-jakarta max-w-[100vw] min-h-screen overflow-x-hidden'>
      <Container className='relative'>
        {/* Header */}
        <div className='flex items-center gap-3 py-3 relative z-10'>
          {/* Logo */}
          <div className='flex items-center transition-all'>
            <Link to='/' className='flex items-center gap-3 text-primary'>
              <div>
                <LogoIcon className='w-8 h-8 ' />
              </div>
              <LogoTextIcon className='w-14' />
            </Link>
          </div>
          <div className='py-1.5 px-3 text-sm bg-lightPink text-danger rounded-full font-semibold'>
            Authentication
          </div>
        </div>

        {/* Content */}
        <div className='h-screen absolute inset-0 py-14 px-4'>
          <div className='h-full w-full flex items-center gap-5'>
            {/* Content half */}
            <div className='w-full md:w-1/2'>
              <div className='max-w-md mx-auto md:mx-0'>
                {/* Title */}
                <div className='mb-6 space-y-2'>
                  <h1 className='text-4xl font-bold tracking-tighter'>
                    Log in to MyLife
                  </h1>

                  <div className='space-x-2'>
                    <span className='text-stone-500 font-medium'>
                      Do not have an account yet?
                    </span>
                    <a
                      href=''
                      className='text-blue-500 font-bold hover:underline'
                    >
                      Sign up
                    </a>
                  </div>
                </div>

                {/* Form */}
                <LoginForm />

                {/* Line Sperater */}
                <div className='relative border-b border-stone-200 w-full my-5'>
                  <span className='absolute bg-white px-3 py-2 top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 text-stone-400 font-medium text-sm'>
                    OR
                  </span>
                </div>

                {/* Socials icon */}
                <div className='w-full flex items-center gap-1'>
                  <button className='w-full rounded-full py-4 px-2 flex items-center justify-center border border-stone-300 hover:shadow-xl hover:shadow-slate-200/60 transition active:scale-95'>
                    <GoogleIcon />
                  </button>
                  <button className='w-full rounded-full py-4 px-2 flex items-center justify-center border border-stone-300 hover:shadow-xl hover:shadow-slate-200/60 transition active:scale-95'>
                    <FacebookIcon />
                  </button>
                  <button className='w-full rounded-full py-4 px-2 flex items-center justify-center border border-stone-300 hover:shadow-xl hover:shadow-slate-200/60 transition active:scale-95'>
                    <AppleIcon />
                  </button>
                  <button className='w-full rounded-full py-4 px-2 flex items-center justify-center border border-stone-300 hover:shadow-xl hover:shadow-slate-200/60 transition active:scale-95'>
                    <MicrosoftIcon />
                  </button>
                </div>
              </div>
            </div>

            {/* Image Half */}
            <div className='hidden md:block w-1/2 h-full'>
              <div className='w-full rounded-3xl relative overflow-hidden h-full xl:ml-20'>
                <img
                  src='/imgs/login.svg'
                  alt='Log'
                  className='absolute w-full h-full object-cover object-top top-3'
                />

                {/* Overlay */}
                <div className='absolute inset-0 z-10 bg-gradient-to-b from-[#EFECFF]/[84%] via-[#EFECFF]/[88%] to-[#EFECFF]/[75%]'></div>

                {/* Logo */}
                <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-40'>
                  <LogoIcon className='text-white w-40 h-40 drop-shadow-[0px_24px_30px_rgba(69,59,131,0.5)]' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;
