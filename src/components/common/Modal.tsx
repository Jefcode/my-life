import * as Dialog from '@radix-ui/react-dialog';
import { FiX } from 'react-icons/fi';

import classNames from '../../utils/classNames';
import PanelHeading from './PanelHeading';

const Modal = ({ children }: { children: React.ReactNode }) => {
  return <Dialog.Root>{children}</Dialog.Root>;
};

function ModalContent({
  children,
  className = '',
  dark = false,
}: {
  className?: string;
  children?: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className='fixed inset-0 bg-black/50' />

      <Dialog.Content
        className={classNames(
          'rounded-3xl fixed top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 max-w-[calc(100vw-20px)] w-[700px] max-h-[calc(100vh-20px)] z-20 p-8 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-neutral-100 data-[state=open]:animate-[dialog-content-show_200ms] data-[state=closed]:animate-[dialog-content-hide_200ms]',
          dark ? 'bg-[#404649] text-white' : 'bg-white',
          className
        )}
      >
        <Dialog.Close
          className={classNames(
            'absolute top-7 right-6 p-2 cursor-pointer z-10 rounded-full transition',
            dark
              ? 'text-stone-800 bg-stone-200 shadow-lg'
              : 'hover:bg-stone-100 text-stone-600 hover:text-stone-900'
          )}
        >
          <FiX className='h-5 w-5 text-current' />
        </Dialog.Close>
        <div className='w-full h-full relative'>{children}</div>
      </Dialog.Content>
    </Dialog.Portal>
  );
}

Modal.Button = Dialog.Trigger;
Modal.Content = ModalContent;
Modal.Header = PanelHeading;
Modal.Close = Dialog.Close;

export default Modal;
