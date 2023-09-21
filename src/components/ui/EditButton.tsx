import { EditIcon } from '../../assets/icons';
import classNames from '../../utils/classNames';

const EditButton = ({ className = '' }: { className?: string }) => {
  return (
    <button
      className={classNames(
        'rounded-full w-6 h-6 bg-orange-500 flex items-center justify-center text-sm text-white hover:bg-orange-600 transition active:scale-95',
        className
      )}
    >
      <EditIcon className='w-3 h-3' />
    </button>
  );
};

export default EditButton;
