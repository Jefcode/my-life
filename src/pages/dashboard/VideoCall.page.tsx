import PageTitle from '../../components/common/PageTitle';
import Panel from '../../components/common/Panel';
import { FaPhoneAlt } from 'react-icons/fa';
import { ReactComponent as SpeakerIcon } from '../../icons/speaker.svg';
import { ReactComponent as MicrophoneIcon } from '../../icons/microphone.svg';
import { ReactComponent as VideoIcon } from '../../icons/video.svg';
import { ReactComponent as DotsIcon } from '../../icons/dots.svg';
import { ReactComponent as FullScreenIcon } from '../../icons/full-screen.svg';
import { ReactComponent as JournalIcon } from '../../icons/journal.svg';
// import { ReactComponent as SmallScreenIcon } from '../../icons/small-screen.svg';

import Calling from '../../components/video-call/Calling';
// import OnCall from '../../components/video-call/OnCall';
// import CallEnd from '../../components/video-call/CallEnd';

function VideoCallPage() {
  return (
    <>
      <PageTitle
        title='Dashboard'
        breadcrumb={[{ title: 'Roya Simonetti' }, { title: 'Video Call' }]}
      />

      <Panel>
        <div className='flex gap-5 items-stretch  '>
          {/* Call part */}
          <div className='flex-[2]'>
            {/* Header */}
            <div className='flex items-center gap-3 mb-5'>
              <img
                src='/imgs/user-1.png'
                alt='Client photo'
                className='w-11 h-11 rounded-full object-center'
              />

              <div className='flex flex-col'>
                <h4 className='font-semibold text-lg leading-tight'>
                  Roya Simonetti
                </h4>
                <p className='text-red-500'>Drugs</p>
              </div>
            </div>

            {/* Video Call Container */}
            <div>
              {/* Call */}
              <div className='relative w-full rounded-xl overflow-hidden'>
                {/* Shared Stuff between different stages */}
                <button className='absolute top-5 right-5 bg-black bg-opacity-50 w-8 rounded-lg z-10 p-2 text-stone-200'>
                  <FullScreenIcon />
                </button>
                {/* <button className='absolute top-5 right-5 bg-black bg-opacity-50 w-8 rounded-lg z-10 p-2 text-stone-200'>
                  <SmallScreenIcon />
                </button> */}

                {/* Calling Stage */}
                <Calling />

                {/* On-Call Stage */}
                {/* <OnCall /> */}

                {/* Call End Stage */}
                {/* <CallEnd /> */}
              </div>

              {/* Control Buttons */}
              <div className='w-full h-32 flex justify-center'>
                {/* buttons container */}
                <div className='flex items-center justify-center gap-5'>
                  <button className='flex items-center justify-center transition bg-stone-100 hover:bg-stone-200 active:scale-90 rounded-full w-10 h-10 text-stone-600'>
                    <SpeakerIcon className='h-3.5 w-3.5' />
                  </button>
                  <button className='flex items-center justify-center transition bg-stone-100 hover:bg-stone-200 active:scale-90 rounded-full w-10 h-10 text-stone-600'>
                    <MicrophoneIcon className='h-3.5 w-3.5' />
                  </button>

                  <button className='flex items-center justify-center transition bg-primary hover:bg-red-500 active:scale-90 rounded-full w-14 h-14 text-white mx-2.5'>
                    <FaPhoneAlt className='h-5 w-5 rotate-[135deg]' />
                  </button>

                  <button className='flex items-center justify-center transition bg-stone-100 hover:bg-stone-200 active:scale-90 rounded-full w-10 h-10 text-stone-600'>
                    <VideoIcon className='h-3.5 w-3.5' />
                  </button>
                  <button className='flex items-center justify-center transition bg-stone-100 hover:bg-stone-200 active:scale-90 rounded-full w-10 h-10 text-stone-600'>
                    <DotsIcon className='h-3.5 w-3.5' />
                  </button>
                </div>
              </div>

              {/* Leave Notes */}
              <button className='w-full rounded-lg border border-red-500 flex items-center justify-center p-3 font-medium text-red-500 transition hover:bg-rose-50'>
                Leave Notes on your session
              </button>
            </div>
          </div>

          {/* Client Journal part */}
          <div className='flex-1'>
            <div className='w-full pl-5 border-l border-stone-200 h-full'>
              {/* Header */}
              <div className='flex items-center gap-3 mb-5'>
                <JournalIcon />
                <span className='font-semibold text-stone-800 text-xl'>
                  Client Journal
                </span>
              </div>

              {/* Panels items */}
              <div className='flex items-center justify-between border-b border-stone-200'>
                <div className='relative py-2 cursor-pointer font-medium text-primary'>
                  Client Story
                  {/* Active panel has this */}
                  <div className='bg-primary h-1 w-full absolute bottom-0 left-0 rounded-full translate-y-half'></div>
                </div>
                <div className='py-2 cursor-pointer font-medium text-stone-600 transition hover:text-stone-800'>
                  Client Notes
                </div>
                <div className='py-2 cursor-pointer font-medium text-stone-600 transition hover:text-stone-800'>
                  Other Information
                </div>
              </div>

              {/* Panels Data */}
              <div className='mt-8'>
                {/* Client Story */}
                <div className='text-stone-500 space-y-5'>
                  <p>
                    MyLife believes that unhealthy, repeated patterns of
                    behaviour often stem from emotional loss and pain. The
                    addiction process often begins as an attempt to soothe or
                    numb that pain, only doing so temporarily. Obsessive
                    preoccupation, secrecy, feelings of nagging emptiness,
                    craving and impaired control then follow, frequently ruining
                    relationships and one's own self-esteem. Financial losses
                    and employment problems can quickly follow.
                  </p>
                  <p>
                    By no means does everybody understand where this 'root
                    cause' pain arises from. Through a combination of speaking
                    to trained specialists and the features that the app offers
                    to help you stay on track, we believe we can help.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Panel>
    </>
  );
}

export default VideoCallPage;
