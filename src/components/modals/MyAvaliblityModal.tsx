import * as Switch from '@radix-ui/react-switch';
import Input from '../common/Input';

const MyAvaliblityModal = () => {
  return (
    <div className='mt-7'>
      {/* For each day of the week */}
      <div>
        <div className='flex items-center justify-between gap-2 mb-8'>
          <p className='text-xl font-medium text-stone-800'>Monday</p>
          {/* Buttons */}
          <div className='flex items-center gap-1'>
            <button className='flex items-center justify-center w-7 h-7 rounded-full bg-stone-100 text-stone-900 text-lg leading-none font-medium'>
              -
            </button>
            <span className='flex items-center justify-center w-7 h-7 rounded-full bg-stone-100 text-stone-900 text-sm leading-none font-medium'>
              1
            </span>
            <button className='flex items-center justify-center w-7 h-7 rounded-full bg-stone-100 text-stone-900 leading-none font-medium'>
              +
            </button>
          </div>

          {/* Toggle button */}
          <Switch.Root
            className='w-[50px] h-[30px] bg-stone-100 rounded-full relative data-[state=checked]:bg-primary outline-none transition cursor-pointer'
            defaultChecked
          >
            <Switch.Thumb className='block w-[25px] h-[25px] shadow bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[23px]' />
          </Switch.Root>
        </div>

        {/* Inputs Flex Container */}
        <div className='flex items-center gap-2'>
          <div className='w-full'>
            <Input label='from' type='time' />
          </div>
          <div className='w-full'>
            <Input label='to' type='time' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAvaliblityModal;
