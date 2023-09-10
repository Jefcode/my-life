import * as Dialog from '@radix-ui/react-dialog';
import { GrClose } from 'react-icons/gr';
import type { IconType } from '../../types';

import classNames from '../../utils/classNames';

const Modal = ({ children }: { children: React.ReactNode }) => {
  return <Dialog.Root>{children}</Dialog.Root>;
};

function ModalContent({
  children,
  className = '',
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className='fixed inset-0 bg-black/50' />

      <Dialog.Content
        className={classNames(
          'bg-white rounded-2xl fixed top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 max-w-[calc(100vw-20px)] w-[700px] max-h-[calc(100vh-20px)] z-20 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-neutral-100 data-[state=open]:animate-[dialog-content-show_200ms] data-[state=closed]:animate-[dialog-content-hide_200ms]',
          className
        )}
      >
        <div className='w-full h-full p-8 relative'>
          <Dialog.Close className='absolute top-8 right-8 text-stone-600 hover:text-stone-900 hover:bg-stone-100 p-2 rounded-full transition'>
            <GrClose className='	h-4 w-4' />
          </Dialog.Close>

          {children}
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
}

function ModalHeader({ title, icon: Icon }: { title: string; icon: IconType }) {
  return (
    <div className='flex items-center gap-4 mb-5'>
      <Icon />
      <span className='font-semibold text-xl text-stone-900'>{title}</span>
    </div>
  );
}

Modal.Button = Dialog.Trigger;
Modal.Content = ModalContent;
Modal.Header = ModalHeader;
Modal.Close = Dialog.Close;

export default Modal;
