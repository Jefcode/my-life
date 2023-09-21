import classNames from '../../utils/classNames';

interface PanelProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

const Panel = ({ children, className = '' }: PanelProps) => {
  return (
    <div
      className={classNames(
        'card bg-white rounded-xl p-5 overflow-hidden',
        className
      )}
    >
      {children}
    </div>
  );
};

const PanelHeader = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className='w-full flex flex-wrap items-center justify-between gap-2'>
      {children}
    </div>
  );
};

Panel.Header = PanelHeader;

export default Panel;
