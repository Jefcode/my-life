import { Media } from '../../../types';
import Modal from '../../../components/common/Modal';
import { EditIcon, HeartIcon } from '../../../icons';

/**
 * TODO clean up modal into a sperate compnent,
 * TODO clean up card for podcasts, articles, videos
 */

interface ArticleProps {
  data: Media;
}

const Article = ({ data }: ArticleProps) => {
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

              {/* Article Image */}
              <div className='w-full rounded-full h-64 mb-7'>
                <img
                  src={data.image}
                  alt='article image'
                  className='w-full h-full rounded-xl object-cover object-center'
                />
              </div>

              {/* Article Info */}
              <div className='max-h-72 h-screen overflow-y-auto pr-2 scrollbar-thin scrollbar-track-slate-200 scrollbar-thumb-primary'>
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

                {/* Description */}
                <div className='text-stone-500 space-y-4'>
                  <p className='font-medium'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>{' '}
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>{' '}
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>
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

export default Article;
