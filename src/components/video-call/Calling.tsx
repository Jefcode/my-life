import { ReactComponent as SpeakerIcon } from '../../icons/speaker.svg';
import { ReactComponent as MicrophoneIcon } from '../../icons/microphone.svg';
import { ReactComponent as VideoIcon } from '../../icons/video.svg';
import { ReactComponent as CloseIcon } from '../../icons/close.svg';

function Calling() {
  return (
    <div
      className='w-full h-[500px] bg-no-repeat bg-cover bg-center relative after:content-[""] after:absolute after:bg-black/50 after:top-0 after:left-0 after:w-full after:h-full after:z-0'
      style={{ backgroundImage: 'url("/imgs/user-1.png")' }}
    >
      {/* User/Calling... */}
      <div className='absolute z-10 top-half left-half -translate-y-half -translate-x-half flex flex-col items-center'>
        <img
          src='/imgs/user-1.png'
          alt='user photo'
          className='w-24 h-24 rounded-full object-cover mb-6'
        />

        <h4 className='text-white font-medium text-2xl mb-2'>Roya Simonetti</h4>

        <p className='text-stone-300 '>Calling...</p>
      </div>

      {/* Action Controls */}
      <div className='absolute left-half -translate-x-half flex items-center z-20 gap-5 bottom-10'>
        <button className='flex items-center justify-center transition bg-white/30 hover:bg-white/40 active:scale-90 rounded-full w-10 h-10 text-white'>
          <SpeakerIcon className='h-4 w-4' />
        </button>
        <button className='flex items-center justify-center transition bg-white/30 hover:bg-white/40 active:scale-90 rounded-full w-10 h-10 text-white '>
          <MicrophoneIcon className='h-4 w-4' />
        </button>
        <button className='flex items-center justify-center transition bg-white/30 hover:bg-white/40 active:scale-90 rounded-full w-10 h-10 text-white '>
          <VideoIcon className='h-4 w-4' />
        </button>
        <button className='flex items-center justify-center transition bg-primary hover:bg-red-500 active:scale-90 rounded-full w-10 h-10 text-white '>
          <CloseIcon className='h-4 w-4' />
        </button>
      </div>
    </div>
  );
}

export default Calling;
