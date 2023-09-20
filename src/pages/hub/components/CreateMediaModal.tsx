import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import Modal from '../../../components/common/Modal';
import classNames from '../../../utils/classNames';
import Input from '../../../components/common/Input';
import Button from '../../../components/common/Button';
import {
  ArticleIcon,
  HubActiveIcon,
  PodcastIcon,
  VideoActiveIcon,
} from '../../../icons';
import Checkbox from '../../../components/common/Checkbox';
import UploadThumbnailDropzone from './UploadThumbnailDropzone';
import SelectInput from '../../../components/common/SelectInput';

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
        icon={HubActiveIcon}
      />

      {/* STEPS */}
      {step === 0 && (
        <div className='flex flex-col sm:flex-row items-stretch justify-between gap-5'>
          <button
            onClick={() => selectMediaHandler('video')}
            className='w-full rounded-lg h-32 flex flex-col items-center justify-center gap-1 text-stone-700 bg-stone-100 hover:border-stone-300 transition border border-stone-200'
          >
            <VideoActiveIcon />
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
            <div className='mb-7'>
              <Input label='Title' className='!font-medium' />
            </div>
            <Input type='textarea' label='Description'></Input>
            {/* Checkboxes */}
            <div className='flex items-center gap-10 mt-5'>
              <div className='flex items-center'>
                <Checkbox id='c1' defaultChecked />
                <label
                  className='pl-[15px] text-[15px] leading-none'
                  htmlFor='c1'
                >
                  URL
                </label>
              </div>
              <div className='flex items-center'>
                <Checkbox id='c2' />
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

      {step === 2 && (
        <div className='mt-8'>
          <UploadThumbnailDropzone />
          <p className='text-stone-400 mt-4 font-light text-sm'>
            png, jpeg, gif files up to 8mb, Recommended size is 350x150px.
          </p>

          {/* Divider */}
          <div className='border-b border-stone-200 w-full my-8'></div>

          <SelectInput
            label='Category'
            options={[
              { value: 'drugs', label: 'Drugs' },
              { value: 'alcohol', label: 'Alcohol' },
              { value: 'gambling', label: 'Gambling' },
            ]}
          />

          <div className='flex items-center gap-4 justify-end mt-10'>
            <Button variant='tertiary'>Save as draft</Button>
            <Button variant='primary'>Publish</Button>
          </div>
        </div>
      )}
    </Modal.Content>
  );
};

export default CreateMediaModal;
