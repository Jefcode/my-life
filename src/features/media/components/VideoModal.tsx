import * as Slider from '@radix-ui/react-slider';

import {
  HeartIcon,
  NextIcon,
  PauseIcon,
  PreviousIcon,
} from '../../../assets/icons';
import { IMedia } from '../../../types';

const VideoModal = ({ data }: { data: IMedia }) => {
  return (
    <>
      {/* Video Container */}
      <div className='w-full h-full flex items-center justify-center'>
        <img
          src={data.image}
          alt='Video thumbnail'
          className='h-full object-cover'
        />

        {/* Video */}
        {/* <video controls className='w-full'>
                <source src='videos/video.mp4' type='video/mp4' />
                Your browser does not support the video tag.
              </video> */}
      </div>

      {/* Controls and progress */}
      <div className='absolute bottom-8 w-full px-8 before:z-0 before:content-[""] before:fixed before:inset-0 before:bg-gradient-to-t before:from-stone-900/60 before:via-transparent before:to-transparent'>
        <div className='relative z-20'>
          {/* Name, Date, Link */}
          <div className='mb-3'>
            <div className='flex items-center gap-2 justify-between'>
              <h3 className='flex-1 font-medium text-stone-100'>
                {data.title}
              </h3>

              <button className='active:scale-90 transition'>
                <HeartIcon className='text-gradientRed-200' />
              </button>
            </div>

            <time className='text-stone-300 font-light text-xs'>10/04/23</time>
          </div>

          {/* Video Controls */}
          <div>
            {/* Progress */}
            <Slider.Root
              className='relative flex items-center select-none touch-none h-5 cursor-pointer'
              defaultValue={[0]}
              max={100}
              step={1}
            >
              <Slider.Track className='bg-stone-300 relative grow rounded-full h-[2px]'>
                <Slider.Range className='absolute bg-gradient-to-r from-gradientRed-200 to-gradientRed-100 rounded-full h-full' />
              </Slider.Track>
              <Slider.Thumb
                className='block w-4 h-4 bg-gradient-to-r to-gradientRed-200 from-gradientRed-100 rounded-[10px] focus:shadow-blackA8 hover:cursor-pointer'
                aria-label='Volume'
              />
            </Slider.Root>

            {/* Time Flex Container */}
            <div className='flex items-center justify-between mt-3'>
              <time className='font-semibold text-stone-200'>1:47</time>
              <time className='text-stone-300'>12:21</time>
            </div>

            {/* Pause + Prev and Next buttons */}
            <div className='flex items-center justify-center gap-14 text-stone-200'>
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
        </div>
      </div>
    </>
  );
};

export default VideoModal;
