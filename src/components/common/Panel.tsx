import classNames from '../../utils/classNames';

interface PanelProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

const Panel = ({ children, className = '' }: PanelProps) => {
  return (
    <div className={classNames('bg-white rounded-2xl p-5', className)}>
      {children}
    </div>
  );
};

const PanelHeader = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className='flex items-center justify-between gap-2 mb-5'>
      {children}
    </div>
  );
};

Panel.Header = PanelHeader;

export default Panel;
