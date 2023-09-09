const OnCall = () => {
  return (
    <>
      {/* Client Video */}
      <img
        src='/imgs/video-call-1.jpg'
        alt='Video call client'
        className='w-full h-full object-cover'
      />
      {/* Your Video */}
      <div className='absolute bottom-5 right-5 rounded-lg overflow-hidden border-2 border-white w-32 h-32'>
        <img
          src='/imgs/video-call-2.jpg'
          className='w-full h-full object-cover'
          alt='Video call'
        />
      </div>

      {/* Time remaining */}
      <div className='absolute bottom-5 left-5 bg-black bg-opacity-50 w-32 rounded-lg z-10 p-3 text-stone-200 text-sm'>
        <p className='font-normal mb-0.5'>Time remaining</p>
        <p className='font-medium'>11:29</p>
      </div>
    </>
  );
};

export default OnCall;
