import * as Slider from '@radix-ui/react-slider';

import { Media } from '../../../types';
import Modal from '../../../components/common/Modal';
import {
  EditIcon,
  HeartIcon,
  NextIcon,
  PauseIcon,
  PlayIcon,
  PreviousIcon,
} from '../../../icons';

/**
 * TODO clean up modal into a sperate compnent,
 * TODO clean up card for podcasts, articles, videos
 */

interface VideoProps {
  data: Media;
}

const Video = ({ data }: VideoProps) => {
  return (
    <div className='w-full'>
      {/* Video Thumbnail Container */}
      <div className='relative rounded-xl overflow-hidden'>
        <img
          src={data.image}
          alt='Video thumbnail'
          className='w-full h-56 object-cover object-center'
        />

        {/* Gradient */}
        <div className='absolute inset-0 bg-gradient-to-t from-stone-900/50 via-transparent to-transparent'></div>

        {/* Play Button */}
        <Modal>
          <Modal.Button className='absolute active:scale-95 transition z-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>
            <PlayIcon />
          </Modal.Button>

          <Modal.Content
            dark
            className='!w-[900px] !h-[550px] !rounded-xl !p-0'
          >
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

                  <time className='text-stone-300 font-light text-xs'>
                    10/04/23
                  </time>
                </div>

                {/* Video Controls */}
                <div>
                  {/* Progress */}
                  <Slider.Root
                    className='relative flex items-center select-none touch-none h-5'
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
          </Modal.Content>
        </Modal>

        {/* Video Info */}
        <div className='absolute z-10 w-full text-white bottom-3 px-4 flex items-center justify-between'>
          {/* Likes */}
          <div className='flex items-center gap-2'>
            <HeartIcon className='w-5 h-5' />
            <span>20 likes</span>
          </div>

          {/* duration/Live */}
          <div className='flex items-center gap-1.5'>
            {data.live ? (
              <>
                <span>Live</span>
                <div className='w-2 h-2 rounded-full bg-rose-500'></div>
              </>
            ) : (
              <>
                <div className='w-2 h-2 rounded-full bg-rose-500'></div>
                <span>7 mins</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Video Title/Author */}
      <div className='mt-3'>
        <div className='flex items-center gap-1 justify-between'>
          <h3 className='text-xl flex-1 font-medium text-stone-800'>
            {data.title}
          </h3>

          <button className='rounded-full w-6 h-6 bg-orange-500 flex items-center justify-center text-sm text-white hover:bg-orange-600 transition active:scale-95'>
            <EditIcon className='w-3 h-3' />
          </button>
        </div>

        {/* Author/Date */}
        <p className='mt-1'>
          {/* Author */}
          {data.author && (
            <span className='text-gradientRed-200'>Dr. Shanice McDonald</span>
          )}

          {/* Date */}
          {data.date && <span className='text-primary '>May 24, 2023</span>}
        </p>
      </div>
    </div>
  );
};

export default Video;
