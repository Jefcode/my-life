import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import classNames from '../../../utils/classNames';
import { ClipIcon, TrashAltIcon } from '../../../assets/icons';

const UploadThumbnailDropzone = () => {
  const [file, setFile] = useState<File & { preview: string }>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onDrop = useCallback((acceptedFiles: any) => {
    // Do something with the files
    setFile(
      Object.assign(acceptedFiles[0], {
        preview: URL.createObjectURL(acceptedFiles[0]),
      })
    );
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpg', '.png'],
      'image/gif': ['.gif'],
    },
    onDrop,
  });

  return (
    <div className='w-full relative'>
      <label className='absolute -top-0.5 left-2 -translate-y-1/2 bg-white px-3 text-primary z-10'>
        Upload a file
      </label>
      <div className='relative w-full mt-8 border border-dashed border-primary rounded-xl transition'>
        {!file && (
          <div
            {...getRootProps({
              className: classNames(
                'w-full h-full flex items-center justify-center p-8',
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
        )}

        {file && (
          <div className='w-full h-full p-5 flex items-center'>
            <div className='w-full flex items-center justify-between gap-3 flex-wrap'>
              <div className='flex flex-wrap items-center gap-5'>
                <img
                  src={file.preview}
                  className='w-28 h-16 object-cover rounded-md'
                  alt='Video thumbnail'
                />

                <span className='text-stone-800 font-medium'>{file.name}</span>
              </div>

              <div className='flex items-center gap-3'>
                <button
                  className='w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center hover:bg-slate-100 transition active:scale-90 text-stone-800'
                  onClick={() => setFile(undefined)}
                >
                  <TrashAltIcon className='w-5 h-5' />
                </button>
                <button className='w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center hover:bg-slate-100 transition active:scale-90 text-stone-800'>
                  <ClipIcon className='w-5 h-5' />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadThumbnailDropzone;
