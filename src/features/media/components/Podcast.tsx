import { IMedia } from '../../../types';
import { EditIcon, HeartIcon } from '../../../assets/icons';
import Modal from '../../../components/ui/Modal';
import PodcastModal from './PodcastModal';

/**
 * TODO clean up card for podcasts, articles, videos
 */

interface PodcastProps {
  data: IMedia;
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
              <PodcastModal data={data} />
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
