import { IconType } from '../../types';
import classNames from '../../utils/classNames';

const PanelHeading = ({
  title,
  icon: Icon,
  className = '',
}: {
  title: string;
  icon: IconType;
  className?: string;
}) => {
  return (
    <div className={classNames('flex items-center gap-3', className)}>
      <div className='w-7'>
        <Icon className='w-7 h-7' />
      </div>
      <span className='font-medium text-xl text-current whitespace-nowrap'>
        {title}
      </span>
    </div>
  );
};

export default PanelHeading;
