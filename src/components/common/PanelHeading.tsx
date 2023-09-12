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
    <div className={classNames('flex items-center gap-4', className)}>
      <Icon className='w-7 h-7' />
      <span className='font-medium text-xl text-current whitespace-nowrap'>
        {title}
      </span>
    </div>
  );
};

export default PanelHeading;
