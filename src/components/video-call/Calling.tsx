import { CloseIcon, MicrophoneIcon, SpeakerIcon, VideoIcon } from '../../icons';

function Calling() {
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

      {/* User/Calling... */}
      <div className='absolute z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center'>
        <img
          src='/imgs/user-1.png'
          alt='user photo'
          className='w-24 h-24 rounded-full object-cover mb-6'
        />

        <h4 className='text-white font-medium text-2xl mb-2'>Roya Simonetti</h4>

        <p className='text-stone-300 '>Calling...</p>
      </div>

      {/* Action Controls */}
      <div className='absolute left-1/2 -translate-x-1/2 flex items-center z-20 gap-5 bottom-10'>
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
    </>
  );
}

export default Calling;
