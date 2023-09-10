import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt } from 'react-icons/fa';

import PageTitle from '../../components/common/PageTitle';
import Panel from '../../components/common/Panel';

import { ReactComponent as SpeakerIcon } from '../../icons/speaker.svg';
import { ReactComponent as MicrophoneIcon } from '../../icons/microphone.svg';
import { ReactComponent as VideoIcon } from '../../icons/video.svg';
import { ReactComponent as DotsIcon } from '../../icons/dots.svg';
import { ReactComponent as FullScreenIcon } from '../../icons/full-screen.svg';
import { ReactComponent as SmallScreenIcon } from '../../icons/small-screen.svg';
import { ReactComponent as NoteIcon } from '../../icons/note.svg';

import CallWrapper from '../../components/video-call/CallWrapper';
// import Calling from '../../components/video-call/Calling';
import OnCall from '../../components/video-call/OnCall';
// import CallEnd from '../../components/video-call/CallEnd';
import classNames from '../../utils/classNames';
import ClientJournal from '../../components/video-call/ClientJournal';
import Modal from '../../components/common/Modal';
import Button from '../../components/common/Button';

function VideoCallPage() {
  const [fullscreen, setFullscreen] = useState<boolean>(false);

  return (
    <>
      <PageTitle
        title='Dashboard'
        breadcrumb={[{ title: 'Roya Simonetti' }, { title: 'Video Call' }]}
      />

      <Panel className={fullscreen ? '!p-2' : ''}>
        <div className='flex gap-5 flex-wrap items-stretch'>
          {/* Call part */}
          <div
            className={`xl:flex-[2] w-full ${
              fullscreen && 'xl:flex-none xl:w-full'
            }`}
          >
            {/* Header */}
            {!fullscreen && (
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
            )}

            {/* Video Call Container */}
            <div>
              {/* Call */}
              <motion.div
                layout
                className='relative z-10 w-full rounded-xl overflow-hidden'
              >
                {/* Shared Stuff between different stages */}
                <motion.button
                  layout
                  className='absolute top-5 right-5 bg-black bg-opacity-50 w-8 rounded-lg z-10 p-2 text-stone-200'
                  onClick={() => setFullscreen((val) => !val)}
                >
                  {!fullscreen && <FullScreenIcon />}
                  {fullscreen && <SmallScreenIcon />}
                </motion.button>

                <CallWrapper fullscreen={fullscreen}>
                  {/* Calling Stage */}
                  {/* <Calling /> */}

                  {/* On-Call Stage */}
                  <OnCall />

                  {/* Call End Stage */}
                  {/* <CallEnd /> */}
                </CallWrapper>
              </motion.div>

              {/* Control Buttons */}
              <div
                className={classNames(
                  'w-full flex justify-center',
                  fullscreen ? 'h-24' : 'h-32'
                )}
              >
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
              {!fullscreen && (
                <Modal>
                  <Modal.Button className='w-full rounded-lg border border-red-500 flex items-center justify-center p-3 font-medium text-red-500 transition hover:bg-rose-50'>
                    Leave Notes on your session
                  </Modal.Button>

                  <Modal.Content>
                    <Modal.Header
                      title='Leave Notes on your session'
                      icon={NoteIcon}
                    />

                    <form className='mt-10 flex flex-col'>
                      <div className='relative mb-10'>
                        <label
                          htmlFor='call'
                          className='absolute -top-0.5 left-2 -translate-y-1/2 bg-white px-3 py-0.5 text-stone-500'
                        >
                          Call Sumary
                        </label>
                        <input
                          id='call'
                          type='text'
                          className='w-full rounded-xl border border-stone-300 py-4 px-6 outline-none focus:border-stone-500 peer transition'
                          value='I'
                        />
                      </div>
                      <div className='relative'>
                        <label
                          htmlFor='note'
                          className='absolute -top-0.5 left-2 -translate-y-1/2 bg-white px-3 text-stone-500'
                        >
                          Notes
                        </label>
                        <textarea
                          id='note'
                          className='w-full rounded-xl border border-stone-300 py-5 px-6 outline-none focus:border-stone-500 peer transition h-72'
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua. Ut enim
                          ad minim veniam, quis nostrud exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat.
                        </textarea>
                      </div>

                      {/* Buttons Container */}
                      <div className='flex items-center justify-end gap-4 mt-5'>
                        <Modal.Close asChild>
                          <Button variant='tertiary'>Cancel</Button>
                        </Modal.Close>
                        <Button
                          variant='primary'
                          type='submit'
                          className='px-8'
                        >
                          Save
                        </Button>
                      </div>
                    </form>
                  </Modal.Content>
                </Modal>
              )}
            </div>
          </div>

          {/* Client Journal part */}
          {!fullscreen && (
            <div className='flex-1'>
              <div className='w-full mt-10 xl:mt-0 xl:pl-5 xl:border-l border-stone-200 h-full'>
                <ClientJournal />
              </div>
            </div>
          )}
        </div>
      </Panel>
    </>
  );
}

export default VideoCallPage;
