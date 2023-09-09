interface CallWrapperProps {
  children?: React.ReactNode;
  className?: string;
  fullscreen: boolean;
}

const CallWrapper = ({
  children,
  className = '',
  fullscreen,
}: CallWrapperProps) => {
  return (
    <div
      className={`w-full h-[500px] relative ${
        fullscreen && 'lg:h-[700px]'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default CallWrapper;
