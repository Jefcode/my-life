import { useState } from 'react';

import Modal from '../../../components/common/Modal';
import { ReactComponent as HubIcon } from '../../../icons/hub-active.svg';
import { ReactComponent as VideoIcon } from '../../../icons/video-active.svg';
import { ReactComponent as PodcastIcon } from '../../../icons/podcast.svg';
import { ReactComponent as ArticleIcon } from '../../../icons/article.svg';
import classNames from '../../../utils/classNames';
import Input from '../../../components/common/Input';

const STEPS = ['select', 'description', 'thumbnail'];

type medias = 'video' | 'podcast' | 'article';

const CreateMediaModal = () => {
  const [mediaType, setMediaType] = useState<medias>('video');
  const [step, setStep] = useState(0);

  let title: string;
  if (step === 0) title = 'Select a media type:';
  else if (step === 1) title = `Write ${mediaType} description`;
  else if (step === 2) title = `Thumbnail and Category`;
  else title = '';

  const selectMediaHandler = (media: medias) => {
    setMediaType(media);
    goNextStep();
  };

  const goNextStep = () => {
    setStep((val) => (val + 1 < STEPS.length - 1 ? val + 1 : val));
  };

  return (
    <Modal.Content className={classNames(step === 0 ? '!w-[500px]' : '')}>
      <Modal.Header
        className='text-stone-800 mb-5'
        title={title}
        icon={HubIcon}
      />

      {/* STEPS */}
      {step === 0 && (
        <div className='flex items-stretch justify-between gap-5'>
          <button
            onClick={() => selectMediaHandler('video')}
            className='w-32 rounded-lg h-32 flex flex-col items-center justify-center gap-1 text-stone-700 bg-stone-100 hover:border-stone-300 transition border border-stone-200'
          >
            <VideoIcon />
            <span className='text-xl font-medium'>Video</span>
          </button>
          <button
            onClick={() => selectMediaHandler('podcast')}
            className='w-32 rounded-lg h-32 flex flex-col items-center justify-center gap-1 text-stone-700 bg-stone-100 hover:border-stone-300 transition border border-stone-200'
          >
            <PodcastIcon />
            <span className='text-xl font-medium'>Podcast</span>
          </button>
          <button
            onClick={() => selectMediaHandler('article')}
            className='w-32 rounded-lg h-32 flex flex-col items-center justify-center gap-1 text-stone-700 bg-stone-100 hover:border-stone-300 transition border border-stone-200'
          >
            <ArticleIcon />
            <span className='text-xl font-medium'>Article</span>
          </button>
        </div>
      )}

      {step === 1 && (
        <div className='mt-8'>
          <Input label='Title' className='!font-medium' />
        </div>
      )}
    </Modal.Content>
  );
};

export default CreateMediaModal;
