import * as Slider from '@radix-ui/react-slider';

import { IMedia } from '../../../types';
import {
  HeartIcon,
  NextIcon,
  PauseIcon,
  PreviousIcon,
} from '../../../assets/icons';

const PodcastModal = ({ data }: { data: IMedia }) => {
  return (
    <>
      {/* Author info */}
      <div className='flex items-center mb-5 gap-3'>
        <img
          src='/imgs/user-2.jpg'
          className='w-12 h-12 rounded-full object-cover'
          alt='Authors photo'
        />

        <div>
          <h5 className='text-lg font-medium text-stone-700'>Dr. Luke Brown</h5>
          <div className='text-primary'>Article</div>
        </div>
      </div>

      {/* Podcast Image */}
      <div className='w-full rounded-full h-80 mb-7'>
        <img
          src={data.image}
          alt='article image'
          className='w-full h-full rounded-2xl object-cover object-center'
        />
      </div>

      {/* Name, Date, Link */}
      <div className='mb-3'>
        <div className='flex items-center gap-2 justify-between'>
          <h3 className='text-xl flex-1 font-medium text-stone-800'>
            {data.title}
          </h3>

          <button className='active:scale-90 transition'>
            <HeartIcon className='text-gradientRed-200' />
          </button>
        </div>

        <time className='text-stone-400 font-light text-sm'>10/04/23</time>
      </div>

      {/* Audio Controls */}
      <div>
        {/* Progress */}
        <Slider.Root
          className='relative flex items-center select-none touch-none h-5 cursor-pointer'
          defaultValue={[0]}
          max={100}
          step={1}
        >
          <Slider.Track className='bg-black/10 relative grow rounded-full h-[2px]'>
            <Slider.Range className='absolute bg-gradient-to-r from-gradientRed-200 to-gradientRed-100 rounded-full h-full' />
          </Slider.Track>
          <Slider.Thumb
            className='block w-4 h-4 bg-gradient-to-r to-gradientRed-200 from-gradientRed-100 rounded-[10px] focus:shadow-blackA8 hover:cursor-pointer'
            aria-label='Volume'
          />
        </Slider.Root>

        {/* Time Flex Container */}
        <div className='flex items-center justify-between mt-3'>
          <time className='font-semibold text-stone-800'>1:47</time>
          <time className='text-stone-400'>12:21</time>
        </div>

        {/* Pause + Prev and Next buttons */}
        <div className='flex items-center justify-center gap-14 text-stone-700'>
          <button className='transition active:scale-95'>
            <PreviousIcon />
          </button>
          <button className='transition active:scale-95'>
            <PauseIcon />
          </button>
          <button className='transition active:scale-95'>
            <NextIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default PodcastModal;
