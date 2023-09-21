import { IconType } from '../../types';
import classNames from '../../utils/classNames';

const PanelHeading = ({
  title,
  subtitle,
  icon: Icon,
  className = '',
}: {
  title: string;
  subtitle?: string;
  icon?: IconType;
  className?: string;
}) => {
  return (
    <div className={classNames('flex gap-3', className)}>
      {Icon && (
        <div className='w-7'>
          <Icon className='w-7 h-7' />
        </div>
      )}
      <div className='flex flex-col'>
        <span className='font-medium text-xl text-current whitespace-nowrap'>
          {title}
        </span>
        {subtitle && <span className='text-primary text-sm'>{subtitle}</span>}
      </div>
    </div>
  );
};

export default PanelHeading;
