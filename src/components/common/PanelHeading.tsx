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
      <Icon />
      <span className='font-semibold text-xl text-stone-900'>{title}</span>
    </div>
  );
};

export default PanelHeading;
