import * as Slider from '@radix-ui/react-slider';

import { ReactComponent as HeartIcon } from '../../../icons/heart.svg';
import { ReactComponent as EditIcon } from '../../../icons/edit.svg';
import { ReactComponent as PreviousIcon } from '../../../icons/previous.svg';
import { ReactComponent as NextIcon } from '../../../icons/next.svg';
import { ReactComponent as PauseIcon } from '../../../icons/pause.svg';
import { Media } from '../../../types';
import Modal from '../../../components/common/Modal';

interface PodcastProps {
  data: Media;
}

const Podcast = ({ data }: PodcastProps) => {
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
        <div className='absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent'></div>

        {/* Podcast Indicator */}
        <div className='bg-primary rounded-l-md text-white px-5 py-1.5 text-sm absolute z-10 top-5 right-0'>
          Podcast
        </div>

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
          <Modal>
            <Modal.Button>
              <h3 className='text-xl flex-1 font-medium text-stone-800'>
                {data.title}
              </h3>
            </Modal.Button>

            <Modal.Content>
              {/* Author info */}
              <div className='flex items-center mb-5 gap-3'>
                <img
                  src='/imgs/user-2.jpg'
                  className='w-12 h-12 rounded-full object-cover'
                  alt='Authors photo'
                />

                <div>
                  <h5 className='text-lg font-medium text-stone-700'>
                    Dr. Luke Brown
                  </h5>
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

                <time className='text-stone-400 font-light text-sm'>
                  10/04/23
                </time>
              </div>

              {/* Audio Controls */}
              <div>
                {/* Progress */}
                <Slider.Root
                  className='relative flex items-center select-none touch-none h-5'
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
            </Modal.Content>
          </Modal>

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

export default Podcast;
