import { HeartIcon } from '../../../assets/icons';
import { IMedia } from '../../../types';

const ArticleModal = ({ data }: { data: IMedia }) => {
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

          <time className='text-stone-400 font-light text-sm'>10/04/23</time>
        </div>

        {/* Description */}
        <div className='text-stone-500 space-y-4'>
          <p className='font-medium'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>{' '}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>{' '}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </>
  );
};

export default ArticleModal;
