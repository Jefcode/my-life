import Button from '../../../../components/ui/Button';
import { LogoIcon, LogoTextIcon } from '../../../../assets/icons';

const CallEnd = () => {
  return (
    <>
      {/* Overlay */}
      <div className='absolute bg-black bg-opacity-50 top-0 left-0 w-full h-full z-0'></div>

      {/* Background Image */}
      <img
        src='/imgs/user-1.png'
        alt='User photo'
        className='w-full h-full object-cover'
      />

      <div className='absolute z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col gap-8 items-center'>
        {/* Logo */}
        <div className='text-white flex items-center gap-3 w-28'>
          <LogoIcon />
          <LogoTextIcon />
        </div>

        <div className='text-center'>
          <h4 className='text-white font-medium text-2xl mb-2'>
            Session Ended
          </h4>

          <p className='text-stone-300 '>00:59:35</p>
        </div>

        <Button variant='primary' className='px-10 rounded-xl'>
          Go To Dashboard
        </Button>
      </div>
    </>
  );
};

export default CallEnd;
