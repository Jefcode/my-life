import * as Checkbox from '@radix-ui/react-checkbox';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import Modal from '../../../components/common/Modal';
import classNames from '../../../utils/classNames';
import Input from '../../../components/common/Input';
import Button from '../../../components/common/Button';
import {
  ArticleIcon,
  CheckIcon,
  HubIcon,
  PodcastIcon,
  VideoIcon,
} from '../../../icons';

const STEPS = 3;

type medias = 'video' | 'podcast' | 'article';

const CreateMediaModal = () => {
  const [mediaType, setMediaType] = useState<medias>('video');
  const [step, setStep] = useState(0);

  let title: string = '';
  if (step === 0) title = 'Select a media type:';
  else if (step === 1) title = `Write ${mediaType} description`;
  else if (step === 2) title = `Thumbnail and Category`;

  const selectMediaHandler = (media: medias) => {
    setMediaType(media);
    goNextStep();
  };

  const goNextStep = () => {
    setStep((val) => (val + 1 <= STEPS ? val + 1 : val));
  };

  const onDrop = useCallback(() => {}, []);
  const {
    getRootProps,
    getInputProps,

    isDragAccept,
    isDragActive,
    isDragReject,
  } = useDropzone({
    accept: { 'image/png': ['.png'], 'image/jpeg': ['.jpg', '.png'] },
    onDrop,
  });

  return (
    <Modal.Content className={classNames(step === 0 ? '!w-[500px]' : '')}>
      <Modal.Header
        className='text-stone-800 mb-5'
        title={title}
        icon={HubIcon}
      />

      {/* STEPS */}
      {step === 0 && (
        <div className='flex flex-col sm:flex-row items-stretch justify-between gap-5'>
          <button
            onClick={() => selectMediaHandler('video')}
            className='w-full rounded-lg h-32 flex flex-col items-center justify-center gap-1 text-stone-700 bg-stone-100 hover:border-stone-300 transition border border-stone-200'
          >
            <VideoIcon />
            <span className='text-xl font-medium'>Video</span>
          </button>
          <button
            onClick={() => selectMediaHandler('podcast')}
            className='w-full rounded-lg h-32 flex flex-col items-center justify-center gap-1 text-stone-700 bg-stone-100 hover:border-stone-300 transition border border-stone-200'
          >
            <PodcastIcon />
            <span className='text-xl font-medium'>Podcast</span>
          </button>
          <button
            onClick={() => selectMediaHandler('article')}
            className='w-full rounded-lg h-32 flex flex-col items-center justify-center gap-1 text-stone-700 bg-stone-100 hover:border-stone-300 transition border border-stone-200'
          >
            <ArticleIcon />
            <span className='text-xl font-medium'>Article</span>
          </button>
        </div>
      )}

      {step === 1 && (
        <div className='mt-8'>
          <form>
            <Input label='Title' className='!font-medium' />
            <Input type='textarea' label='Description'></Input>
            {/* Checkboxes */}
            <div className='flex items-center gap-10 mt-5'>
              <div className='flex items-center'>
                <Checkbox.Root
                  className='flex h-6 w-6 appearance-none items-center justify-center rounded-[4px] bg-white transition duration-100 border border-primary data-[state=checked]:bg-primary outline-none'
                  defaultChecked
                  id='c1'
                >
                  <Checkbox.Indicator className='text-white'>
                    <CheckIcon className='w-3 h-3' />
                  </Checkbox.Indicator>
                </Checkbox.Root>
                <label
                  className='pl-[15px] text-[15px] leading-none'
                  htmlFor='c1'
                >
                  URL
                </label>
              </div>
              <div className='flex items-center'>
                <Checkbox.Root
                  className='flex h-6 w-6 appearance-none items-center justify-center rounded-[4px] bg-white transition duration-100 border border-primary data-[state=checked]:bg-primary outline-none'
                  id='c2'
                >
                  <Checkbox.Indicator className='text-white'>
                    <CheckIcon className='w-3 h-3' />
                  </Checkbox.Indicator>
                </Checkbox.Root>
                <label
                  className='pl-[15px] text-[15px] leading-none'
                  htmlFor='c2'
                >
                  Upload a file
                </label>
              </div>
            </div>

            {/* Dropzone */}
            <div className='w-full relative'>
              <label className='absolute -top-0.5 left-2 -translate-y-1/2 bg-white px-3 text-primary'>
                Upload a file
              </label>
              <div
                {...getRootProps({
                  className: classNames(
                    'w-full flex items-center justify-center p-10 mt-8 border border-dashed border-primary rounded-xl transition',
                    isDragAccept ? 'border-green-500' : '',
                    isDragReject ? '!bg-rose-100' : ''
                  ),
                })}
              >
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p className='text-stone-600 font-medium'>
                    Drop the files here...
                  </p>
                ) : (
                  <p className='text-stone-600 font-medium'>
                    Drag 'n' drop some files here, or click to select files
                  </p>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className='flex items-center justify-end gap-3 mt-8'>
              <Modal.Close asChild>
                <Button variant='tertiary'>Discard</Button>
              </Modal.Close>
              <Button variant='primary' onClick={() => goNextStep()}>
                Next
              </Button>
            </div>
          </form>
        </div>
      )}
    </Modal.Content>
  );
};

export default CreateMediaModal;
